import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';

import { CreateCostCenterDto, UpdateCostCenterDto } from './../dto';
import { CostCentersService } from './../services';
import { CostCenter } from './../entities';

@Controller('cost-centers')
export class CostCentersController {
  constructor(private readonly costCentersService: CostCentersService) {}

  @Get()
  getCostCenters(): Promise<CostCenter[]> {
    return this.costCentersService.getCostCenters();
  }

  @Get(':id')
  getCostCenterById(@Param('id') id: string): Promise<CostCenter> {
    return this.costCentersService.getCostCenterById(id);
  }

  @Post()
  createCostCenter(@Body() costCenter: CreateCostCenterDto) {
    return this.costCentersService.createCostCenter(costCenter);
  }

  @Put(':id')
  updateCostCenterById(
    @Param('id') id: string,
    @Body() costCenter: UpdateCostCenterDto,
  ) {
    return this.costCentersService.updateCostCenter(id, costCenter);
  }

  @Delete(':id')
  deleteCostCenterById(@Param('id') id: string) {
    return this.costCentersService.removeCostCenter(id);
  }
}
