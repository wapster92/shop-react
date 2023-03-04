import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';
import { join } from 'path';
CrudConfigService.load({
  query: {
    alwaysPaginate: true,
  },
  routes: {
    //exclude: ['createManyBase'],
  },
});
import { AppModule } from './app.module';
import { config } from 'dotenv-flow';

config({
  purge_dotenv: true,
  silent: true,
  path: join(__dirname, '..', '..'),
});

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors({ credentials: true, origin: '*' });
  const config = new DocumentBuilder()
    .setTitle('Core')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.BACKEND_PORT);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap().then();
