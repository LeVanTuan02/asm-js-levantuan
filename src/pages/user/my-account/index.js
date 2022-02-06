import Header from "../../../components/user/header";
import Footer from "../../../components/user/footer";
import MyAccNav from "../../../components/user/myAccNav";

const UpdateInfoPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="py-7 bg-gray-100 border-b">
                <div class="container max-w-6xl mx-auto px-3 text-gray-500">
                    <h1 class="uppercase font-semibold text-2xl">My account</h1>
                    <p class="text-sm mt-1">THÔNG TIN TÀI KHOẢN</p>
                </div>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-5 my-8">
                ${MyAccNav.render()}
                
                <div class="col-span-12 lg:col-span-9">
                    <h2 class="uppercase text-lg font-semibold text-gray-600 pb-1 border-b">Cập nhật thông tin tài khoản</h2>

                    <form action="" class="mt-4">
                        <div class="grid grid-cols-12 gap-3">
                            <div class="col-span-12 md:col-span-6">
                                <label for="" class="mb-1 block font-semibold">Họ tên *</label>
                                <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ tên">
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <label for="" class="mb-1 block font-semibold">Số điện thoại *</label>
                                <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ tên">
                            </div>
                            <div class="col-span-12">
                                <label for="" class="mb-1 block font-semibold">Ảnh đại diện *</label>
                                <input type="file" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 py-1 text-sm outline-none">
                            </div>
                            
                            <div class="col-span-12">
                                <label for="" class="mb-1 block font-semibold">Xem trước ảnh đại diện</label>
                                <div>
                                    <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" class="w-40 h-40 object-cover rounded-md" alt="">
                                </div>
                            </div>

                            <div class="col-span-12 mb-3">
                                <label for="" class="font-semibold mb-1 block">Email *</label>
                                <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none">
                            </div>
                            <div class="col-span-12 md:col-span-4 mb-3 relative">
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
                            <div class="col-span-12 md:col-span-4 mb-3 relative">
                                <label for="" class="font-semibold mb-1 block">Quận/Huyện *</label>
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
                            <div class="col-span-12 md:col-span-4 mb-3 relative">
                                <label for="" class="font-semibold mb-1 block">Xã/Phường *</label>
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
                            <div class="col-span-12 mb-3">
                                <label for="" class="font-semibold mb-1 block">Địa chỉ cụ thể *</label>
                                <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none">
                            </div>
                        </div>

                        <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Cập nhật</button>
                    </form>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default UpdateInfoPage;