import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class ActivityService {

  constructor(@InjectRepository(Activity) private activityRepository: Repository<Activity>) { }

  async create(createActivityDto: CreateActivityDto) {
    const activity = await this.activityRepository.findOne({
      where:
      {
        name: createActivityDto.name,
        subject: createActivityDto.subject
      }
    });

    if (activity) {
      return activity;
    }

    return this.activityRepository.save(createActivityDto);
  }

  async findAll() {
    return await this.activityRepository.find();
  }

  async findOne(id: string) {
    return await this.activityRepository.findOne({
      where: { id },
      relations: { subject: { course: true } }
    });
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    return await this.activityRepository.update(id, updateActivityDto);
  }

  async remove(id: string) {
    const result = await this.activityRepository.delete(id);

    return result.affected > 0;
  }

  async done(id: string) {
    const result = await this.activityRepository.update(id, {
      done: true
    });

    return result.affected > 0;
  }

  async findBySemester(semester: number) {
    console.log({ semester });

    return await this.activityRepository.find({
      where: {
        subject: {
          semester
        }
      }
    });
  }

  async started(){
    const now = new Date();

    return await this.activityRepository.find({ 
      where: { 
        startDate: LessThan(now),
        endDate: MoreThan(now),
        done: false
      }
    })
  }

  async outdated(){
    const now = new Date();

    return await this.activityRepository.find({ 
      where: { 
        startDate: LessThan(now),
        endDate: LessThan(now),
        done: false
      }
    })
  }

}
