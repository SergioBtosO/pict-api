import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';

import { CreateProjectDto, UpdateProjectDto } from './../dto';
import { ProjectsService } from './../services';
import { Project } from './../entities';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectsService.getProjects();
  }

  @Get(':id')
  getProjectById(@Param('id') id: string): Promise<Project> {
    return this.projectsService.getProjectById(id);
  }

  @Post()
  createProject(@Body() user: CreateProjectDto) {
    return this.projectsService.createProject(user);
  }

  @Put(':id')
  updateProjectById(
    @Param('id') id: string,
    @Body() timeRecord: UpdateProjectDto,
  ) {
    return this.projectsService.updateProject(id, timeRecord);
  }

  @Delete(':id')
  deleteProjectById(@Param('id') id: string) {
    return this.projectsService.removeProject(id);
  }
}
