import userModel from "../models/userModel.js";

const initUser = async (req, res) => {
    const uid = req.uid;
    const email = req.email;

    try {
        let user = await userModel.findOne({userId: uid});

        if (!user) {
            user = new userModel({
                userId: uid,
                email: email,
                cartData: []
            });
            await user.save();
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error initializing user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export {
    initUser
}