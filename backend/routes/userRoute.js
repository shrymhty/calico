import express from "express";
import { authenticateFirebaseUser } from "../middleware/authMiddleware.js";
import {initUser} from "../controllers/userController.js";

const userRouter = express.Router();

// Route: Create or fetch user
userRouter.post('/init', authenticateFirebaseUser, initUser);

export default userRouter;