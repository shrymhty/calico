import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String },
  cartData: {
    type: [cartItemSchema],
    default: []
  }
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;