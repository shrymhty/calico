import express from 'express';
import { addToCart, removeFromCart, getCartItems } from '../controllers/cartController.js';
import { authenticateFirebaseUser } from '../middleware/authMiddleware.js';

const cartRouter = express.Router();

cartRouter.post("/add", authenticateFirebaseUser, addToCart);
cartRouter.post("/remove", authenticateFirebaseUser, removeFromCart);
cartRouter.get("/items", authenticateFirebaseUser, getCartItems);

export default cartRouter;