import Navigo from "navigo";
import HomePage from "./pages/user/home";
import IntroPage from "./pages/user/intro";

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
});

router.resolve();