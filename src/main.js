import Navigo from "navigo";
import "slick-carousel/slick/slick.css";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import FortgotPage from "./pages/auth/forgot";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import CartPage from "./pages/user/cart";
import CheckoutPage from "./pages/user/cart/checkout";
import ThanksPage from "./pages/user/cart/thanks";
import ContactPage from "./pages/user/contact";
import HomePage from "./pages/user/home";
import IntroPage from "./pages/user/intro";
import UpdateInfoPage from "./pages/user/my-account";
import MyAccCartPage from "./pages/user/my-account/cart";
import MyAccCartDetailsPage from "./pages/user/my-account/cartDetails";
import MyAccUpdatePass from "./pages/user/my-account/updatePass";
import NewsPage from "./pages/user/news";
import NewsDetailsPage from "./pages/user/newsDetails";
import ProductDetailPage from "./pages/user/productDetails";
import ProductsPage from "./pages/user/products";
import StorePage from "./pages/user/store";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();

    if (content.afterRender) content.afterRender();
};

const changeTitle = (title) => {
    document.title = title;
};

router.on({
    "/": () => {
        changeTitle("Trang chủ - Trà Sữa Yotea");
        print(HomePage);
    },
    "/intro": () => {
        changeTitle("Về chúng tôi - Trà Sữa Yotea");
        print(IntroPage);
    },
    "/products": () => {
        changeTitle("Thực đơn - Trà Sữa Yotea");
        print(ProductsPage);
    },
    "/product/:id": () => {
        print(ProductDetailPage);
    },
    "/news": () => {
        changeTitle("Tin tức - Trà Sữa Yotea");
        print(NewsPage);
    },
    "/news/:id": () => {
        print(NewsDetailsPage);
    },
    "/contact": () => {
        changeTitle("Liên hệ - Trà Sữa Yotea");
        print(ContactPage);
    },
    "/store": () => {
        changeTitle("Hệ thống cửa hàng - Trà Sữa Yotea");
        print(StorePage);
    },
    "/login": () => {
        changeTitle("Đăng nhập - Trà Sữa Yotea");
        print(LoginPage);
    },
    "/register": () => {
        changeTitle("Đăng ký - Trà Sữa Yotea");
        print(RegisterPage);
    },
    "/forgot": () => {
        changeTitle("Quên mật khẩu - Trà Sữa Yotea");
        print(FortgotPage);
    },
    "/cart": () => {
        changeTitle("Giỏ hàng - Trà Sữa Yotea");
        print(CartPage);
    },
    "/cart-checkout": () => {
        changeTitle("Thanh toán - Trà Sữa Yotea");
        print(CheckoutPage);
    },
    "/cart-thanks": () => {
        changeTitle("Thank you - Trà Sữa Yotea");
        print(ThanksPage);
    },
    "/my-account": () => {
        print(UpdateInfoPage);
    },
    "/my-account/update-pass": () => {
        print(MyAccUpdatePass);
    },
    "/my-account/cart": () => {
        print(MyAccCartPage);
    },
    "/my-account/cart/:id": ({ data }) => {
        const { id } = data;
        print(MyAccCartDetailsPage);
    },
});

router.resolve();