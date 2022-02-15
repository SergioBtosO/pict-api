import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudDao } from './../../../common/base/dao/crud.dao';
import { TimeRecord } from './../entities';

@Injectable()
export class TimeRecordsDao extends CrudDao<TimeRecord> {
  constructor(
    @InjectRepository(TimeRecord)
    private _repository: Repository<TimeRecord>,
  ) {
    super(_repository);
  }
}
