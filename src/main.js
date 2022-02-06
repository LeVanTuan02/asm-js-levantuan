import Navigo from "navigo";
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
});

router.resolve();