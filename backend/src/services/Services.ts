import {
  DataSource,
  DeleteResult,
  EntityTarget,
  Repository,
  UpdateResult
} from 'typeorm';
import IServices from './interfaces/IServices';
import { z, ZodRawShape } from 'zod';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

abstract class Services<T, U = void> implements IServices<T> {
  private dataSource: DataSource;
  protected repository: Repository<T>;
  protected schema: z.ZodObject<ZodRawShape>;
  protected repositorySupport: Repository<U>;

  constructor(
    dataSource: DataSource,
    model: EntityTarget<T>,
    schema: z.ZodObject<ZodRawShape>,
    modelSupport?: EntityTarget<U>
  ) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(model);
    this.schema = schema;
    if (modelSupport) {
      this.repositorySupport = this.dataSource.getRepository(modelSupport);
    }
  }

  public abstract create(entity: T): Promise<T>;

  public abstract getAll(): Promise<T[]>;

  public abstract update(
    id: number,
    alteration: QueryDeepPartialEntity<T>
  ): Promise<UpdateResult>;

  public abstract remove(id: number): Promise<DeleteResult>;
}

export default Services;
