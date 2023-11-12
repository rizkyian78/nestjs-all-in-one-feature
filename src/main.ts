import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000).then(() => console.info("start with port 3000")).catch(err => console.error(err));
}
bootstrap();
