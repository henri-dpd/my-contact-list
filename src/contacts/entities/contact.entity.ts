import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'longblob', nullable: true })
  image?: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'longtext', nullable: true })
  biography: string;
}
