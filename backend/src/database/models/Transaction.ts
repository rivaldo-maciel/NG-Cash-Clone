import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'debited_account_id' })
  debitedAccountId: number;

  @Column()
  creditedAccountId: number;

  @Column({ name: 'credited_account_id' })
  accountId: number;

  @Column()
  value: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default Transaction;
