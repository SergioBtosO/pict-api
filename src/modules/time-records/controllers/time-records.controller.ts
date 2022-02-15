import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';

import { CreateTimeRecordDto, UpdateTimeRecordDto } from './../dto';
import { TimeRecordsService } from './../services';
import { TimeRecord } from './../entities';

@Controller('time-records')
export class TimeRecordsController {
  constructor(private readonly timeRecordsService: TimeRecordsService) {}

  @Get()
  getTimeRecords(): Promise<TimeRecord[]> {
    return this.timeRecordsService.getTimeRecords();
  }

  @Get(':id')
  getTimeRecordById(@Param('id') id: string) {
    return this.timeRecordsService.getTimeRecord(id);
  }

  @Post()
  createTimeRecord(@Body() timeRecord: CreateTimeRecordDto) {
    return this.timeRecordsService.createTimeRecord(timeRecord);
  }

  @Put(':id')
  updateTimeRecordById(
    @Param('id') id: string,
    @Body() timeRecord: UpdateTimeRecordDto,
  ) {
    return this.timeRecordsService.updateTimeRecord(id, timeRecord);
  }

  @Delete(':id')
  deleteTimeRecordById(@Param('id') id: string) {
    return this.timeRecordsService.removeTimeRecord(id);
  }
}
