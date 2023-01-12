export const uploadImg = async (req, res, next) => {
  try {
    if ((req, file)) {
      res.json(req.file);
    }
  } catch (err) {
    return console.log(err);
  }
};
