import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency = "₹";
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");   // ✅ FIXED

  // fetch products
  const fetchProducts = () => {
  setProducts(dummyProducts);
};
  // add to cart
  const addToCart = (itemId) => {
  let cartData = { ...cartItems };

  if (cartData[itemId]) {
    cartData[itemId] += 1;
  } else {
    cartData[itemId] = 1;
    toast.success("Added to Cart");
  }

  setCartItems(cartData);
};

  // update cart
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;

    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  // remove from cart
 const removeFromCart = (itemId) => {
  let cartData = { ...cartItems };

  if (cartData[itemId]) {
    cartData[itemId] -= 1;

    if (cartData[itemId] === 0) {
      delete cartData[itemId];
      toast.success("Removed from Cart");
    }
  }

  setCartItems(cartData);
};

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    searchQuery,          // ✅ ADDED
    setSearchQuery        // ✅ ADDED
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};