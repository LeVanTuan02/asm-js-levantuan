import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const NewsPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl px-3 mx-auto flex mt-8 justify-center">
                <div class="text-center px-4 group">
                    <div class="w-20 h-20 text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <i class="fas fa-border-all"></i>
                    </div>
                    <p class="font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tất cả</p>
                </div>
                <div class="text-center px-4 group">
                    <div class="w-20 h-20 text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <i class="fas fa-border-all"></i>
                    </div>
                    <p class="font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tất cả</p>
                </div>
                <div class="text-center px-4 group">
                    <div class="w-20 h-20 text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <i class="fas fa-border-all"></i>
                    </div>
                    <p class="font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tất cả</p>
                </div>
            </section>

            <section class="py-16 bg-[#EFE8DE] mt-6">
                <div class="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div>
                        <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <i class="fas fa-newspaper"></i>
                            </button>
                        </a>
                        <div class="bg-white rounded-b-xl shadow px-3 py-2">
                            <p class="text-sm text-gray-500">Tháng Mười 3, 2021</p>
                            <h3>
                                <a href="" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của Yo</a>
                            </h3>
                            <p class="text-gray-500 text-sm text-justify">Theo vietbao.vn – Yotea – thương hiệu trà sữa đã quen mặt với giới […]</p>

                            <a href="">
                                <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default NewsPage;