import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadModel } from './models/upload.model';
import { Repository } from 'typeorm';
import { UploadDto } from './dto/upload.dto';
import { mkdir, mv } from 'shelljs';
import * as path from 'path';
import * as fs from 'fs';
import { config } from 'dotenv-flow';

config({
  purge_dotenv: true,
  silent: true,
  path: path.join(__dirname, '..', '..'),
});

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(UploadModel)
    private readonly uploadsRepository: Repository<UploadModel>,
  ) {}
  async saveFile(dto: UploadDto, file: Express.Multer.File) {
    const uploads = path.join(path.resolve(), 'uploads');
    const filePath = path.resolve(file.path);
    const newFilePath = path.join(uploads, dto.path, file.filename);
    const dbFilePath = path.join(
      process.env.BACKEND_UPLOAD_DIR,
      dto.path,
      file.filename,
    );
    try {
      if (!fs.existsSync(path.resolve(uploads, dto.path))) {
        mkdir('-p', path.join(uploads, dto.path));
      }
      mv(filePath, newFilePath);
      const fileEntry = await this.uploadsRepository.create({
        name: file.originalname,
        fileName: file.filename,
        path: dbFilePath,
        mimetype: file.mimetype,
        size: file.size,
      });
      return await this.uploadsRepository.save(fileEntry);
    } catch (e) {
      throw new HttpException(
        'Имя пользователя или email заняты',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
