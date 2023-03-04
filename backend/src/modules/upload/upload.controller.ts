import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadDto } from './dto/upload.dto';
import { editFileName } from './common/editFileName';
import { diskStorage } from 'multer';
import * as path from 'path';
import { config } from 'dotenv-flow';

config({
  purge_dotenv: true,
  silent: true,
  path: path.join(__dirname, '..', '..'),
});

@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: path.join(
          path.resolve(process.env.BACKEND_UPLOAD_DIR),
          'temp',
        ),
        filename: editFileName,
      }),
    }),
  )
  async uploadSingelFile(
    @Body() dto: UploadDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      return await this.uploadService.saveFile(dto, file);
    } catch (e) {
      console.log('controller error');
      throw new HttpException(
        'Имя пользователя или email заняты',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
