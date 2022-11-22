import {
  Column,
  CreateDateColumn,
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

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  value: number;

  @CreateDateColumn()
  createdAt?: Date;
}

export default Transaction;
