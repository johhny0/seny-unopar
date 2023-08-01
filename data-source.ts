import { DataSource, DataSourceOptions } from "typeorm";
export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_unopar',


    entities: ["./src/shared/entities/**/*.{ts|js}"],

    migrations: ["dist/src/db/migrations/*.js"],
}
const dataSource = new DataSource(dataSourceOptions)
export default dataSource
