import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

describe('ContactsService', () => {
  let service: ContactsService;
  let repository: Repository<Contact>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        {
          provide: getRepositoryToken(Contact),
          useClass: Repository<Contact>,
        },
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
    repository = module.get<Repository<Contact>>(getRepositoryToken(Contact));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new contact', async () => {
    const createContactDto: CreateContactDto = {
      name: 'John Doe',
      phone: '123456789',
      image: 'image.jpg',
      biography: 'A nice guy',
    };
    const createdContact = { id: '1', ...createContactDto };

    jest.spyOn(repository, 'create').mockReturnValue(createdContact);
    jest.spyOn(repository, 'save').mockResolvedValue(createdContact);

    expect(await service.create(createContactDto)).toEqual(createdContact);
  });

  it('should find all contacts with filters', async () => {
    const filters = { page: 1, search: 'John' };
    const contacts = [
      {
        id: '1',
        name: 'John Doe',
        phone: '123456789',
        image: 'image.jpg',
        biography: 'A nice guy',
      },
    ];
    const total = 1;

    jest.spyOn(repository, 'findAndCount').mockResolvedValue([contacts, total]);

    expect(await service.findAll(filters)).toEqual({
      items: contacts,
      page: 1,
      total,
    });
  });

  it('should find one contact by id', async () => {
    const contact: Contact = {
      id: '1',
      name: 'John Doe',
      phone: '123456789',
      image: 'image.jpg',
      biography: '',
    };

    jest.spyOn(repository, 'findOne').mockResolvedValue(contact);

    expect(await service.findOne('1')).toEqual(contact);
  });

  it('should update a contact', async () => {
    const updateContactDto: UpdateContactDto = { name: 'Jane Doe' };
    const updateResult = { affected: 1, raw: [], generatedMaps: [] };
    const result = { success: true, message: undefined };

    jest.spyOn(repository, 'update').mockResolvedValue(updateResult);

    expect(await service.update('1', updateContactDto)).toEqual(result);
  });

  it("shouldn't update a contact", async () => {
    const updateContactDto: UpdateContactDto = { name: 'Jane Doe' };
    const updateResult = { affected: 0, raw: [], generatedMaps: [] };
    const result = { success: false, message: 'Contact not found' };

    jest.spyOn(repository, 'update').mockResolvedValue(updateResult);

    expect(await service.update('1', updateContactDto)).toEqual(result);
  });

  it('should remove a contact', async () => {
    const deleteResult = { affected: 1, raw: [], generatedMaps: [] };
    const result = { success: true, message: undefined };

    jest.spyOn(repository, 'delete').mockResolvedValue(deleteResult);

    expect(await service.remove(1)).toEqual(result);
  });

  it("shouldn't remove a contact", async () => {
    const deleteResult = { affected: 0, raw: [], generatedMaps: [] };
    const result = { success: false, message: 'Contact not found' };

    jest.spyOn(repository, 'delete').mockResolvedValue(deleteResult);

    expect(await service.remove(1)).toEqual(result);
  });
});
