import { UpdateResult, DeleteResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface IServices<T> {
  create(entity: T): Promise<T>;

  getAll(): Promise<T[]>;

  getOne?(id: number): Promise<T>;

  update(
    id: number,
    alteration: QueryDeepPartialEntity<T>
  ): Promise<UpdateResult>;

  remove(id: number): Promise<DeleteResult>;
}

export default IServices;
