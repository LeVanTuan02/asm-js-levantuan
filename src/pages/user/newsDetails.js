import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const NewsDetailsPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 text-center pt-7">
                <div class="border-b border-dashed pb-7">
                    <h3 class="uppercase text-sm">Tin tức</h3>
                    <h1 class="uppercase font-bold text-xl py-1">YOTEA TƯNG BỪNG CHÀO ĐÓN 2 CƠ SỞ MỚI TẠI VINCOM THÁI HÒA VÀ BIG C NAM ĐỊNH VÀO NGÀY CUỐI NĂM 2019</h1>
                    <p class="text-sm">POSTED ON 29/12/2021 BY ADMIN</p>
                </div>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 pb-8 pt-4">
                <div class="col-span-12 lg:col-span-9 lg:pr-6">
                    <div class="leading-relaxed text-justify">
                        Cà phê Thổ Nhĩ Kỳ có một phong cách pha chế rất quyến rũ và nghệ thuật thưởng thức thú vị. Cà phê ở đất nước này không chỉ là một món đồ uống đơn thuần mà còn mang rất nhiều giá trị văn hóa khác. Cà phê đã trở thành nghi thức
                        Ở đất nước này cấm tuyệt đối các thức uống có cồn nên do đó cà phê trở thành một thức uống được ưa chuộng toàn xã hội. Nghi thức cà phê trở nên quan trọng hơn và trở thành một nghi thức không thể thiếu trong một cuộc giao tiếp xã hội, thết đãi quan khách và thậm chí là việc cưới hỏi.
                        Cà phê Thổ Nhĩ Kỳ chủ yếu sử dụng loại cà phê Arabica được rang và nghiền nhuyễn ngay trước khi pha chế cà phê. Người ta sử dụng một loại ấm pha cà phê đặc biệt gọi là cezve. Bột cà phê được đo lường kỹ, ngâm và đun nóng quan một chiếc khay nhỏ chứa cát và đặt trên bếp, cà phê được đun nóng nhưng không sôi và đủ lâu để cà phê có thời gian cho ra một hương vị thơm ngon và tạo bọt.
                        Cà phê có thể được hâm nóng hai hoặc ba lần rồi được rót vào cốc, để tạo bọt thật dày khi rót cà phê phải giơ ấm lên cao và rót chậm rãi. Cà phê có thể được pha chế với hạt nhục đậu khấu (cardamom) và bột quế (cinnamon) và một số hương liệu khác để làm phong phú thêm hương vị.
                        Cà phê có thể được hâm nóng hai hoặc ba lần rồi được rót vào cốc, để tạo bọt thật dày khi rót cà phê phải giơ ấm lên cao và rót chậm rãi. Cà phê có thể được pha chế với hạt nhục đậu khấu (cardamom) và bột quế (cinnamon) và một số hương liệu khác để làm phong phú thêm hương vị.
                        Cà phê có thể được hâm nóng hai hoặc ba lần rồi được rót vào cốc, để tạo bọt thật dày khi rót cà phê phải giơ ấm lên cao và rót chậm rãi. Cà phê có thể được pha chế với hạt nhục đậu khấu (cardamom) và bột quế (cinnamon) và một số hương liệu khác để làm phong phú thêm hương vị.
                        Cà phê có thể được hâm nóng hai hoặc ba lần rồi được rót vào cốc, để tạo bọt thật dày khi rót cà phê phải giơ ấm lên cao và rót chậm rãi. Cà phê có thể được pha chế với hạt nhục đậu khấu (cardamom) và bột quế (cinnamon) và một số hương liệu khác để làm phong phú thêm hương vị.
                    </div>

                    <ul class="flex justify-center py-7">
                        <li class="mx-0.5">
                            <a href="" class="w-9 h-9 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="mx-0.5">
                            <a href="" class="w-9 h-9 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="mx-0.5">
                            <a href="" class="w-9 h-9 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="mx-0.5">
                            <a href="" class="w-9 h-9 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                    </ul>

                    <div class="border-t border-dashed">
                        <h2 class="uppercase text-lg font-bold my-3">Bài viết liên quan</h2>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside class="hidden lg:block lg:col-span-3 pl-6 border-l">
                    <section>
                        <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">CHUYÊN MỤC</h2>

                        <ul class="mt-4 grid grid-cols-1 divide-y">
                            <li>
                                <a href="" class="block py-1 leading-7 text-gray-500 transition duration-200 hover:text-black">Tin tức</a>
                            </li>
                            <li>
                                <a href="" class="block py-1 leading-7 text-gray-500 transition duration-200 hover:text-black">Tin tức</a>
                            </li>
                            <li>
                                <a href="" class="block py-1 leading-7 text-gray-500 transition duration-200 hover:text-black">Tin tức</a>
                            </li>
                        </ul>
                    </section>

                    <section class="mt-5">
                        <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Bài viết mới</h2>

                        <ul class="mt-4 grid grid-cols-1 divide-y">
                            <li>
                                <a href="" class="block py-1 leading-7 text-gray-500 transition duration-200 hover:text-black">Tin tức</a>
                            </li>
                            <li>
                                <a href="" class="block py-1 leading-7 text-gray-500 transition duration-200 hover:text-black">Tin tức</a>
                            </li>
                            <li>
                                <a href="" class="block py-1 leading-7 text-gray-500 transition duration-200 hover:text-black">Tin tức</a>
                            </li>
                        </ul>
                    </section>
                </aside>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default NewsDetailsPage;