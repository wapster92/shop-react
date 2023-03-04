import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModel } from './models/upload.model';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import { config } from 'dotenv-flow';
import { join } from 'path';

config({
  purge_dotenv: true,
  silent: true,
  path: path.join(__dirname, '..', '..'),
});

@Module({
  imports: [
    TypeOrmModule.forFeature([UploadModel]),
    MulterModule.register({
      dest: path.resolve(process.env.BACKEND_UPLOAD_DIR),
    }),
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
