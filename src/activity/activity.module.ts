import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Subject } from 'src/subject/entities/subject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity, Subject])
  ],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
