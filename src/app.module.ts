import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmDataSourceFactory, TypeOrmModule } from '@nestjs/typeorm';
// import { MySqlConfigService } from './shared/services/mysqlConfig.service';
import { CoursesModule } from './courses/courses.module';
// import { DataSource, DataSourceOptions } from 'typeorm';
import { dataSourceOptions } from 'data-source';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    // TypeOrmModule.forRootAsync({
    //   useClass: MySqlConfigService,
    //   inject: [MySqlConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: "mysql",
    //     host: configService.get("DATABASE_HOST"),
    //     port: 3306,
    //     username: configService.get("DATABASE_USERNAME"),
    //     password: configService.get("DATABASE_PASSWORD"),
    //     database: 'db_unopar',
    //     ssl: {
    //       rejectUnauthorized: false
    //     },
    //     entities: [
    //       __dirname + './../**/*.entity{.ts,.js}',
    //     ],
    //     synchronize: false
    //   }),
    //   dataSourceFactory: async (options: DataSourceOptions) => {
    //     const dataSource = new DataSource(options);
    //     await dataSource.initialize();
    //     return dataSource;
    //   }
    // }),
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
