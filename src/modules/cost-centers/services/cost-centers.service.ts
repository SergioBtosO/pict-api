import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateCostCenterDto, UpdateCostCenterDto } from './../dto';
import { CostCenter } from './../entities';
import { CostCentersDao } from './../dao';
import { UsersService } from './../../users/services';

@Injectable()
export class CostCentersService {
  constructor(
    private readonly costCentersDao: CostCentersDao,
    private readonly usersService: UsersService,
  ) {}

  async getCostCenters(): Promise<CostCenter[]> {
    return await this.costCentersDao.getAll();
  }

  async getCostCenterById(id: string): Promise<CostCenter> {
    const User = await this.costCentersDao.getOne(id);
    if (!User) {
      throw new NotFoundException('Registro no encontrado!');
    }
    return User;
  }

  async createCostCenter(payload: CreateCostCenterDto) {
    const costCenter = await this.costCentersDao.create(payload);
    return await this.costCentersDao.save(costCenter);
  }

  async updateCostCenter(id: string, payload: UpdateCostCenterDto) {
    const CostCenter = await this.costCentersDao.getOne(id);
    if (!CostCenter) {
      throw new NotFoundException('Centro de costos no encontrado!');
    }
    CostCenter.name = payload.name;
    CostCenter.code = payload.code;
    CostCenter.description = payload.description;
    CostCenter.status = payload.status;
    return await this.costCentersDao.update(id, CostCenter);
  }

  async removeCostCenter(id: string) {
    return await this.costCentersDao.delete(id);
  }
}
