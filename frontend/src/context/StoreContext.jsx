import { createContext, useEffect, useState } from "react";
// import { product_list } from "../assets/assets";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../components/utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import axios from "axios"

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [product_list, setProductList] = useState([]);

    // backend url
    const url = "http://localhost:4000";
    
    const [token, setToken] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                }
                // await fetchCartItems();
            } else {
                setUser(null);
                setUserData(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            setUser(null);
            setToken("");
        });
    }

    const addToCart = async (itemId) => {
        const product = product_list.find(p => p._id === itemId);
        if (!product) {
            console.error("Product not found for ID:", itemId);
            return;
        }

        // ✅ If user is logged in → call API
        if (user) {
            try {
                const token = await auth.currentUser.getIdToken();

                await fetch(`${url}/api/cart/add`, {
                    method: "POST",
                    headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                    productId: itemId,
                    price: product.price
                    })
                });

                await fetchCartItems();
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
            } else {
            // ✅ Else, update locally
                setCartItems(prev => {
                    const existingItem = prev.find(item => item.productId === itemId);
                    if (existingItem) {
                        return prev.map(item =>
                        item.productId === itemId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                        );
                    } else {
                        return [...prev, { productId: itemId, quantity: 1, price: product.price }];
                    }
                });
            }
        };


    const removeFromCart = async (itemId) => {
        if (user) {
            try {
                const token = await auth.currentUser.getIdToken();

                await fetch(`${url}/api/cart/remove`, {
                    method: "POST",
                    headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                    productId: itemId
                    })
                });

                await fetchCartItems();
                } catch (error) {
                console.error("Error removing from cart:", error);
                }
        } else {
            // Update locally
            setCartItems(prev => {
                const existingItem = prev.find(item => item.productId === itemId);
                if (!existingItem) return prev;

                if (existingItem.quantity === 1) {
                    // Remove the item
                    return prev.filter(item => item.productId !== itemId);
                } else {
                    // Decrement quantity
                    return prev.map(item =>
                    item.productId === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    );
                }
            });
        }
    };
    
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.quantity * item.price)
        }, 0);
    }

    const fetchProductList = async () => {
        const response = await axios.get(`${url}/api/products/list`);
        setProductList(response.data.data);
    }

    const fetchCartItems = async () => {
        if (auth.currentUser) {
            const token = await auth.currentUser.getIdToken();
            try {
                const res = await fetch(`${url}/api/cart/items`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
                if (data.success) {
                    setCartItems(data.cartItems); // full array of productId, quantity, price
                }
            } catch (error) {
                console.log("Error fetching cart items:", error);
            }
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []); 

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        user,
        logout,
        userData,
        url,
        token,
        setToken,
        product_list,
        fetchCartItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
};

export {StoreContextProvider};