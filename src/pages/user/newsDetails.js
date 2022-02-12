import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import Nav from "../../components/user/news/nav";
import Related from "../../components/user/news/related";

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

                        ${Related.render()}
                    </div>
                </div>

                ${Nav.render()}
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Footer.afterRender();
    },
};

export default NewsDetailsPage;