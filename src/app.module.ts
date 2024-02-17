import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CourseModule } from './course/course.module';
import { SubjectModule } from './subject/subject.module';
import { ActivityModule } from './activity/activity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Course } from './course/entities/course.entity';
import { Subject } from './subject/entities/subject.entity';
import { Activity } from './activity/entities/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'seny_unopar',
      entities: [Course, Subject, Activity],
      synchronize: true,
    }),
    CourseModule, 
    SubjectModule, 
    ActivityModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
