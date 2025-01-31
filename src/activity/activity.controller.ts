import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get('started')
  started() {
    return this.activityService.started();
  }

  @Get('outdated/:semester')
  outdated(@Param('semester') semester: number) {
    return this.activityService.outdated(+semester);
  }

  @Get('upcoming/:semester')
  upcomding(@Param('semester') semester: number) {
    return this.activityService.upcoming(+semester);
  }

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.update(id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityService.remove(id);
  }

  @Patch(':id/done')
  done(@Param('id') id: string) {
    return this.activityService.done(id);
  }

  @Get('semester/:semester')
  findBySemester(@Param('semester') semester: number) {
    return this.activityService.findBySemester(semester);
  }
}
