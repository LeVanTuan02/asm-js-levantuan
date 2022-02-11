import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const StorePage = {
    render() {
        return /* html */ `
        ${Header.render("store")}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 mb-8">
                <h1 class="text-2xl font-semibold text-center text-[#D9A953] my-5 uppercase">Cửa hàng Yotea</h1>

                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-12 md:col-span-5">
                        <p>Vui lòng chọn khu vực bạn muốn tìm kiếm, chúng tôi sẽ hiển thị danh sách các cửa hàng phù hợp nhất</p>

                        <form action="" class="flex mt-3">
                            <input type="text" placeholder="Nhập tên chi nhánh" class="h-12 rounded-l-full px-5 border flex-1 outline-none">
                            <button class="bg-[#D9A953] px-5 text-white font-extrabold text-2xl rounded-r-full">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </form>

                        <ul class="mt-3 border-r h-[400px] overflow-y-scroll">
                            <li class="flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3">
                                <img class="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1642664388/fpoly/asm-js/108162714_1930571577080015_6762857609409971295_n_upoyhj.jpg" alt="">

                                <div class="ml-3 leading-6">
                                    <h2 class="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                    <p>SN 5, ngách 25/22 Phú Minh</p>
                                    <p>08:30 - 21:30</p>
                                    <p>0347.888.888</p>
                                </div>
                            </li>
                            <li class="flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3">
                                <img class="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1642664388/fpoly/asm-js/108162714_1930571577080015_6762857609409971295_n_upoyhj.jpg" alt="">

                                <div class="ml-3 leading-6">
                                    <h2 class="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                    <p>SN 5, ngách 25/22 Phú Minh</p>
                                    <p>08:30 - 21:30</p>
                                    <p>0347.888.888</p>
                                </div>
                            </li>
                            <li class="flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3">
                                <img class="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1642664388/fpoly/asm-js/108162714_1930571577080015_6762857609409971295_n_upoyhj.jpg" alt="">

                                <div class="ml-3 leading-6">
                                    <h2 class="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                    <p>SN 5, ngách 25/22 Phú Minh</p>
                                    <p>08:30 - 21:30</p>
                                    <p>0347.888.888</p>
                                </div>
                            </li>
                            <li class="flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3">
                                <img class="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1642664388/fpoly/asm-js/108162714_1930571577080015_6762857609409971295_n_upoyhj.jpg" alt="">

                                <div class="ml-3 leading-6">
                                    <h2 class="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                    <p>SN 5, ngách 25/22 Phú Minh</p>
                                    <p>08:30 - 21:30</p>
                                    <p>0347.888.888</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-7 min-h-[450px]">
                        <iframe class="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.396458214383!2d105.74261531501334!3d21.05682198598322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455d9c6ae3fd3%3A0x6b7361cdfbe5772c!2sTu%C3%A2n%20Poly!5e0!3m2!1svi!2s!4v1642844067947!5m2!1svi!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default StorePage;