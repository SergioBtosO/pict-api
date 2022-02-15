import { Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial } from 'typeorm';

import { CreateTimeRecordDto, UpdateTimeRecordDto } from './../dto';
import { TimeRecord } from './../entities';
import { TimeRecordsDao } from './../dao/time-record.dao';
import { UsersService } from './../../users/services';
import { ProjectsService } from './../../projects/services';
import { CostCentersService } from './../../cost-centers/services';

@Injectable()
export class TimeRecordsService {
  constructor(
    private readonly timeRecordDao: TimeRecordsDao,
    private readonly usersService: UsersService,
    private readonly projectsService: ProjectsService,
    private readonly costCentersService: CostCentersService,
  ) {}

  async getTimeRecords() {
    return await this.timeRecordDao.getAll();
  }

  async getTimeRecord(id: string): Promise<TimeRecord> {
    const timeRecord = await this.timeRecordDao.getOne(id);
    if (!timeRecord) {
      throw new NotFoundException('Registro no encontrado!');
    }
    return timeRecord;
  }

  async createTimeRecord(payload: CreateTimeRecordDto) {
    const userTimeRecord = await this.usersService.getUserById(payload.userId);
    if (!userTimeRecord) {
      throw new NotFoundException('Usuario no encontrado!');
    }

    const projectTimeRecord = await this.projectsService.getProjectById(
      payload.projectId,
    );
    if (!projectTimeRecord) {
      throw new NotFoundException('Proyecto no encontrado!');
    }

    const costCenterTimeRecord =
      await this.costCentersService.getCostCenterById(payload.costCenterId);
    if (!costCenterTimeRecord) {
      throw new NotFoundException('Centro de costos no encontrado!');
    }

    const timeRecorToCreate: DeepPartial<TimeRecord> = {
      status: payload.status,
      userId: userTimeRecord,
      projectId: projectTimeRecord,
      costCenterId: costCenterTimeRecord,
      dateStart: payload.dateStart,
      dateEnd: payload.dateEnd,
      discount_lunch: payload.discount_lunch,
    };

    const timeRecord = await this.timeRecordDao.create(timeRecorToCreate);
    return await this.timeRecordDao.save(timeRecord);
  }

  async updateTimeRecord(id: string, payload: UpdateTimeRecordDto) {
    const timeRecord = await this.timeRecordDao.getOne(id);
    if (!timeRecord) {
      throw new NotFoundException('Registro no encontrado!');
    }
    const userTimeRecord = await this.usersService.getUserById(payload.userId);
    if (!timeRecord) {
      throw new NotFoundException('Usuario no encontrado!');
    }
    const projectTimeRecord = await this.projectsService.getProjectById(
      payload.projectId,
    );
    if (!projectTimeRecord) {
      throw new NotFoundException('Proyecto no encontrado!');
    }
    const costCenterTimeRecord =
      await this.costCentersService.getCostCenterById(payload.costCenterId);
    if (!costCenterTimeRecord) {
      throw new NotFoundException('Centro de costos no encontrado!');
    }

    timeRecord.observations = payload.observations;
    timeRecord.userId = userTimeRecord;
    timeRecord.status = payload.status;
    timeRecord.projectId = projectTimeRecord;
    timeRecord.costCenterId = costCenterTimeRecord;
    timeRecord.dateStart = payload.dateStart;
    timeRecord.dateEnd = payload.dateEnd;
    timeRecord.discount_lunch = payload.discount_lunch;

    return await this.timeRecordDao.update(id, timeRecord);
  }

  async removeTimeRecord(id: string) {
    return await this.timeRecordDao.delete(id);
  }
}
