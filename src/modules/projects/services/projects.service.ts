import { Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial } from 'typeorm';

import { CreateProjectDto, UpdateProjectDto } from './../dto';
import { Project } from './../entities';
import { ProjectsDao } from './../dao/projects.dao';
import { UsersService } from './../../users/services';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly projectsDao: ProjectsDao,
    private readonly usersService: UsersService,
  ) {}

  async getProjects() {
    return await this.projectsDao.getAll();
  }

  async getProjectById(id: string): Promise<Project> {
    const project = await this.projectsDao.getOne(id);
    if (!project) {
      throw new NotFoundException('Proyecto no encontrado!');
    }
    return project;
  }

  async createProject(payload: CreateProjectDto) {
    const userProject = await this.usersService.getUserById(
      payload.user_aprover,
    );
    if (!userProject) {
      throw new NotFoundException('Usuario no encontrado!');
    }

    const projectToCreate: DeepPartial<Project> = {
      status: payload.status,
      user_aprover: userProject,
      name: payload.name,
      code: payload.code,
    };

    const project = await this.projectsDao.create(projectToCreate);
    return await this.projectsDao.save(project);
  }

  async updateProject(id: string, payload: UpdateProjectDto) {
    const project = await this.projectsDao.getOne(id);
    if (!project) {
      throw new NotFoundException('Proyecto no encontrado!');
    }
    const userProject = await this.usersService.getUserById(
      payload.user_aprover,
    );
    if (!userProject) {
      throw new NotFoundException('Usuario no encontrado!');
    }

    project.status = payload.status;
    project.user_aprover = userProject;
    project.name = payload.name;
    project.code = payload.code;

    return await this.projectsDao.update(id, project);
  }

  async removeTimeRecord(id: string) {
    return await this.projectsDao.delete(id);
  }
}
