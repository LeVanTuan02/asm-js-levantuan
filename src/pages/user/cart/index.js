import Footer from "../../../components/user/footer";
import Header from "../../../components/user/header";

const CartPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 mt-10">
                <ul class="flex justify-center items-center">
                    <li class="text-2xl px-2">
                        <a href="/cart" class="uppercase text-black transition ease-linear duration-200 hover:text-black">SHOPPING CART</a>
                    </li>
                    <li class="text-md text-gray-400 px-2 hidden md:block">
                        <i class="fas fa-chevron-right"></i>
                    </li>
                    <li class="text-2xl px-2 hidden md:block">
                        <a href="/cart-checkout" class="uppercase text-gray-400 transition ease-linear duration-200 hover:text-black">Checkout details</a>
                    </li>
                    <li class="text-md text-gray-400 px-2 hidden md:block">
                        <i class="fas fa-chevron-right"></i>
                    </li>
                    <li class="text-2xl px-2 hidden md:block">
                        <span class="uppercase text-gray-400 cursor-default">Order Complete</span>
                    </li>
                </ul>
            </section>

            <section class="container max-w-6xl mx-auto px-3 mt-10 grid grid-cols-12 mb-9">
                <div class="col-span-12 lg:col-span-8 lg:pr-6">
                    <table class="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr class="uppercase border-b-2">
                                <th class="pb-1 uppercase text-sm text-gray-500" colspan="3">Sản phẩm</th>
                                <th class="pb-1 uppercase text-sm text-gray-500">Giá</th>
                                <th class="pb-1 uppercase text-sm text-gray-500">Số lượng</th>
                                <th class="pb-1 uppercase text-sm text-gray-500 text-right">Tạm tính</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="border-b">
                                <td class="p-2">
                                    <button class="text-gray-400 text-2xl transition ease-linear duration-200 hover:text-black ">
                                        <i class="far fa-times-circle"></i>
                                    </button>
                                </td>
                                <td class="p-2">
                                    <a href="">
                                        <img class="block w-16 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="">
                                    </a>
                                </td>
                                <td class="p-2">
                                    <a href="" class="font-semibold">Trà sữa trân châu đường đen</a>
                                    <div class="text-sm">
                                        <p>Đá: 0%</p>
                                        <p>Đường: 30%</p>
                                        <p>Size: M</p>
                                        <p>Topping: xxx</p>
                                    </div>
                                </td>
                                <td class="font-bold">59,000 ₫</td>
                                <td class="p-2">
                                    <div class="flex items-center h-9">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                                        <input type="text" class="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" value="1">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                                    </div>
                                </td>
                                <td class="font-bold text-right">59,000 ₫</td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-2">
                                    <button class="text-gray-400 text-2xl transition ease-linear duration-200 hover:text-black ">
                                        <i class="far fa-times-circle"></i>
                                    </button>
                                </td>
                                <td class="p-2">
                                    <a href="">
                                        <img class="block w-16 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="">
                                    </a>
                                </td>
                                <td class="p-2">
                                    <a href="" class="font-semibold">Trà sữa trân châu đường đen</a>
                                    <div class="text-sm">
                                        <p>Đá: 0%</p>
                                        <p>Đường: 30%</p>
                                        <p>Size: M</p>
                                        <p>Topping: xxx</p>
                                    </div>
                                </td>
                                <td class="font-bold">59,000 ₫</td>
                                <td class="p-2">
                                    <div class="flex items-center h-9">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                                        <input type="text" class="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" value="1">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                                    </div>
                                </td>
                                <td class="font-bold text-right">59,000 ₫</td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-2">
                                    <button class="text-gray-400 text-2xl transition ease-linear duration-200 hover:text-black ">
                                        <i class="far fa-times-circle"></i>
                                    </button>
                                </td>
                                <td class="p-2">
                                    <a href="">
                                        <img class="block w-16 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="">
                                    </a>
                                </td>
                                <td class="p-2">
                                    <a href="" class="font-semibold">Trà sữa trân châu đường đen</a>
                                    <div class="text-sm">
                                        <p>Đá: 0%</p>
                                        <p>Đường: 30%</p>
                                        <p>Size: M</p>
                                        <p>Topping: xxx</p>
                                    </div>
                                </td>
                                <td class="font-bold">59,000 ₫</td>
                                <td class="p-2">
                                    <div class="flex items-center h-9">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                                        <input type="text" class="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" value="1">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                                    </div>
                                </td>
                                <td class="font-bold text-right">59,000 ₫</td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-2">
                                    <button class="text-gray-400 text-2xl transition ease-linear duration-200 hover:text-black ">
                                        <i class="far fa-times-circle"></i>
                                    </button>
                                </td>
                                <td class="p-2">
                                    <a href="">
                                        <img class="block w-16 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" alt="">
                                    </a>
                                </td>
                                <td class="p-2">
                                    <a href="" class="font-semibold">Trà sữa trân châu đường đen</a>
                                    <div class="text-sm">
                                        <p>Đá: 0%</p>
                                        <p>Đường: 30%</p>
                                        <p>Size: M</p>
                                        <p>Topping: xxx</p>
                                    </div>
                                </td>
                                <td class="font-bold">59,000 ₫</td>
                                <td class="p-2">
                                    <div class="flex items-center h-9">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                                        <input type="text" class="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" value="1">
                                        <button type="button" class="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                                    </div>
                                </td>
                                <td class="font-bold text-right">59,000 ₫</td>
                            </tr>
                        </tbody>
                    </table>

                    <ul class="flex mt-6 items-center">
                        <li>
                            <a href="/products" class="">
                                <button class="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                                    <i class="fas fa-long-arrow-alt-left"></i>
                                    Tiếp tục xem sản phẩm
                                </button>
                            </a>
                        </li>
                        <li class="ml-2">
                            <button class="uppercase bg-[#D9A953] px-3 h-8 font-semibold text-sm text-white opacity-75 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Cập nhật giỏ hàng</button>
                        </li>
                    </ul>

                </div>

                <div class="mt-8 lg:mt-0 col-span-12 lg:col-span-4 lg:border-l lg:pl-6">
                    <table class="table-fixed w-full text-left">
                        <thead>
                            <tr class="uppercase border-b-2">
                                <th class="pb-1 text-sm text-gray-500" colspan="2">Cộng giỏ hàng</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="border-b">
                                <td class="py-2">Tạm tính</td>
                                <td class="py-2 text-right font-semibold">15,000đ</td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-2 flex items-center">
                                    Voucher
                                    <strong class="ml-1 mr-2">Covid</strong>
                                    <a href=""><i class="fas fa-times"></i></a>
                                </td>
                                <td class="py-2 text-right font-semibold">- 100,000 VNĐ</td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-2">Tổng</td>
                                <td class="py-2 text-right font-semibold">0đ</td>
                            </tr>
                        </tbody>
                    </table>

                    <button class="mt-4 w-full px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Tiến hành thanh toán</button>
                    
                    <form action="" class="mt-7">
                        <div class="flex items-center pb-2 font-semibold border-b-2 text-gray-500">
                            <div class="mr-2">
                                <i class="fas fa-tag"></i>
                            </div>
                            Mã giảm giá
                        </div>
                        
                        <input type="text" placeholder="Mã giảm giá" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] my-4 w-full border px-2 h-10 text-sm outline-none">

                        <button class="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-black text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Áp dụng</button>
                    </form>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default CartPage;