import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';

dotenv.config();

// app configuration
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Routes
app.use('/api/products', productRouter);
app.use("/images", express.static("uploads"));
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);

app.get('/' , (req, res) => {
    res.send("API Working");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});