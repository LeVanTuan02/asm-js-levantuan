import Header from "../../../components/user/header";
import Footer from "../../../components/user/footer";
import MyAccNav from "../../../components/user/myAccNav";

const MyAccUpdatePass = {
    async render() {
        return /* html */ `
        ${await Header.render()}

        <!-- content -->
        <main>
            <section class="py-7 bg-gray-100 border-b">
                <div class="container max-w-6xl mx-auto px-3 text-gray-500">
                    <h1 class="uppercase font-semibold text-2xl">My account</h1>
                    <p class="text-sm mt-1 uppercase">Cập nhật mật khẩu</p>
                </div>
            </section>
            

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-5 my-8">
                ${MyAccNav.render()}

                <div class="col-span-12 lg:col-span-9">
                    <h2 class="uppercase text-lg font-semibold text-gray-600 pb-1 border-b">Đổi mật khẩu</h2>

                    <form action="" class="mt-4">
                        <div class="grid grid-cols-12 gap-3">
                            <div class="col-span-12">
                                <label for="old_pass" class="mb-1 block font-semibold">Mật khẩu cũ *</label>
                                <input type="password" id="old_pass" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ mật khẩu hiện tại">
                            </div>
                            <div class="col-span-12">
                                <label for="new_pass" class="mb-1 block font-semibold">Mật khẩu mới *</label>
                                <input type="password" id="new_pass" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập mật khẩu mới">
                            </div>
                            <div class="col-span-12">
                                <label for="confirm_pass" class="mb-1 block font-semibold">Xác nhận mật khẩu mới *</label>
                                <input type="password" id="confirm_pass" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Xác nhận mật khẩu mới">
                            </div>
                        </div>

                        <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đổi mật khẩu</button>
                    </form>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default MyAccUpdatePass;