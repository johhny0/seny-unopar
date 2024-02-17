import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {

  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>) { }

  async create(createSubjectDto: CreateSubjectDto) {

    const subject = await this.subjectRepository.findOne({ where: { name: createSubjectDto.name } })

    if (subject) {
      return subject;
    }

    return await this.subjectRepository.save({
      name: createSubjectDto.name,
      semester: createSubjectDto.semester,
      course: createSubjectDto.course
    });
  }

  async findAll() {
    return await this.subjectRepository.find();
  }

  async findOne(id: string) {
    return await this.subjectRepository.findOne({ where: { id }, relations: { course: true, activities: true } })
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    return await this.subjectRepository.update(id, updateSubjectDto);
  }

  async remove(id: string) {
    const response = await this.subjectRepository.delete(id);
    return response.affected > 0;
  }
}
