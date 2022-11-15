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

  @Column()
  value: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default Transaction;
