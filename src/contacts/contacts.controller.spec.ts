import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PartialContactResponse } from './models/contact';

describe('ContactsController', () => {
  let controller: ContactsController;
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [
        ContactsService,
        {
          provide: getRepositoryToken(Contact),
          useClass: Repository<Contact>,
        },
      ],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
    service = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a contact', async () => {
    const createContactDto: CreateContactDto = {
      name: 'John Doe',
      phone: '1234567890',
      biography: 'A nice guy',
    };
    const result = { id: '1', ...createContactDto };

    jest
      .spyOn(service, 'create')
      .mockImplementation(async (createContactDto: CreateContactDto) =>
        Promise.resolve({ id: '1', ...createContactDto }),
      );

    expect(await controller.create(createContactDto)).toEqual(result);
  });

  it('should return an array of contacts', async () => {
    const result: PartialContactResponse[] = [
      { id: '1', name: 'John Doe', phone: '1234567890' },
    ];
    const paginatedResult = {
      items: result,
      page: 1,
      total: result.length,
    };

    jest.spyOn(service, 'findAll').mockImplementation(async () =>
      Promise.resolve({
        ...paginatedResult,
        items: [...result],
      }),
    );

    expect(
      await controller.findAll({
        search: '',
        page: 1,
      }),
    ).toEqual(paginatedResult);
  });

  it('should return a single contact', async () => {
    const id = '1';
    const result: CreateContactDto = {
      name: 'John Doe',
      phone: '123456789',
      biography: 'A nice guy',
    };

    jest
      .spyOn(service, 'findOne')
      .mockImplementation(async (id: string) =>
        Promise.resolve({ ...result, id }),
      );

    expect(await controller.findOne(id)).toEqual({ ...result, id });
  });

  it('should update a contact', async () => {
    const updateContactDto: UpdateContactDto = { name: 'Jane Doe' };
    const result = { success: true };

    jest
      .spyOn(service, 'update')
      .mockImplementation(async () => Promise.resolve({ ...result }));

    expect(await controller.update('1', updateContactDto)).toEqual(result);
  });

  it('should remove a contact', async () => {
    const result = { success: true, message: undefined };

    jest
      .spyOn(service, 'remove')
      .mockImplementation(async () => Promise.resolve({ ...result }));

    expect(await controller.remove('1')).toEqual(result);
  });
});
