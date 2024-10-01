import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
    image: string;
    title: string;
    cost: string;
}

interface CartContextProps {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (title: string) => void;
    isInCart: (title: string) => boolean;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (title: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
    };

    const isInCart = (title: string) => {
        return cartItems.some((item) => item.title === title);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};
