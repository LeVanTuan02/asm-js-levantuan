import Navigo from "navigo";
import HomePage from "./pages/user/home";
import IntroPage from "./pages/user/intro";
import ProductsPage from "./pages/user/products";

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
});

router.resolve();