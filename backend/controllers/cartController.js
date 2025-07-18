import userModel from '../models/userModel.js';

const addToCart = async (req, res) => {

    const { productId, price } = req.body;

    try {
        let user = await userModel.findOne({ userId: req.uid }); 

        if (!user) {
            return res.status(404).json({success: false, message: "User Not Found"});
        }

        const cart = user.cartData;

        const existingItem = cart.findIndex(item => item.productId === productId);

        if (existingItem !== -1) {
            cart[existingItem].quantity += 1;
        } else {
            cart.push({ productId, quantity: 1, price });
        }

        await userModel.findOneAndUpdate(
            { userId: req.uid },
            { cartData: cart }
        );

        res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

const removeFromCart = async (req, res) => {
    const { productId } = req.body;

    try {
        let user = await userModel.findOne({userId: req.uid});

        if (!user) {
            return res.status(404).json({success: false, message: "User Not Found"});
        }

        const cart = user.cartData;

        const existingItem = cart.findIndex(item => item.productId === productId);

        if (existingItem === -1) {
            return res.status(404).json({success: false, message: "Item not found in cart"});
        } else {
            if (cart[existingItem].quantity > 1) {
                cart[existingItem].quantity -= 1;
            } else {
                cart.splice(existingItem, 1);
            }
        }

        await userModel.findOneAndUpdate(
            { userId: req.uid },
            { cartData: cart }
        );

        return res.status(200).json({ success: true, message: "Item removed from cart" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const getCartItems = async (req, res) => {
    try {
        let user = await userModel.findOne({ userId: req.uid });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const cartItems = user.cartData;
        return res.status(200).json({ success: true, cartItems });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export {
    addToCart,
    removeFromCart,
    getCartItems
}