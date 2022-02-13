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
import NotFoundPage from "./pages/user/notFound";
import AdminCateNewsListPage from "./pages/admin/categoryNews";
import AdminEditCateNewsPage from "./pages/admin/categoryNews/edit";
import AdminAddCateNewsPage from "./pages/admin/categoryNews/add";
import AdminSliderListPage from "./pages/admin/slider";
import AdminEditSliderPage from "./pages/admin/slider/edit";
import AdminAddSliderPage from "./pages/admin/slider/add";
import AdminAddSizePage from "./pages/admin/size/add";
import AdminEditSizePage from "./pages/admin/size/edit";
import AdminSizeListPage from "./pages/admin/size";
import AdminToppingListPage from "./pages/admin/topping";
import AdminAddToppingPage from "./pages/admin/topping/add";
import AdminEditToppingPage from "./pages/admin/topping/edit";
import AdminContactListPage from "./pages/admin/contact";
import AdminDetailContactPage from "./pages/admin/contact/details";
import AdminVoucherListPage from "./pages/admin/voucher";
import AdminAddVoucherPage from "./pages/admin/voucher/add";
import AdminEditVoucherPage from "./pages/admin/voucher/edit";
import AdminUserListPage from "./pages/admin/user";
import AdminAddUserPage from "./pages/admin/user/add";
import AdminEditUserPage from "./pages/admin/user/edit";
import AdminProfilePage from "./pages/admin/profile";
import AdminUpdatePassPage from "./pages/admin/profile/updatePass";
import { getUser } from "./utils";
import AdminStoreListPage from "./pages/admin/store";
import AdminAddStorePage from "./pages/admin/store/add";
import AdminEditStorePage from "./pages/admin/store/edit";
import SearchProductPage from "./pages/user/searchProduct";
import ProductByCatePage from "./pages/user/productByCate";
import NewsByCatePage from "./pages/user/newsByCate";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);

    if (content.afterRender) content.afterRender(id);
};

const changeTitle = (title) => {
    document.title = title;
};

router.on("/admin/*", () => {}, {
    before(done) {
        const userInfo = getUser();

        if (userInfo && userInfo.role) {
            done();
        } else {
            document.location.href = "/#/";
        }
    },
});

router.on("/my-account/*", () => {}, {
    before(done) {
        const userInfo = getUser();

        if (userInfo) {
            done();
        } else {
            document.location.href = "/#/";
        }
    },
});

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
    "/product/:id": ({ data }) => {
        print(ProductDetailPage, data.id);
    },
    "/product/search/:keyword": ({ data }) => {
        print(SearchProductPage, data.keyword);
    },
    "/category/:id": ({ data }) => {
        print(ProductByCatePage, data.id);
    },
    "/news": () => {
        changeTitle("Tin tức - Trà Sữa Yotea");
        print(NewsPage);
    },
    "/news/:id": ({ data }) => {
        print(NewsDetailsPage, data.id);
    },
    "/category-news/:id": ({ data }) => {
        print(NewsByCatePage, data.id);
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
    "/my-account/cart/:id": () => {
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
    "/admin/news/:id/edit": ({ data }) => {
        print(AdminEditNewsPage, data.id);
    },
    "/admin/product": () => {
        print(AdminProductListPage);
    },
    "/admin/product/add": () => {
        print(AdminAddProductPage);
    },
    "/admin/product/:id/edit": ({ data }) => {
        print(AdminEditProductPage, data.id);
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
    "/admin/category-news": () => {
        print(AdminCateNewsListPage);
    },
    "/admin/category-news/add": () => {
        print(AdminAddCateNewsPage);
    },
    "/admin/category-news/:id/edit": ({ data }) => {
        print(AdminEditCateNewsPage, data.id);
    },
    "/admin/slider": () => {
        print(AdminSliderListPage);
    },
    "/admin/slider/add": () => {
        print(AdminAddSliderPage);
    },
    "/admin/slider/:id/edit": ({ data }) => {
        print(AdminEditSliderPage, data.id);
    },
    "/admin/size": () => {
        print(AdminSizeListPage);
    },
    "/admin/size/add": () => {
        print(AdminAddSizePage);
    },
    "/admin/size/:id/edit": ({ data }) => {
        print(AdminEditSizePage, data.id);
    },
    "/admin/topping": () => {
        print(AdminToppingListPage);
    },
    "/admin/topping/add": () => {
        print(AdminAddToppingPage);
    },
    "/admin/topping/:id/edit": ({ data }) => {
        print(AdminEditToppingPage, data.id);
    },
    "/admin/contact": () => {
        print(AdminContactListPage);
    },
    "/admin/contact/:id/detail": ({ data }) => {
        print(AdminDetailContactPage, data.id);
    },
    "/admin/voucher": () => {
        print(AdminVoucherListPage);
    },
    "/admin/voucher/add": () => {
        print(AdminAddVoucherPage);
    },
    "/admin/voucher/:id/edit": ({ data }) => {
        print(AdminEditVoucherPage, data.id);
    },
    "/admin/user": () => {
        print(AdminUserListPage);
    },
    "/admin/user/add": () => {
        print(AdminAddUserPage);
    },
    "/admin/user/:id/edit": ({ data }) => {
        print(AdminEditUserPage, data.id);
    },
    "/admin/profile": () => {
        print(AdminProfilePage);
    },
    "/admin/profile/change-password": () => {
        print(AdminUpdatePassPage);
    },
    "/admin/store": () => {
        print(AdminStoreListPage);
    },
    "/admin/store/add": () => {
        print(AdminAddStorePage);
    },
    "/admin/store/:id/edit": ({ data }) => {
        print(AdminEditStorePage, data.id);
    },
});

router.notFound(() => {
    changeTitle("Trang này không tồn tại");
    print(NotFoundPage);
});

router.resolve();