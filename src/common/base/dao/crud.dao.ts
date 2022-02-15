import { DeepPartial, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindConditions } from 'typeorm/find-options/FindConditions';

/**
 * This class is a crud that contains all the common methods which a dao can
 * contains
 *
 * If you want it, you can add more methods
 *
 * You can override methods like the next example
 *
 * ```
 * create(data: Account): Account {
 *   super.create(data);
 *   // do more stuff
 *   return data;
 * }
 * ```
 * */
export abstract class CrudDao<Entity, IdType = string> {
  protected constructor(protected _baseRepository: Repository<Entity>) {}

  create(data: DeepPartial<Entity>) {
    return this._baseRepository.create(data);
  }

  saveMany(data: DeepPartial<Entity>[]) {
    return this._baseRepository.save(data);
  }

  save(data: DeepPartial<Entity>) {
    return this._baseRepository.save(data);
  }

  update(
    idOrCriteria: IdType | FindConditions<Entity>,
    data: QueryDeepPartialEntity<Entity>,
  ) {
    return this._baseRepository.update(idOrCriteria, data);
  }

  getAll() {
    return this._baseRepository.find();
  }

  getOne(id: IdType) {
    return this._baseRepository.findOne(id);
  }

  getOneWhere(conditions: FindConditions<Entity>) {
    return this._baseRepository.findOne(conditions);
  }

  merge(entity: Entity, ...entityLikes: DeepPartial<Entity>[]) {
    return this._baseRepository.merge(entity, ...entityLikes);
  }

  delete(id: IdType) {
    return this._baseRepository.delete(id);
  }
}
