import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
export const editFileName = (req, file, cb) => {
  const fileName = uuidv4();
  const fileExtname = path.extname(file.originalname);
  cb(null, `${fileName}${fileExtname}`);
};
