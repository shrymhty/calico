import { createContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/utils/firebase";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            setUser(null);
        });
    }

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1
            }));
        } else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId]+1
            }))
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev;
            const updated = { ...prev };
            if (updated[itemId] <= 1) {
                delete updated[itemId];
            } else {
                updated[itemId] -= 1;
            }
            return updated;
        });
    }
    
    const deleteFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    }

    const getCartTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = product_list.find((product) => product.id === parseInt(item));
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getCartTotal,
        user,
        logout
    };

    // get total here

    // get all items list

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
};

export {StoreContextProvider};