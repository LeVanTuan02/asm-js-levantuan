import Footer from "../../../components/user/footer";
import Header from "../../../components/user/header";

const ThanksPage = {
    async render() {
        return /* html */ `
        ${await Header.render()}

        <!-- content -->
        <main class="min-h-[calc(100vh-518px)]">
            <section class="container max-w-6xl mx-auto px-3 mt-10">
                <ul class="flex justify-center items-center">
                    <li class="text-2xl px-2 hidden md:block">
                        <span class="uppercase text-gray-400 cursor-default">SHOPPING CART</span>
                    </li>
                    <li class="text-md text-gray-400 px-2 hidden md:block">
                        <i class="fas fa-chevron-right"></i>
                    </li>
                    <li class="text-2xl px-2 hidden md:block">
                        <span class="uppercase text-gray-400 cursor-default">Checkout details</span>
                    </li>
                    <li class="text-md text-gray-400 px-2 hidden md:block">
                        <i class="fas fa-chevron-right"></i>
                    </li>
                    <li class="text-2xl px-2">
                        <span class="uppercase text-black">Order Complete</span>
                    </li>
                </ul>
            </section>

            <section class="container max-w-6xl mx-auto">
                <h1 class="text-center mt-4 font-semibold text-2xl uppercase">Đặt hàng thành công</h1>

                <p class="text-center mt-2">
                    Cảm ơn bạn đã đặt hàng của Tea House.
                    Nhân viên sẽ gọi điện từ số điện thoại bạn đã cung cấp
                    để Confirm (Xác nhận) lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
                </p>

                <div class="flex items-center justify-center mt-2">
                    <a href="">
                        <button class="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                            <i class="fas fa-long-arrow-alt-left"></i>
                            Tiếp tục mua hàng
                        </button>
                    </a>
                    <a href="" class="ml-2">
                        <button class="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                            Kiểm tra đơn hàng
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </a>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default ThanksPage;