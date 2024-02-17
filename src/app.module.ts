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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
}
