import $ from "jquery";
import "slick-carousel";
import Banner from "../../components/user/banner";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <!-- banner -->
            ${Banner.render()}
            <!-- end banner -->

            <!-- category -->
            <section class="container max-w-6xl mx-auto py-7 px-3">
                <h2 class="uppercase text-center block text-[#D9A953] text-2xl font-semibold">DANH MỤC SẢN PHẨM</h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                        <a href="" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642589839/fpoly/asm-js/s%C6%B0a-tuoi-tr%C3%A2n-chau-%C4%91%C6%B0%E1%BB%9Dng-%C4%91en-1_iy0ckj.png');" class="block bg-cover bg-center pt-[100%]"></a>
                        <div class="text-center py-2 leading-3">
                            <h3>
                                <a href="" class="block uppercase text-lg font-semibold">Tea</a>
                            </h3>
                            <span class="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                    <div>
                        <a href="" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642589839/fpoly/asm-js/s%C6%B0a-tuoi-tr%C3%A2n-chau-%C4%91%C6%B0%E1%BB%9Dng-%C4%91en-1_iy0ckj.png');" class="block bg-cover bg-center pt-[100%]"></a>
                        <div class="text-center py-2 leading-3">
                            <h3>
                                <a href="" class="block uppercase text-lg font-semibold">Tea</a>
                            </h3>
                            <span class="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                    <div>
                        <a href="" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642589839/fpoly/asm-js/s%C6%B0a-tuoi-tr%C3%A2n-chau-%C4%91%C6%B0%E1%BB%9Dng-%C4%91en-1_iy0ckj.png');" class="block bg-cover bg-center pt-[100%]"></a>
                        <div class="text-center py-2 leading-3">
                            <h3>
                                <a href="" class="block uppercase text-lg font-semibold">Tea</a>
                            </h3>
                            <span class="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                    <div>
                        <a href="" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642589839/fpoly/asm-js/s%C6%B0a-tuoi-tr%C3%A2n-chau-%C4%91%C6%B0%E1%BB%9Dng-%C4%91en-1_iy0ckj.png');" class="block bg-cover bg-center pt-[100%]"></a>
                        <div class="text-center py-2 leading-3">
                            <h3>
                                <a href="" class="block uppercase text-lg font-semibold">Tea</a>
                            </h3>
                            <span class="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end category -->

            <!-- why -->
            <section style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642595093/fpoly/asm-js/bg_why_vzvhn6.jpg)" class="bg-cover bg-center bg-no-repeat py-20">
                <div class="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <h2 class="uppercase text-[#D9A953] text-2xl font-semibold">TẠI SAO CHỌN CHÚNG TÔI</h2>
                        <p class="text-justify mt-3">YoTea mang đến cho khách hàng sự trải nghiệm tuyệt vời chất
                            lượng đồ uống hảo hạng với những hạt cà phê rang xay được
                            chọn lọc kỹ càng từ những vùng đất trồng nổi tiếng, khi
                            pha cà phê vẫn giữ được hương vị đậm đà, thơm ngon và nguyên chất.
                        </p>
        
                        <ul class="mt-10">
                            <li class="flex mt-5">
                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1642595029/fpoly/asm-js/icon_why_1_rc8aau.png" alt="" class="w-14 h-14">
                                <div class="pl-3">
                                    <h3 class="font-semibold text-xl text-gray-800">Giá cả phải chăng</h3>
                                    <p>Cam kết chỉ cung cấp cà phê nguồn gốc được kiểm soát chất lượng</p>
                                </div>
                            </li>
                            <li class="flex mt-5">
                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1642595029/fpoly/asm-js/icon_why_1_rc8aau.png" alt="" class="w-14 h-14">
                                <div class="pl-3">
                                    <h3 class="font-semibold text-xl text-gray-800">Giá cả phải chăng</h3>
                                    <p>Cam kết chỉ cung cấp cà phê nguồn gốc được kiểm soát chất lượng</p>
                                </div>
                            </li>
                            <li class="flex mt-5">
                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1642595029/fpoly/asm-js/icon_why_1_rc8aau.png" alt="" class="w-14 h-14">
                                <div class="pl-3">
                                    <h3 class="font-semibold text-xl text-gray-800">Giá cả phải chăng</h3>
                                    <p>Cam kết chỉ cung cấp cà phê nguồn gốc được kiểm soát chất lượng</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div></div>
                </div>
            </section>
            <!-- end why -->

            <!-- product -->
            <section class="container max-w-6xl mx-auto py-9 px-3">
                <div class="text-center">
                    <h2 class="uppercase text-[#D9A953] text-2xl font-semibold">SẢN PHẨM NỔI BẬT</h2>
                    <p>Chào mừng bạn đến với thiên đường vị giác của Yotea. Menu Yotea rất đa dạng món uống, đủ để đáp ứng khẩu vị “ưa chua chuộng béo” của bạn. Order và thưởng thức ngay nhé.</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                            <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </ul>
                            <div class="text-sm pt-1">
                                20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end product -->

            <!-- news -->
            <section class="bg-[#EFE8DE] py-9">
                <div class="container max-w-6xl mx-auto px-3">
                    <h3>
                        <a href="" class="uppercase text-center block text-[#D9A953] text-2xl font-semibold">TIN TỨC - KHUYẾN MÃI</a>
                    </h3>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                        <div>
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl"></a>
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
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl"></a>
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
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl"></a>
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
                            <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642600643/fpoly/asm-js/tocotoco-thi-truong-my_vh0u5j.png);" class="block bg-cover bg-center pt-[70%] rounded-t-xl"></a>
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
                </div>
            </section>
            <!-- end news -->

            <!-- feedback -->
            <section class="py-16 mt-16 bg-center bg-cover bg-no-repeat group" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602275/fpoly/asm-js/pizi_coffe_1_r8_clients_say_row_bg_img_vc7e3r.jpg)">
                <div class="container max-w-6xl mx-auto">
                    <div>
                        <h3 class="uppercase text-center block text-[#D9A953] text-2xl font-semibold">KHÁCH HÀNG NÓI GÌ</h3>
                        <p class="text-center text-sm text-gray-300 font-semibold mt-1">1500+ KHÁCH HÀNG HÀI LÒNG</p>
                    </div>

                    <ul id="home__feedback">
                        <li class="text-center mt-9">
                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642602479/fpoly/asm-js/chang-trai-lai-3-dong-mau-va-nhung-bac-si-noi-tieng-tren-mang-4abe91-300x300_uah3ea.jpg" alt="" class="w-24 h-24 object-cover rounded-full mx-auto">
                            <ul class="flex text-yellow-500 justify-center mt-2">
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                            </ul>
                            <p class="font-semibold text-gray-300 text-xl italic">Lê Tuân Nek</p>
                            <p class="mt-1 text-gray-300">
                                Mình rất thích đưa khách hàng của mình đến đây bởi vì
                                phong cách rất chuyên nghiệp.Hơn nữa thức uống ở đây rất ngon,
                                có hương vị rất khác biệt, các vị khách của mình vô cùng thích.
                            </p>
                        </li>
                        <li class="text-center mt-9">
                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642602479/fpoly/asm-js/chang-trai-lai-3-dong-mau-va-nhung-bac-si-noi-tieng-tren-mang-4abe91-300x300_uah3ea.jpg" alt="" class="w-24 h-24 object-cover rounded-full mx-auto">
                            <ul class="flex text-yellow-500 justify-center mt-2">
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                            </ul>
                            <p class="font-semibold text-gray-300 text-xl italic">Lê Tuân Nek</p>
                            <p class="mt-1 text-gray-300">
                                Mình rất thích đưa khách hàng của mình đến đây bởi vì
                                phong cách rất chuyên nghiệp.Hơn nữa thức uống ở đây rất ngon,
                                có hương vị rất khác biệt, các vị khách của mình vô cùng thích.
                            </p>
                        </li>
                        <li class="text-center mt-9">
                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642602479/fpoly/asm-js/chang-trai-lai-3-dong-mau-va-nhung-bac-si-noi-tieng-tren-mang-4abe91-300x300_uah3ea.jpg" alt="" class="w-24 h-24 object-cover rounded-full mx-auto">
                            <ul class="flex text-yellow-500 justify-center mt-2">
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star"></i>
                                </li>
                            </ul>
                            <p class="font-semibold text-gray-300 text-xl italic">Lê Tuân Nek</p>
                            <p class="mt-1 text-gray-300">
                                Mình rất thích đưa khách hàng của mình đến đây bởi vì
                                phong cách rất chuyên nghiệp.Hơn nữa thức uống ở đây rất ngon,
                                có hương vị rất khác biệt, các vị khách của mình vô cùng thích.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- end feedback -->

            <!-- show -->
            <section class="px-3 py-9">
                <div class="text-center">
                    <h3 class="uppercase text-center block text-[#D9A953] text-2xl font-semibold">#trasuayotea</h3>
                    <p>Những hình ảnh update từ Instagram.</p>
                </div>

                <div class="mt-5 group" id="home__show">
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                    <div class="px-1">
                        <div style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642602026/fpoly/asm-js/188771575_2218613684942468_2579336373501724462_n_xalanv.jpg);" class="bg-cover bg-center bg-no-repeat pt-[100%] rounded-xl"></div>
                    </div>
                </div>
            </section>
            <!-- end show -->
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
    afterRender() {
        // slider
        $(document).ready(() => {
            $("#banner").slick({
                autoplay: true,
                prevArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 left-6 group-hover:left-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-left"></i></button>`,
                nextArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 right-6 group-hover:right-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-right"></i></button>`,
            });

            $("#home__show").slick({
                slidesToShow: 6,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                ],
                prevArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 left-6 group-hover:left-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-left"></i></button>`,
                nextArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 right-6 group-hover:right-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-right"></i></button>`,
            });

            $("#home__feedback").slick({
                autoplay: true,
                prevArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 left-6 group-hover:left-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-left"></i></button>`,
                nextArrow: /* html */ `<button class="invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10 right-6 group-hover:right-4 transition-all ease-linear duration-200 hover:bg-[#D9A953] hover:text-white hover:border-[#D9A953] rounded-full border-2 border-gray-400 text-gray-400"><i class="fas fa-chevron-right"></i></button>`,
            });
        });
    },
};

export default HomePage;