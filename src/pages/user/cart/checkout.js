import Footer from "../../../components/user/footer";
import Header from "../../../components/user/header";

const CheckoutPage = {
    async render() {
        return /* html */ `
        ${await Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 mt-10">
                <ul class="flex justify-center items-center">
                    <li class="text-2xl px-2 hidden md:block">
                        <a href="/cart" class="uppercase text-gray-400 transition ease-linear duration-200 hover:text-black">SHOPPING CART</a>
                    </li>
                    <li class="text-md text-gray-400 px-2 hidden md:block">
                        <i class="fas fa-chevron-right"></i>
                    </li>
                    <li class="text-2xl px-2">
                        <a href="/cart-checkout" class="uppercase text-black transition ease-linear duration-200 hover:text-black">Checkout details</a>
                    </li>
                    <li class="text-md text-gray-400 px-2 hidden md:block">
                        <i class="fas fa-chevron-right"></i>
                    </li>
                    <li class="text-2xl px-2 hidden md:block">
                        <span class="uppercase text-gray-400 cursor-default">Order Complete</span>
                    </li>
                </ul>
            </section>

            <section class="container max-w-6xl mx-auto px-3 mt-10 mb-9 grid grid-cols-12 gap-5">
                <div class="col-span-12 lg:col-span-8 border-t-2 pt-3">
                    <h3 class="uppercase text-gray-500 font-semibold mb-2 text-lg">Thông tin thanh toán</h3>
                    
                    <div class="grid grid-cols-12 gap-x-4">
                        <div class="col-span-6 mb-3">
                            <label for="" class="font-semibold mb-1 block">Họ và tên *</label>
                            <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ tên">
                        </div>
                        <div class="col-span-6 mb-3">
                            <label for="" class="font-semibold mb-1 block">Điện thoại *</label>
                            <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Số điện thoại người nhận hàng">
                        </div>
                        <div class="col-span-12 mb-3">
                            <label for="" class="font-semibold mb-1 block">Email *</label>
                            <input type="email" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Email người nhận hàng">
                        </div>
                        <div class="col-span-4 mb-3 relative">
                            <label for="" class="font-semibold mb-1 block">Tỉnh/Thành phố *</label>
                            <input type="text" class="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none" placeholder="Tỉnh/Thành phố">

                            <ul class="hidden absolute top-full left-0 right-0 border shadow-sm max-h-[216px] overflow-y-scroll">
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                            </ul>
                        </div>
                        <div class="col-span-4 mb-3 relative">
                            <label for="" class="font-semibold mb-1 block">Quận/Huyện *</label>
                            <input type="text" class="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none" placeholder="Quận/Huyện">

                            <ul class="hidden absolute top-full left-0 right-0 border shadow-sm max-h-[216px] overflow-y-scroll">
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                            </ul>
                        </div>
                        <div class="col-span-4 mb-3 relative">
                            <label for="" class="font-semibold mb-1 block">Xã/Phường *</label>
                            <input type="text" class="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none" placeholder="Xã/Phường">

                            <ul class="hidden absolute top-full left-0 right-0 border shadow-sm max-h-[216px] overflow-y-scroll">
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                                <li class="h-9 leading-9 px-2 hover:bg-blue-300 block cursor-pointer">Bắc Giang</li>
                            </ul>
                        </div>
                        <div class="col-span-12 mb-3">
                            <label for="" class="font-semibold mb-1 block">Địa chỉ cụ thể *</label>
                            <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: Số xx, Ngõ xx, Phú Kiều">
                        </div>
                    </div>

                    <h3 class="uppercase text-gray-500 font-semibold my-2 text-lg">Thông tin bổ sung</h3>
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 mb-3">
                            <label for="" class="font-semibold mb-1 block">Ghi chú đơn hàng (tuỳ chọn)</label>
                            <textarea name="" id="" cols="30" rows="5" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border p-2 text-sm outline-none" placeholder="Ghi chú về đơn hàng"></textarea>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 border-l p-4 border-2 border-[#D9A953] min-h-40">
                    <h3 class="uppercase text-gray-500 font-semibold mb-3 text-lg">Đơn hàng của bạn</h3>

                    <table class="w-full text-left">
                        <thead>
                            <tr>
                                <th class="uppercase text-gray-500 text-sm pb-1.5 border-b-2">Sản phẩm</th>
                                <th class="uppercase text-gray-500 text-sm pb-1.5 border-b-2 text-right">Tổng</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="border-b">
                                <td class="text-sm leading-5 py-3 text-gray-500 pr-1">
                                    <p class="text-base">
                                        <span>Trà Xanh Chanh Leo Thạch Lô Hội</span>
                                        <strong>x 1</strong>
                                    </p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Topping: xx</p>
                                </td>

                                <td class="py-3 font-semibold text-right pl-1">50,000 ₫</td>
                            </tr>
                            <tr class="border-b">
                                <td class="text-sm leading-5 py-3 text-gray-500 pr-1">
                                    <p class="text-base">
                                        <span>Trà Xanh Chanh Leo Thạch Lô Hội</span>
                                        <strong>x 1</strong>
                                    </p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Topping: xx</p>
                                </td>

                                <td class="py-3 font-semibold text-right pl-1">50,000 ₫</td>
                            </tr>
                            <tr class="border-b">
                                <td class="text-sm leading-5 py-3 text-gray-500 pr-1">
                                    <p class="text-base">
                                        <span>Trà Xanh Chanh Leo Thạch Lô Hội</span>
                                        <strong>x 1</strong>
                                    </p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Đá: 30%</p>
                                    <p class="uppercase">Topping: xx</p>
                                </td>

                                <td class="py-3 font-semibold text-right pl-1">50,000 ₫</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr class="border-b">
                                <td class="font-semibold text-sm py-2">Tạm tính</td>
                                <td class="font-semibold">40,000 ₫</td>
                            </tr>
                            <tr class="border-b">
                                <td class="font-semibold text-sm py-2">Tổng</td>
                                <td class="font-semibold">40,000 ₫</td>
                            </tr>
                        </tfoot>
                    </table>

                    <form action="" class="my-4">
                        <div class="py-2 border-b">
                            <div class="flex items-center">
                                <input type="radio" name="payment-method" id="payment-method-bank">
                                <label for="payment-method-bank" class="ml-2 font-semibold">Chuyển khoản ngân hàng</label>
                            </div>
                            <p class="text-sm leading-5 text-justify">
                                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
                                Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán.
                                Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
                            </p>
                        </div>
                        <div class="py-2">
                            <div class="flex items-center">
                                <input type="radio" name="payment-method" id="payment-method-cod">
                                <label for="payment-method-cod" class="ml-2 font-semibold">Trả tiền mặt khi nhận hàng</label>
                            </div>
                            <p class="text-sm leading-5 text-justify">Trả tiền mặt khi giao hàng</p>
                        </div>
                        <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đặt hàng</button>
                    </form>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default CheckoutPage;