import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseService {

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ) { }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findOne({ where: { name: createCourseDto.name } })

    if (course)
      return course;

    return await this.courseRepository.save(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: string) {
    return await this.courseRepository.findOne({
      where: { id }, 
      relations: { subjects: { activities: true } }
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.courseRepository.update(id, updateCourseDto);
  }

  async remove(id: string) {
    const result = await this.courseRepository.delete(id);

    return result.affected > 0;
  }
}
