import toastr from "toastr";
import { get, updateView, getPrice } from "../../api/product";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import Related from "../../components/user/products/related";
import { formatCurrency } from "../../utils";
import { getAll } from "../../api/topping";
import { getAll as getAllSize } from "../../api/size";

const ProductDetailPage = {
    async render(id) {
        // update view
        const { data: productDetail } = await get(id);
        updateView(id, {
            view: +(productDetail.view + 1),
        });

        // ds topping
        const { data: toppingList } = await getAll();

        // ds size
        const { data: sizeList } = await getAllSize();

        return /* html */ `
        ${await Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pb-8">
                <div class="relative group min-h-[500px]">
                    <div class="h-full absolute w-full bg-contain bg-center bg-no-repeat" style="background-image: url(${productDetail.image});"></div>
                    <button class="absolute bottom-2 left-2 rounded-full border-2 border-gray-400 w-9 h-9 text-gray-400 text-lg transition ease-linear duration-300 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </button>
                    <button data-id="${productDetail.id}" class="btn-heart opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>

                <div>
                    <div class="flex justify-between">
                        <div>
                            <div class="flex">
                                <a href="/#/" class="text-gray-500 transition hover:text-black uppercase font-semibold text-sm block pr-4 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-2 after:w-[1px] after:h-3 after:rotate-12 after:bg-gray-400">Home</a>
                                <a href="/#/category/${productDetail.category.id}" class="text-gray-500 transition hover:text-black uppercase font-semibold text-sm">${productDetail.category.name}</a>
                            </div>

                            <h1 class="font-semibold text-[28px] text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">${productDetail.name}</h1>

                            <ul class="flex items-center mt-4">
                                <li class="flex text-yellow-400 text-xs pr-4 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li class="pr-4 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                <li>10 Đã bán</li>
                            </ul>
                            <div class="mt-1 my-2">
                                <span class="text-3xl text-[#D9A953] font-semibold">${formatCurrency(productDetail.price)}</span>
                            </div>
                        </div>
                        <ul class="flex">
                            <li>
                                <button class="w-8 h-8 rounded-full border-2 border-gray-400 text-gray-400 transition ease-linear duration-200 hover:text-white hover:bg-[#D9A953] hover:border-[#D9A953]">
                                    <i class="fas fa-angle-left"></i>
                                </button>
                            </li>
                            <li>
                                <button class="w-8 ml-1 h-8 rounded-full border-2 border-gray-400 text-gray-400 transition ease-linear duration-200 hover:text-white hover:bg-[#D9A953] hover:border-[#D9A953]">
                                    <i class="fas fa-angle-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div class="flex justify-between">
                        <div>
                            <form action="" id="form__add-cart" data-id="${id}">
                                <div class="flex items-center mt-2">
                                    <label for="" class="min-w-[80px] font-bold text-sm">Đá</label>
    
                                    <ul class="flex">
                                        <li>
                                            <input type="radio" class="form__add-cart-ice" hidden name="ice" id="ice-0">
                                            <label for="ice-0" class="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">0%</label>
                                        </li>
                                        <li>
                                            <input type="radio" class="form__add-cart-ice" hidden name="ice" id="ice-30">
                                            <label for="ice-30" class="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">30%</label>
                                        </li>
                                        <li>
                                            <input type="radio" class="form__add-cart-ice" hidden name="ice" id="ice-50">
                                            <label for="ice-50" class="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">50%</label>
                                        </li>
                                        <li>
                                            <input type="radio" class="form__add-cart-ice" hidden name="ice" id="ice-70">
                                            <label for="ice-70" class="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">70%</label>
                                        </li>
                                        <li>
                                            <input type="radio" checked class="form__add-cart-ice" hidden name="ice" id="ice-100">
                                            <label for="ice-100" class="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">100%</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex items-center mt-2">
                                    <label for="" class="min-w-[80px] font-bold text-sm">Đường</label>
    
                                    <ul class="flex">
                                        <li>
                                            <input type="radio" name="sugar" hidden class="form__add-cart-sugar" id="sugar-0">
                                            <label for="sugar-0" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">0%</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="sugar" hidden class="form__add-cart-sugar" id="sugar-30">
                                            <label for="sugar-30" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">30%</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="sugar" hidden class="form__add-cart-sugar" id="sugar-50">
                                            <label for="sugar-50" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">50%</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="sugar" hidden class="form__add-cart-sugar" id="sugar-70">
                                            <label for="sugar-70" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">70%</label>
                                        </li>
                                        <li>
                                            <input type="radio" checked name="sugar" hidden class="form__add-cart-sugar" id="sugar-100">
                                            <label for="sugar-100" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">100%</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex items-center mt-2">
                                    <label for="" class="min-w-[80px] font-bold text-sm">Size</label>
    
                                    <ul class="flex">
                                        <li>
                                            <input hidden checked  value="" type="radio" name="size" class="form__add-cart-size" id="size-s">
                                            <label for="size-s" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">S</label>
                                        </li>
                                        ${sizeList.map((size) => `
                                            <li>
                                                <input hidden type="radio" value="${size.id}" name="size" class="form__add-cart-size" id="size-${size.name.toLowerCase()}">
                                                <label for="size-${size.name.toLowerCase()}" class="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">${size.name.toUpperCase()}</label>
                                            </li>
                                            `).join("")}
                                    </ul>
                                </div>
                                <div class="flex items-center mt-2">
                                    <label for="" class="min-w-[80px] font-bold text-sm">Topping</label>
                                    <select name="" id="form__add-cart-topping" class="px-3 py-1 outline-none border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">
                                        <option value="">Chọn topping</option>
                                        ${toppingList.map((item) => `<option value="${item.id}">${item.name} +${formatCurrency(item.price)}</option>`)}
                                    </select>
                                </div>
    
                                <div class="border-b border-dashed pb-4 mt-6">
                                    <p class="form__add-cart-total-price h-0 overflow-hidden transition-all ease-linear duration-100 mt-6 border-t border-dashed pt-2 text-xl font-semibold">
                                        
                                    </p>
    
                                    <div class="flex mt-2 items-center">
                                        <div class="flex items-center h-9">
                                            <button type="button" id="form__add-cart-qnt-minus" class="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                                            <input type="text" id="form__add-cart-qnt" class="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" value="1">
                                            <button type="button" id="form__add-cart-qnt-plus" class="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                                        </div>
                                        <button class="ml-2 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </form>
    
                            <p class="mt-1 text-gray-500">
                                Danh mục:
                                <a href="/#/category/${productDetail.category.id}" class="transition hover:text-black">${productDetail.category.name}</a>
                            </p>

                            <ul class="flex mt-3">
                                <li class="mr-1.5">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}/" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="mr-1.5">
                                    <a href="https://twitter.com/share?url=${window.location.href}/" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" class="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="mr-1.5">
                                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}/" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"  class="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <button type="button" class="hidden form__add-cart-btn-clear text-gray-400 transition hover:text-black">Xóa</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- tab -->
            <section class="container max-w-6xl mx-auto px-3">
                <ul class="flex border-t">
                    <li class="transition ease-linear duration-200 font-bold cursor-pointer hover:border-t-[#D9A953] hover:text-black uppercase pt-2 border-t-2 border-t-transparent pr-2 text-gray-400 text-xs">Mô tả</li>
                    <li class="transition ease-linear duration-200 font-bold cursor-pointer hover:border-t-[#D9A953] hover:text-black uppercase pt-2 border-t-2 border-t-[#D9A953] pr-2 text-black text-xs">Đánh giá (0)</li>
                </ul>
            </section>

            <!-- panel -->
            <section class="container max-w-6xl mx-auto px-3">
                <div>
                    <h2 class="mt-3 font-semibold text-xl">Đánh giá</h2>
                    <p>Chưa có đánh giá nào</p>

                    <form action="" class="px-3 py-2 border-2 border-[#D9A953] mt-3">
                        <h2 class="font-semibold text-xl">Hãy là người đầu tiên nhận xét "Trà xoài"</h2>

                        <div class="mt-2">
                            <label for="" class="block text-sm font-semibold">Đánh giá của bạn *</label>

                        </div>

                        <div class="mt-2">
                            <label for="" class="block text-sm font-semibold">Nhận xét của bạn</label>
                            <textarea name="" id="" cols="30" rows="10" class="w-full outline-none border mt-1 px-3 py-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"></textarea>
                        </div>

                        <button class="my-3 px-4 py-2 bg-[#D9A953] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Gửi đi</button>
                    </form>
                </div>

                <ul class="mt-4 grid grid-cols-1 divide-y divide-dashed">
                    <li class="flex py-4">
                        <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="" class="w-16 h-16 rounded-full">
                        <div class="ml-2 flex-1">
                            <div class="flex text-yellow-400 text-xs mb-0.5">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div>
                                <span class="font-semibold">Nguyễn Thanh Tùng</span>
                                <span class="text-sm text-gray-500">(16 Tháng 12, 2021)</span>
                            </div>
                            <p class="text-gray-500">Mlem quá</p>

                            <ul class="text-gray-500 flex text-sm mt-1">
                                <li class="mr-2 transition hover:text-black cursor-pointer">Xóa</li>
                                <li class="transition hover:text-black cursor-pointer">Trả lời</li>
                            </ul>

                            <ul>
                                <li class="flex pt-3">
                                    <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="" class="w-12 h-12 rounded-full">
                                    <div class="ml-2">
                                        <div class="flex text-yellow-400 text-xs mb-0.5">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>

                                        <div>
                                            <span class="font-semibold">Nguyễn Thanh Tùng</span>
                                            <span class="text-sm text-gray-500">(16 Tháng 12, 2021)</span>
                                        </div>
                                        <p class="text-gray-500">Mlem quá</p>

                                        <ul class="text-gray-500 flex text-sm mt-1">
                                            <li class="mr-2 transition hover:text-black cursor-pointer">Xóa</li>
                                            <li class="transition hover:text-black cursor-pointer">Trả lời</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="flex pt-3">
                                    <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="" class="w-12 h-12 rounded-full">
                                    <div class="ml-2">
                                        <div class="flex text-yellow-400 text-xs mb-0.5">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>

                                        <div>
                                            <span class="font-semibold">Nguyễn Thanh Tùng</span>
                                            <span class="text-sm text-gray-500">(16 Tháng 12, 2021)</span>
                                        </div>
                                        <p class="text-gray-500">Mlem quá</p>

                                        <ul class="text-gray-500 flex text-sm mt-1">
                                            <li class="mr-2 transition hover:text-black cursor-pointer">Xóa</li>
                                            <li class="transition hover:text-black cursor-pointer">Trả lời</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <!-- form rep cmt -->
                            <form action="" class="flex mt-4 items-center">
                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" class="w-8 h-8 rounded-full object-cover" alt="">
                                <div class="flex h-9 bg-gray-200 ml-2 rounded-full w-full">
                                    <input type="text" name="" id="" placeholder="Nhập nội dung trả lời" class="w-full text-sm bg-gray-200 px-4 rounded-l-full outline-none">
                                    <button class="px-4">
                                        <i class="fas fa-reply"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li class="flex py-4">
                        <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="" class="w-16 h-16 rounded-full">
                        <div class="ml-2">
                            <div class="flex text-yellow-400 text-xs mb-0.5">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div>
                                <span class="font-semibold">Nguyễn Thanh Tùng</span>
                                <span class="text-sm text-gray-500">(16 Tháng 12, 2021)</span>
                            </div>
                            <p class="text-gray-500">Mlem quá</p>

                            <ul class="text-gray-500 flex text-sm mt-1">
                                <li class="mr-2 transition hover:text-black cursor-pointer">Xóa</li>
                                <li class="transition hover:text-black cursor-pointer">Trả lời</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <button class="bg-[#D9A953] px-2 py-0.5 rounded text-white text-sm font-semibold block mx-auto transition duration-200 ease-linear hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Xem tất cả</button>
            </section>

            <section class="container max-w-6xl px-3 mx-auto my-6 border-t">
                <h2 class="text-2xl font-semibold mt-2">Sản phẩm tương tự</h2>
                ${await Related.render(id, productDetail.categoryId)}
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
    afterRender(id) {
        Header.afterRender();
        Footer.afterRender();
        Related.afterRender();

        const formAddCart = document.querySelector("#form__add-cart");
        const qntElement = formAddCart.querySelector("#form__add-cart-qnt");
        const toppingElement = formAddCart.querySelector("#form__add-cart-topping");
        const totalPriceElement = formAddCart.querySelector(".form__add-cart-total-price");
        const btnResetForm = document.querySelector(".form__add-cart-btn-clear");

        // render tổng tiền
        const renderTotalPrice = async () => {
            const sizeElement = formAddCart.querySelector(".form__add-cart-size:checked");

            let toppingId = toppingElement.value;
            toppingId = +toppingId || 0;
            const sizeId = +sizeElement.value || 0;
            const qnt = qntElement.value;

            const totalPrice = await getPrice(id, toppingId, sizeId, qnt);
            totalPriceElement.classList.add("active");
            totalPriceElement.innerHTML = `Giá: ${formatCurrency(totalPrice)}`;
        };

        // add cart
        formAddCart.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        // tăng giảm số lượng
        const btnMinus = formAddCart.querySelector("#form__add-cart-qnt-minus");
        const btnPlus = formAddCart.querySelector("#form__add-cart-qnt-plus");

        btnMinus.addEventListener("click", () => {
            if (qntElement.value <= 0) {
                toastr.info("Vui lòng chọn số lượng lớn hơn 0");
            } else {
                qntElement.value -= 1;
                renderTotalPrice();
            }
        });

        btnPlus.addEventListener("click", () => {
            qntElement.value = Number(qntElement.value) + 1;
            renderTotalPrice();
        });

        formAddCart.addEventListener("change", async () => {
            renderTotalPrice();
            btnResetForm.classList.remove("hidden");
        });

        // reset form add cart
        btnResetForm.addEventListener("click", () => {
            formAddCart.reset();
            totalPriceElement.classList.remove("active");
            btnResetForm.classList.add("hidden");
        });
    },
};

export default ProductDetailPage;