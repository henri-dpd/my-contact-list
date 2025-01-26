import { Injectable } from '@nestjs/common';
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
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto): Promise<ContactResponse> {
    const newContact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(new ContactResponse(newContact));
  }

  async findAll(filters: IFilter): Promise<PaginatedContactResponse> {
    const skip = filters.page > 0 ? filters.page - 1 : 0;
    const [list, total] = await this.contactRepository.findAndCount({
      take: 10,
      skip: skip,
      where: { name: Like(`%${filters.search ?? ''}%`) },
      select: { name: true, id: true, image: true, phone: true },
    });
    const page = filters.page > 0 ? +filters.page : 1;
    const items = list.map((item) => new ContactResponse(item));
    return { items, page, total };
  }

  async findOne(id: string): Promise<ContactResponse | null> {
    const contact = await this.contactRepository.findOne({
      where: { id: `${id}` },
    });
    return contact ? new ContactResponse(contact) : null;
  }

  async update(
    id: string,
    updateContactDto: UpdateContactDto,
  ): Promise<IVoidResponse> {
    const success = Boolean(
      (await this.contactRepository.update({ id }, updateContactDto)).affected,
    );
    return { success, message: !success ? 'Contact not found' : undefined };
  }

  async remove(id: number): Promise<IVoidResponse> {
    const success = Boolean((await this.contactRepository.delete(id)).affected);
    return { success, message: !success ? 'Contact not found' : undefined };
  }
}
