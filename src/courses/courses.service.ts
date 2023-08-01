import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/shared/entities/course.entity';
import { Repository } from 'typeorm';
import { IService } from 'src/shared/generics/IService';

@Injectable()
export class CoursesService implements IService<Course, CreateCourseDto, UpdateCourseDto> {

  constructor(@InjectRepository(Course) private readonly courseRepository: Repository<Course>) { }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = this.courseRepository.create(createCourseDto);
    console.log(JSON.stringify(course));
    return await this.courseRepository.save(course);
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find({ relations: { disciplines: { activities: true } } });
  }

  async findOne(id: string): Promise<Course> {
    return await this.courseRepository.findOne({
      where: { id }
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<boolean> {
    await this.courseRepository.update(id, updateCourseDto);
    return true;
  }

  async remove(id: string): Promise<boolean> {
    await this.courseRepository.softDelete(id);
    return true;
  }
}
