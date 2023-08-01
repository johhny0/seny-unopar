import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";


@Injectable()
export class MySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: "mysql",
            host: this.configService.get("DATABASE_HOST"),
            port: 3306,
            username: this.configService.get("DATABASE_USERNAME"),
            password: this.configService.get("DATABASE_PASSWORD"),
            database: 'db_unopar',
            ssl: {
                rejectUnauthorized: false
            },
            entities: [
                __dirname + './../**/*.entity{.ts,.js}',
            ],
            synchronize: false
        };
    }
}
