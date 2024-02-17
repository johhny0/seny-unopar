import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/entities/course.entity';
import { Subject } from './entities/subject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subject, Course])
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
