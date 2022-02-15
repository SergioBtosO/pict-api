import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CrudDao } from './../../../common/base/dao/crud.dao';
import { Project } from './../entities';

@Injectable()
export class ProjectsDao extends CrudDao<Project> {
  constructor(
    @InjectRepository(Project)
    private _repository: Repository<Project>,
  ) {
    super(_repository);
  }
}
