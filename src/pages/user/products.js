import toastr from "toastr";
import { add, checkHeart } from "../../api/favoritesProduct";
import { get, getAllJoinCategory, update } from "../../api/product";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import FilterProduct from "../../components/user/products/filter";
import Sidebar from "../../components/user/products/sidebar";
import WishList from "../../components/user/wishlist";
import WishListLabel from "../../components/user/wishlistLabel";
import { formatCurrency, getUser, reRender } from "../../utils";

const ProductsPage = {
    async render(pageNumber) {
        let currentPage = pageNumber;
        const { data } = await getAllJoinCategory();

        // phân trang
        const limit = 3;
        const total = data.length;
        const totalPage = Math.ceil(total / limit);
        currentPage = pageNumber ?? 1;
        if (currentPage >= totalPage) {
            currentPage = totalPage;
        } else if (currentPage < 0) {
            currentPage = 1;
        }
        const start = (currentPage - 1) * limit;

        // lấy dữ liệu sp
        const { data: productList } = await getAllJoinCategory(start, limit);

        let htmlPagination = "";
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= totalPage; i++) {
            htmlPagination += `
            <li class="">
                <a href="/#/products/page/${i}" class="${+currentPage === i ? "border-[#D9A953] bg-[#D9A953] text-white" : "border-gray-500"} w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold  text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">${i}</a>
            </li>
            `;
        }

        return /* html */ `
        ${await Header.render("products")}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 pt-8 mb-5 text-center">
                <div class="flex justify-center">
                    <a href="/#/" class="transition duration-300 ease-linear hover:text-[#D9A953] block pr-6 font-semibold relative after:content-[''] after:absolute after:right-3 after:bg-gray-500 after:w-[1px] after:h-4 after:rotate-12 after:top-1/2 after:-translate-y-1/2">Trang chủ</a>
                    <a href="/#/products" class="transition duration-300 ease-linear hover:text-[#D9A953] font-semibold">Sản phẩm</a>
                </div>
                <h1 class="text-[#D9A953] font-semibold text-3xl mt-1">Danh sách</h1>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-6 mb-8">
                ${await Sidebar.render()}

                <div class="col-span-12 lg:col-span-9">
                    <!-- filter -->
                    ${FilterProduct.render(total, start, limit)}
                    <!-- end filter -->

                    <div id="product-list">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                            ${productList.map((item) => /* html */`
                                <div class="group product-item" data-id="${item.id}">
                                    <div class="relative bg-[#f7f7f7] overflow-hidden">
                                        <a href="/#/product/${item.id}" style="background-image: url(${item.image})" class="bg-cover pt-[100%] bg-center block"></a>
                                        <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                        <button data-id="${item.id}" class="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                    </div>
            
                                    <div class="text-center py-3">
                                        <p class="uppercase text-xs text-gray-400">${item.category.name}</p>
                                        <a href="/#/product/${item.id}" class="block font-semibold text-lg">${item.name}</a>
                                        <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </ul>
                                        <div class="text-sm pt-1">
                                            ${formatCurrency(item.price)}
                                        </div>
                                    </div>
                                </div>
                                `).join("")}
                        </div>
                    </div>

                    <!-- pagination -->
                    <ul class="flex justify-center mt-5">
                        ${currentPage > 1 ? `
                        <li>
                            <a href="/#/products/page/${currentPage - 1}" class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                                <button>
                                    <i class="fas fa-angle-left"></i>
                                </button>
                            </a>
                        </li>
                        ` : ""}
                        ${htmlPagination}
                        
                        ${!currentPage || currentPage <= totalPage - 1 ? `
                        <li>
                            <a href="/#/products/page/${+currentPage + 1}" class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                                <button>
                                    <i class="fas fa-angle-right"></i>
                                </button>
                            </a>
                        </li>
                        ` : ""}
                    </ul>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Footer.afterRender();
        FilterProduct.afterRender();

        // yêu thích sp
        const btnsHeart = document.querySelectorAll(".btn-heart");
        btnsHeart.forEach((btn) => {
            const { id } = btn.dataset;

            btn.addEventListener("click", async () => {
                const userLogged = getUser();

                if (!userLogged) {
                    toastr.info("Vui lòng đăng nhập để yêu thích sản phẩm");
                } else {
                    const { data: heartList } = await checkHeart(userLogged.id, id);

                    if (heartList.length) {
                        toastr.info("Sản phẩm đã tồn tại trong danh sách yêu thích");
                    } else {
                        const { data: productInfo } = await get(id);
                        productInfo.favorites += 1;

                        // cập nhật số lượt yêu thích
                        update(id, productInfo);

                        // lưu thông tin
                        const date = new Date();
                        add({
                            userId: userLogged.id,
                            productId: +id,
                            createdAt: date.toISOString(),
                        })
                            .then(() => toastr.success("Đã thêm vào danh sách yêu thích"))
                            .then(() => reRender(WishListLabel, ".header-icon-heart"))
                            .then(() => reRender(WishList, "#wishlist"))
                            .then(() => document.querySelector("#wishlist").classList.add("active"));
                    }
                }
            });
        });
    },
};

export default ProductsPage;