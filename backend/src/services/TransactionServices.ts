import { UpdateResult, DeleteResult } from 'typeorm';
import Transaction from '../database/models/Transaction';
import ITransaction from './interfaces/ITransactionServices';
import Services from './Services';

class TransactionServices extends Services<Transaction> implements ITransaction {

  public async create(entity: Transaction): Promise<Transaction> {
    this.schema.parse(entity);
    return await this.repository.save(entity);
  }

  public async getAll(): Promise<Transaction[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<Transaction> {
    return await this.repository.findOne({ where: { id } });
  }

  public async update(
    id: number,
    alteration: {
      id?: number;
      debitedAccountId?: number;
      creditedAccountId?: number;
      value?: number;
      createdAt?: string
    }
  ): Promise<UpdateResult> {
    await this.checkExistence(id);
    return this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return this.repository.delete(id);
  }
}

export default TransactionServices;
