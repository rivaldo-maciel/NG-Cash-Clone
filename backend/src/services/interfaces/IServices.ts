import { UpdateResult, DeleteResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface IServices<T> {
  create(entity: T, userId?: number): Promise<T>;

  getAll(): Promise<T[]>;

  getOne(id: number, userId: number): Promise<T>;

  update(
    id: number,
    alteration: QueryDeepPartialEntity<T>,
    userId: number
  ): Promise<UpdateResult>;

  remove(id: number, userId: number): Promise<DeleteResult>;
}

export default IServices;
