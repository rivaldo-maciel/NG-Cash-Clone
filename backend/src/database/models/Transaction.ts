import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
class Transaction {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'debited_account_id' })
  debitedAccountId: number;

  @Column({ name: 'credited_account_id' })
  creditedAccountId: number;

  @Column()
  value: number;

  @Column()
  createdAt?: Date;
}

export default Transaction;
