import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudDao } from './../../../common/base/dao/crud.dao';
import { CostCenter } from './../entities';

@Injectable()
export class CostCentersDao extends CrudDao<CostCenter> {
  constructor(
    @InjectRepository(CostCenter)
    private _repository: Repository<CostCenter>,
  ) {
    super(_repository);
  }
}
