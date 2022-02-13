import toastr from "toastr";
import { getProductByCate } from "../../api/category";
import { add, checkHeart } from "../../api/favoritesProduct";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import Sidebar from "../../components/user/products/sidebar";
import { get, update } from "../../api/product";
import WishList from "../../components/user/wishlist";
import WishListLabel from "../../components/user/wishlistLabel";
import { formatCurrency, getUser, reRender } from "../../utils";

const ProductByCatePage = {
    async render(cateId) {
        const { data: categoryData } = await getProductByCate(cateId);
        const productList = categoryData.products.filter((category) => category.status !== 0);

        return /* html */ `
        ${await Header.render("products")}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 pt-8 mb-5 text-center">
                <div class="flex justify-center">
                    <a href="/#/" class="transition duration-300 ease-linear hover:text-[#D9A953] block pr-6 font-semibold relative after:content-[''] after:absolute after:right-3 after:bg-gray-500 after:w-[1px] after:h-4 after:rotate-12 after:top-1/2 after:-translate-y-1/2">Trang chủ</a>
                    <a href="/#/products" class="transition duration-300 ease-linear hover:text-[#D9A953] font-semibold">Sản phẩm</a>
                </div>
                <h1 class="text-[#D9A953] font-semibold text-3xl mt-1">${categoryData.name}</h1>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-6 mb-8">
                ${await Sidebar.render(categoryData.id)}

                <div class="col-span-12 lg:col-span-9">
                    <!-- filter -->
                    <div class="border-b pb-2 flex justify-between items-center">
                        <div class="flex items-center">
                            <ul class="flex">
                                <li class="text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                                    <i class="fas fa-th"></i>
                                </li>
                                <li class="text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                                    <i class="fas fa-th-list"></i>
                                </li>
                            </ul>

                            <span>Hiển thị 1 - 12 trong 36 kết quả</span>
                        </div>

                        <form action="" class="flex items-center">
                            <label for="">Sắp xếp theo</label>

                            <div class="flex ml-2 relative group">
                                <div class="text-gray-600 flex items-center justify-between px-2 py-2 min-w-[130px] rounded-md border cursor-pointer group-hover:rounded-b-none">
                                    <span class="mr-4">Mặc định</span>
                                    <i class="fas fa-chevron-down"></i>
                                </div>

                                <ul class="hidden group-hover:block absolute top-full left-0 right-0 bg-white border z-10 px-2 py-1">
                                    <li class="flex justify-between items-center py-1 text-gray-600 hover:text-[#D9A953] cursor-pointer">
                                        <span>Mặc định</span>
                                        <div class="">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </li>
                                    <li class="flex justify-between items-center py-1 text-gray-600 hover:text-[#D9A953] cursor-pointer">
                                        <span>Mặc định</span>
                                        <div class="">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </li>
                                    <li class="flex justify-between items-center py-1 text-gray-600 hover:text-[#D9A953] cursor-pointer">
                                        <span>Mặc định</span>
                                        <div class="">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <!-- end filter -->

                    <div>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                            ${productList.map((item) => /* html */`
                                <div class="group">
                                    <div class="relative bg-[#f7f7f7] overflow-hidden">
                                        <a href="/#/product/${item.id}" style="background-image: url(${item.image})" class="bg-cover pt-[100%] bg-center block"></a>
                                        <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                        <button data-id="${item.id}" class="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                    </div>
            
                                    <div class="text-center py-3">
                                        <p class="uppercase text-xs text-gray-400">${categoryData.name}</p>
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

                        <div class="grid grid-cols-1 divide-y">
                            ${productList.map((item) => /* html */`
                                <div class="grid grid-cols-12 py-4 gap-3">
                                    <div class="col-span-3 relative group overflow-hidden">
                                        <a href="/#/product/${item.id}" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url(${item.image})"></a>
                                        <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                        <button class="opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                    </div>

                                    <div class="col-span-9">
                                        <h3>
                                            <a href="/#/product/${item.id}" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">${item.name}</a>
                                        </h3>
                                        <ul class="flex items-center mt-4">
                                            <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </li>
                                            <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                            <li>10 Đã bán</li>
                                        </ul>
                                        <div class="mt-1 mb-2">
                                            <span class="text-xl text-[#D9A953] font-semibold">${formatCurrency(item.price)}</span>
                                        </div>
                                        <p>
                                            ${item.description}
                                        </p>
                                        <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                                `).join("")}
                            
                        </div>
                    </div>

                    <!-- pagination -->
                    <ul class="flex justify-center mt-5">
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <i class="fas fa-angle-left"></i>
                            </button>
                        </li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">1</li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">2</li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">3</li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <i class="fas fa-angle-right"></i>
                            </button>
                        </li>
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

export default ProductByCatePage;