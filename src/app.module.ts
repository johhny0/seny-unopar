import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CourseModule } from './course/course.module';
import { SubjectModule } from './subject/subject.module';
import { ActivityModule } from './activity/activity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    CourseModule,
    SubjectModule,
    ActivityModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
