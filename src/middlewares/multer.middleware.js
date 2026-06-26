/* Multer is an third party package which helps to 
upload attachemnets liked pdf , image , Expree on its 
own doesnt have the ability to process attachemnet */

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/images`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 1 * 1000 * 1000,
  },
});