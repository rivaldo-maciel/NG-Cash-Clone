import {
  DataSource,
  DeleteResult,
  EntityTarget,
  FindOneOptions,
  Repository,
  UpdateResult
} from 'typeorm';
import IServices from './interfaces/IServices';
import { z, ZodRawShape } from 'zod';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import EntityNotFoundError from '../errors/EntityNotFoundError';
import UnauthorizedError from '../errors/UnauthorizedError';

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

  public abstract create(entity: T, userId?: number): Promise<T>;

  public abstract getAll(): Promise<T[]>;

  public abstract getOne(id: number, userId: number): Promise<T>;

  public abstract update(
    id: number,
    alteration: QueryDeepPartialEntity<T>,
    userId: number
  ): Promise<UpdateResult>;

  public abstract remove(id: number, userId: number): Promise<DeleteResult>;

  public async checkExistence(id: number): Promise<void> {
    const entity = await this.repository.findOne({ where: { id } } as FindOneOptions);
    if (!entity) throw new EntityNotFoundError();
  }

  public async checkUserAuth(id: number, userId: number): Promise<void> {
    if (id !== userId) {
      throw new UnauthorizedError();
    }
  }
}

export default Services;
