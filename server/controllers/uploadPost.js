import multer from "multer";
import path from "path";

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PNG and JPEG are allowed.'), false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
}).single("img");

export const uploadImage = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: "File upload failed", details: err.message });
        }
        next();
    });
};
