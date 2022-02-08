import Navigo from "navigo";
import "slick-carousel/slick/slick.css";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "toastr/build/toastr.css";
import "sweetalert2/dist/sweetalert2.css";
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
import DashboardPage from "./pages/admin/dashboard";
import AdminAddNewsPage from "./pages/admin/news/add";
import AdminNewsListPage from "./pages/admin/news";
import AdminEditNewsPage from "./pages/admin/news/edit";
import AdminProductListPage from "./pages/admin/product";
import AdminAddProductPage from "./pages/admin/product/add";
import AdminEditProductPage from "./pages/admin/product/edit";
import AdminCateListPage from "./pages/admin/category";
import AdminAddCatePage from "./pages/admin/category/add";
import AdminEditCatePage from "./pages/admin/category/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);

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
    "/admin/dashboard": () => {
        print(DashboardPage);
    },
    "/admin/news": () => {
        print(AdminNewsListPage);
    },
    "/admin/news/add": () => {
        print(AdminAddNewsPage);
    },
    "/admin/news/:id/edit": () => {
        print(AdminEditNewsPage);
    },
    "/admin/product": () => {
        print(AdminProductListPage);
    },
    "/admin/product/add": () => {
        print(AdminAddProductPage);
    },
    "/admin/product/:id/edit": () => {
        print(AdminEditProductPage);
    },
    "/admin/category": () => {
        print(AdminCateListPage);
    },
    "/admin/category/add": () => {
        print(AdminAddCatePage);
    },
    "/admin/category/:id/edit": ({ data }) => {
        print(AdminEditCatePage, data.id);
    },
});

router.resolve();