import Footer from "../../../components/user/footer";
import Header from "../../../components/user/header";
import MyAccNav from "../../../components/user/myAccNav";

const MyAccCartDetailsPage = {
    async render() {
        return /* html */ `
        ${await Header.render()}

        <!-- content -->
        <main>
            <section class="py-7 bg-gray-100 border-b">
                <div class="container max-w-6xl mx-auto px-3 text-gray-500">
                    <h1 class="uppercase font-semibold text-2xl">My account</h1>
                    <p class="text-sm mt-1 uppercase">CHI TIẾT ĐƠN HÀNG</p>
                </div>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-5 my-8">
                ${MyAccNav.render()}

                <div class="col-span-12 lg:col-span-9">
                    <section class="flex justify-between items-center">
                        <div>
                            Đơn hàng #<mark>100</mark> đặt lúc <mark>19/12/2021 15:09</mark> hiện tại <mark>Đã bị hủy</mark>
                        </div>

                        <button class="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Lịch sử ĐH</button>
                    </section>

                    <section class="mt-4">
                        <h2 class="font-semibold text-gray-600 text-2xl">Chi tiết đơn hàng</h2>

                        <table class="mt-3 text-gray-600 w-full text-left">
                            <thead>
                                <tr>
                                    <th class="pb-1 border-b-2 uppercase text-sm">STT</th>
                                    <th class="pb-1 border-b-2 uppercase text-sm">Sản phẩm</th>
                                    <th class="pb-1 border-b-2 uppercase text-sm">Đơn giá</th>
                                    <th class="pb-1 border-b-2 uppercase text-sm">Số lượng</th>
                                    <th class="pb-1 border-b-2 uppercase text-sm text-right">Thành tiền</th>
                                </tr>
                            </thead>
    
                            <tbody>
                                <tr class="border-b">
                                    <td>1</td>
                                    <td class="py-1 flex items-center">
                                        <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" class="w-10 h-10 object-cover" alt="">
                                        <div class="pl-3">
                                            <a href="" class="text-blue-500">Trà sữa trân châu đường đen</a>
                                            <div class="text-sm">
                                                <p>Đá: 0%</p>
                                                <p>Đường: 30%</p>
                                                <p>Size: M</p>
                                                <p>Topping: xxx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-1">43,000 VNĐ</td>
                                    <td class="py-1">1</td>
                                    <td class="py-1 text-right text-black font-medium">50,000 VNĐ</td>
                                </tr>
                                <tr class="border-b">
                                    <td>1</td>
                                    <td class="py-1 flex items-center">
                                        <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" class="w-10 h-10 object-cover" alt="">
                                        <div class="pl-3">
                                            <a href="" class="text-blue-500">Trà sữa trân châu đường đen</a>
                                            <div class="text-sm">
                                                <p>Đá: 0%</p>
                                                <p>Đường: 30%</p>
                                                <p>Size: M</p>
                                                <p>Topping: xxx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-1">43,000 VNĐ</td>
                                    <td class="py-1">1</td>
                                    <td class="py-1 text-right text-black font-medium">50,000 VNĐ</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td class="py-1 flex items-center">
                                        <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" class="w-10 h-10 object-cover" alt="">
                                        <div class="pl-3">
                                            <a href="" class="text-blue-500">Trà sữa trân châu đường đen</a>
                                            <div class="text-sm">
                                                <p>Đá: 0%</p>
                                                <p>Đường: 30%</p>
                                                <p>Size: M</p>
                                                <p>Topping: xxx</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-1">43,000 VNĐ</td>
                                    <td class="py-1">1</td>
                                    <td class="py-1 text-right text-black font-medium">50,000 VNĐ</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section class="mt-4">
                        <h2 class="font-semibold text-gray-600 text-2xl">Tổng thanh toán</h2>

                        <table class="mt-1 text-gray-600 w-full text-left">
                            <tbody>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Tiền tạm tính:</td>
                                    <td class="py-1.5 text-right">143,000 VNĐ</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Voucher đã sử dụng</td>
                                    <td class="py-1.5 text-right">COVID (Giảm 100,000 VNĐ)</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Tổng giảm:</td>
                                    <td class="py-1.5 text-right">100,000 VNĐ</td>
                                </tr>
                                <tr>
                                    <td class="py-1.5 font-medium">Tổng tiền:</td>
                                    <td class="py-1.5 text-right">43,000 VNĐ</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section class="mt-4">
                        <h2 class="font-semibold text-gray-600 text-2xl">Thông tin vận chuyển</h2>

                        <table class="mt-1 text-gray-600 w-full text-left">
                            <tbody>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Họ và tên:</td>
                                    <td class="py-1.5 text-right">Lê Văn Tuân</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Địa chỉ:</td>
                                    <td class="py-1.5 text-right">BG</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Số điện thoại:</td>
                                    <td class="py-1.5 text-right">0347526325</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Email:</td>
                                    <td class="py-1.5 text-right">tuan@gmail.com</td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-1.5 font-medium">Thời gian đặt:</td>
                                    <td class="py-1.5 text-right">abc</td>
                                </tr>
                                <tr>
                                    <td class="py-1.5 font-medium">Ghi chú:</td>
                                    <td class="py-1.5 text-right">tuan@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default MyAccCartDetailsPage;