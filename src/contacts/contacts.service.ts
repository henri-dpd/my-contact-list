import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { IFilter } from 'src/common/interfaces/filters';
import { Contact } from './entities/contact.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginatedContactResponse } from './models/paginated-contact';
import { ContactResponse } from './models/contact';
import { IVoidResponse } from 'src/common/interfaces/void-response';

@Injectable()
export class ContactsService {
  private readonly logger = new Logger(ContactsService.name);
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto): Promise<ContactResponse> {
    this.logger.verbose(`Create a new Contact`);
    const newContact = this.contactRepository.create(createContactDto);
    this.logger.log(`New Contact created with id: ${newContact?.id}`);
    return this.contactRepository.save(new ContactResponse(newContact));
  }

  async findAll(filters: IFilter): Promise<PaginatedContactResponse> {
    this.logger.verbose(`List Contacts`);
    const skip = filters.page > 0 ? (filters.page - 1) * 10 : 0;
    const [list, total] = await this.contactRepository.findAndCount({
      take: 10,
      skip: skip,
      where: { name: Like(`%${filters.search ?? ''}%`) },
      select: { name: true, id: true, image: true, phone: true },
    });
    const page = filters.page > 0 ? +filters.page : 1;
    const items = list.map((item) => new ContactResponse(item));
    this.logger.log(`Listed ${items.length} Contacts`);
    return { items, page, total };
  }

  async findOne(id: string): Promise<ContactResponse | null> {
    this.logger.verbose(`Get Contact: ${id}`);
    const contact = await this.contactRepository.findOne({
      where: { id: `${id}` },
    });
    this.logger.log(`Contact ${contact ? id : 'no'} obtained`);
    return contact ? new ContactResponse(contact) : null;
  }

  async update(
    id: string,
    updateContactDto: UpdateContactDto,
  ): Promise<IVoidResponse> {
    this.logger.verbose(`Update Contact: ${id}`);
    const success = Boolean(
      (await this.contactRepository.update({ id }, updateContactDto)).affected,
    );
    this.logger.log(`Contact ${success ? id : 'no'} updated`);
    return { success, message: !success ? 'Contact not found' : undefined };
  }

  async remove(id: number): Promise<IVoidResponse> {
    this.logger.verbose(`Remove Contact: ${id}`);
    const success = Boolean((await this.contactRepository.delete(id)).affected);
    this.logger.log(`Contact ${success ? id : 'no'} removed`);
    return { success, message: !success ? 'Contact not found' : undefined };
  }
}
