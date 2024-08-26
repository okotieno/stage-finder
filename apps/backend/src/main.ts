/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Stage Finder')
    .setDescription('The Stage Finder API offers precise route information for public transit. Access detailed routes, including stops. Developers can integrate these endpoints to provide users with accurate route')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions =  {

    ignoreGlobalPrefix: false,
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
