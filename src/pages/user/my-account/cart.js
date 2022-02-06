import Footer from "../../../components/user/footer";
import Header from "../../../components/user/header";
import MyAccNav from "../../../components/user/myAccNav";

const MyAccCartPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="py-7 bg-gray-100 border-b">
                <div class="container max-w-6xl mx-auto px-3 text-gray-500">
                    <h1 class="uppercase font-semibold text-2xl">My account</h1>
                    <p class="text-sm mt-1 uppercase">Lịch sử đặt hàng</p>
                </div>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-5 my-8">
                ${MyAccNav.render()}

                <div class="col-span-9">
                    <!-- search -->
                    <div class="flex">
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] flex-1 border px-2 h-10 text-sm outline-none" placeholder="Nhập mã đơn hàng hoặc tên khách hàng">
                        <select name="" id="" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] border px-2 h-10 text-sm outline-none">
                            <option value="">-- Trạng thái --</option>
                            <option value="">Đã xác nhận</option>
                            <option value="">Đã xác nhận</option>
                            <option value="">Đã xác nhận</option>
                            <option value="">Đã xác nhận</option>
                        </select>
                    </div>
                    <!-- end search -->

                    <!-- table -->
                    <table class="mt-3 text-gray-600 w-full text-left">
                        <thead>
                            <tr>
                                <th class="pb-1 border-b-2 uppercase text-sm">Mã ĐH</th>
                                <th class="pb-1 border-b-2 uppercase text-sm">Tên người nhận</th>
                                <th class="pb-1 border-b-2 uppercase text-sm">Ngày đặt</th>
                                <th class="pb-1 border-b-2 uppercase text-sm">Tổng giá trị</th>
                                <th class="pb-1 border-b-2 uppercase text-sm">Trạng thái</th>
                                <th class="pb-1 border-b-2 uppercase text-sm text-right">Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="border-b">
                                <td>#100</td>
                                <td class="py-2">Lê Tuân</td>
                                <td class="py-2">19/12/2021 15:09</td>
                                <td class="py-2">43,000 VNĐ</td>
                                <td class="py-2">
                                    <label for="" class="px-1 py-0.5 text-sm rounded-[4px] font-medium bg-[#FFE2E5] text-[#F64E60]">Đã hủy</label>
                                </td>
                                <td class="py-2 text-right">
                                    <a href="/my-account/cart/1">
                                        <button class="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">View</button>
                                    </a>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td>#100</td>
                                <td class="py-2">Lê Tuân</td>
                                <td class="py-2">19/12/2021 15:09</td>
                                <td class="py-2">43,000 VNĐ</td>
                                <td class="py-2">
                                    <label for="" class="px-1 py-0.5 text-sm rounded-[4px] font-medium bg-[#FFE2E5] text-[#F64E60]">Đã hủy</label>
                                </td>
                                <td class="py-2 text-right">
                                    <a href="/my-account/cart/1">
                                        <button class="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">View</button>
                                    </a>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td>#100</td>
                                <td class="py-2">Lê Tuân</td>
                                <td class="py-2">19/12/2021 15:09</td>
                                <td class="py-2">43,000 VNĐ</td>
                                <td class="py-2">
                                    <label for="" class="px-1 py-0.5 text-sm rounded-[4px] font-medium bg-[#FFE2E5] text-[#F64E60]">Đã hủy</label>
                                </td>
                                <td class="py-2 text-right">
                                    <a href="/my-account/cart/1">
                                        <button class="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">View</button>
                                    </a>
                                </td>
                            </tr>
                            <tr class="">
                                <td>#100</td>
                                <td class="py-2">Lê Tuân</td>
                                <td class="py-2">19/12/2021 15:09</td>
                                <td class="py-2">43,000 VNĐ</td>
                                <td class="py-2">
                                    <label for="" class="px-1 py-0.5 text-sm rounded-[4px] font-medium bg-[#E1F0FF] text-[#3699FF]">Đã xác nhận</label>
                                </td>
                                <td class="py-2 text-right">
                                    <a href="/my-account/cart/1">
                                        <button class="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">View</button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- end table -->

                    <!-- pagination -->
                    <ul class="flex justify-center mt-5">
                        <li class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <i class="fas fa-angle-left"></i>
                            </button>
                        </li>
                        <li class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">1</li>
                        <li class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">2</li>
                        <li class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">3</li>
                        <li class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
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
};

export default MyAccCartPage;