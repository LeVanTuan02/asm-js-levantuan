import Navigo from "navigo";
import FortgotPage from "./pages/auth/forgot";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import CartPage from "./pages/user/cart";
import CheckoutPage from "./pages/user/cart/checkout";
import ThanksPage from "./pages/user/cart/thanks";
import ContactPage from "./pages/user/contact";
import HomePage from "./pages/user/home";
import IntroPage from "./pages/user/intro";
import NewsPage from "./pages/user/news";
import ProductsPage from "./pages/user/products";
import StorePage from "./pages/user/store";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/intro": () => {
        print(IntroPage);
    },
    "/products": () => {
        print(ProductsPage);
    },
    "/news": () => {
        print(NewsPage);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/store": () => {
        print(StorePage);
    },
    "/login": () => {
        print(LoginPage);
    },
    "/register": () => {
        print(RegisterPage);
    },
    "/forgot": () => {
        print(FortgotPage);
    },
    "/cart": () => {
        print(CartPage);
    },
    "/cart-checkout": () => {
        print(CheckoutPage);
    },
    "/cart-thanks": () => {
        print(ThanksPage);
    },
});

router.resolve();