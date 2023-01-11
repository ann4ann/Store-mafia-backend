import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination(req, file, cb) {
    cb(null, "assets/images/");
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const types = ["image/png", "image/jpg", "image/jpeg"];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const fileMiddleware = multer({ storage, fileFilter });

export default fileMiddleware;
