import React from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import { RestaurantContext } from "./context/RestaurantContext";
import { Footer } from "./components/Footer";
import { useRestaurants } from "./hooks/useRestaurants";
import { CartProvider } from "./context/CartContext"; // CartProvider para manejar el carrito

function App() {
    const restaurants = useRestaurants();

    return (
        <CartProvider>
            <RestaurantContext.Provider value={{ restaurants }}>
                <GlobalRouter />
                <Footer />
            </RestaurantContext.Provider>
        </CartProvider>
    );
}

export default App;
