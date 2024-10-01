import './App.css'
import Information from "./components/Information.tsx";
import Header from "./components/Header.tsx";
import HomePage from "./components/HomePage.tsx";
import Work from "./components/Work.tsx";
import ShopPicture from "./components/ShopPicture.tsx";
import Shop from "./components/Shop.tsx";
import RoundCroissants from "./components/Roundcroissants.tsx";
import Advantages from "./components/Advantages.tsx";
import ReadMore from "./components/ReadMore.tsx";
import Carousel from "./components/Carousel.tsx";
import Footer from "./components/Footer.tsx";
import { CartProvider } from './components/CartContext';

function App() {
    return (
        <CartProvider>
            <Information />
            <Header />
            <section id="home">
                <HomePage />
            </section>
            <Work />
            <ShopPicture />
            <section id="shop">
                <Shop />
            </section>
            <RoundCroissants />
            <section id="work">
                <Advantages />
            </section>
            <ReadMore />
            <Carousel />
            <Footer />
        </CartProvider>
    );
}

export default App;
