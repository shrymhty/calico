import express from "express";
import { addProduct, getAllProducts, removeProduct } from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list", getAllProducts);
productRouter.post('/remove', removeProduct)


export default productRouter;