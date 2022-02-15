import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudDao } from './../../../common/base/dao/crud.dao';
import { User } from './../entities';

@Injectable()
export class UsersDao extends CrudDao<User> {
  constructor(
    @InjectRepository(User)
    private _repository: Repository<User>,
  ) {
    super(_repository);
  }
}
