import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { config } from "dotenv";

config();

console.log(".ENV API PORT: ", process.env.API_PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
