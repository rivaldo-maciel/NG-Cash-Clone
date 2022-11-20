import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Account {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  balance: number;
}

export default Account;
