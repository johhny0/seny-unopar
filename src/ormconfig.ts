import { DataSourceOptions, DataSource } from 'typeorm';
import { Activity } from './activity/entities/activity.entity';
import { Course } from './course/entities/course.entity';
import { Subject } from './subject/entities/subject.entity';
import { config } from "dotenv";

config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Course, Subject, Activity],
    synchronize: false,
    migrations: ["./migrations/*{.ts,.js}"],
    logging: true,
    migrationsRun: true,
    migrationsTableName: "migrations",
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
