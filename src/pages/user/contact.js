import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const ContactPage = {
    async render() {
        return /* html */ `
        ${await Header.render("contact")}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 py-8 text-center">
                <h1 class="text-2xl font-semibold text-[#D9A953] mb-2">Liên hệ với Yotea</h1>
                <p>Từng ngày Yotea trở nên hoàn thiện hơn về diện mạo, chất lượng sản phẩm dịch vụ là nhờ sự đóng góp ý kiến của quý khách hàng. Để cảm nhận được sự thay đổi ấy, đừng ngần ngại nói với Yotea nhé.</p>
            </section>

            <section class="bg-[#EEE8DF] py-16">
                <form action="" class="container max-w-6xl mx-auto px-3">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 md:col-span-6">
                            <input type="text" placeholder="Họ và tên" class="w-full rounded-full outline-none h-10 px-4 shadow-sm">
                        </div>

                        <div class="col-span-12 md:col-span-6">
                            <input type="text" placeholder="Email" class="w-full rounded-full outline-none h-10 px-4 shadow-sm">
                        </div>

                        <div class="col-span-12 md:col-span-4">
                            <input type="text" placeholder="Số điện thoại" class="w-full rounded-full outline-none h-10 px-4 shadow-sm">
                        </div>

                        <div class="col-span-12 md:col-span-4">
                            <select name="" id="" class="outline-none w-full rounded-full h-10 px-4 shadow-sm">
                                <option value="">Tỉnh/Thành</option>
                            </select>
                        </div>

                        <div class="col-span-12 md:col-span-4">
                            <select name="" id="" class="outline-none w-full rounded-full h-10 px-4 shadow-sm">
                                <option value="">Cửa hàng phản hồi</option>
                                <option value="">Teahouse HN</option>
                            </select>
                        </div>

                        <div class="col-span-12">
                            <label for="contact__form-content" class="text-[#D9A953] font-semibold mb-1 text-lg block">Nội dung phản hồi</label>
                            <textarea name="" id="contact__form-content" cols="30" rows="10" placeholder="Nội dung phản hồi" class="w-full rounded-xl outline-none py-2 px-3 shadow-sm"></textarea>
                        </div>

                        <div class="col-span-12 flex items-center">
                            <input type="checkbox" name="" id="contact-checkbox">
                            <label for="contact-checkbox" class="ml-2">Tôi xác nhận các thông tin cá nhân cung cấp ở trên là hoàn toàn chính xác và đồng ý để Yotea sử dụng các thông tin đó cho mục đích giải quyết phản hồi.</label>
                        </div>
                    </div>

                    <button class="block mx-auto mt-8 h-10 rounded-full bg-[#D9A953] text-white font-semibold px-4 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Gửi phản hồi</button>
                </form>
            </section>

            <section class="container max-w-6xl mx-auto px-3 py-10 leading-relaxed">
                <h2 class="text-xl font-semibold text-[#D9A953] mb-1">Thỏa thuận bảo mật thông tin</h2>
                <p>
                    Yotea cam kết giữ bí mật hoàn toàn thông tin của Quý khách hàng theo đúng quy định 
                    pháp luật nước sở tại về quyền bảo mật thông tin có liên quan. Trường hợp xảy ra 
                    khiếu nại, than phiền, Yotea có thể sẽ sử dụng thông tin khách hàng để chuyển giao 
                    đến bộ phận liên quan giải quyết:
                </p>
                <ul class="mb-5">
                    <li>1. Nội bộ các bộ phận trực thuộc Yotea</li>
                    <li>
                        2. Bên thứ ba được ủy quyền chính thức từ Yotea cho việc giải quyết các than phiền, 
                        khiếu nại mang tính chất nghiêm trọng
                    </li>
                </ul>

                <p>Thời gian giải quyết khiếu nại than phiền được tính dựa trên các ngày làm việc trong tuần 
                    từ thứ 2 đến thứ 6, thao giờ hành chính.
                </p>
                <ul class="mb-5">
                    <li>1. Yotea cam kết bảo mật các thông tin mà khách hàng cung cấp và tuân thủ quy định 
                        pháp luật về bảo mật những thông tin liên quan.
                    </li>
                    <li>
                        2. Thông tin cá nhân của khách hàng được sử dụng nhằm mục đích:
                        <ul>
                            <li>- Giải quyết khiếu nại, than phiền</li>
                            <li>- Tiếp nhận ý kiến để cải thiện chất lượng sản phẩm dịch vụ</li>
                            <li>- Cung cấp thông tin các chương trình khuyến mãi.</li>
                        </ul>
                    </li>
                    <li>
                        3. Yotea có thể tiết lộ thông tin của khách hàng cho mục đích giải quyết khiếu nại, 
                        than phiền của khách hàng cho:
                        <ul>
                            <li>- Các bộ phận trực thuộc Cty cổ phần TMDV Chào ngày mới - Trà sữa Yotea</li>
                            <li>
                                - Bên thứ ba được ủy quyền chính thức từ Trà sữa Yotea cho việc giải quyết 
                                các than phiền, khiếu nại mang tính chất nghiêm trọng
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 class="text-xl font-semibold text-[#D9A953] mb-1">LƯU Ý</h2>
                <p>
                    Quý khách hàng vui lòng cung cấp đầy đủ chính xác các thông tin cá nhân 
                    để Yotea có thể liên hệ giải quyết vấn đề hoặc tiếp nhận ý kiến của khách 
                    hàng một cách nhanh nhất.
                </p>
                <p>
                    Quá trình giải quyết và xử lý phản hồi của quý khách hàng sẽ chậm hơn vào 
                    các ngày Thứ bảy, Chủ nhật, ngày lễ.
                </p>
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

export default ContactPage;