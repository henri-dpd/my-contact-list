import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column({ nullable: true })
  image?: string;
  @Column()
  phone: string;
  @Column({ nullable: true })
  biography: string;
}
