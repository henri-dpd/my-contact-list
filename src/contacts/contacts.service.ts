import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { IFilter } from 'src/common/interfaces/filters';
import { Contact } from './entities/contact.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto) {
    const newContact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(newContact);
  }

  async findAll(filters: IFilter) {
    const skip = filters.page > 0 ? filters.page - 1 : 0;
    const [items, total] = await this.contactRepository.findAndCount({
      take: 10,
      skip: skip,
      where: { name: Like(`%${filters.search ?? ''}%`) },
      select: { name: true, id: true, image: true, phone: true },
    });
    const page = filters.page > 0 ? +filters.page : 1;
    return { items, page, total };
  }

  async findOne(id: string) {
    return await this.contactRepository.findOne({ where: { id: `${id}` } });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update({ id }, updateContactDto);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
