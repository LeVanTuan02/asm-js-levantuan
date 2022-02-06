import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const RegisterPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3">
                <h1 class="uppercase mt-8 font-semibold text-2xl text-gray-600">Đăng ký</h1>

                <form action="" class="mb-14">
                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Tên tài khoản *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: demo...">
                    </div>

                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Họ và tên *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: Lê Văn Tuân...">
                    </div>

                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Email *</label>
                        <input type="email" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: user@gmail.com...">
                    </div>

                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Số điện thoại *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: 0347526xxx...">
                    </div>

                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Mật khẩu *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Mật khẩu">
                    </div>

                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Xác nhận mật khẩu *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập lại mật khẩu">
                    </div>

                    <button class="select-none mt-8 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đăng ký</button>

                    <p>
                        Đã có tài khoản?
                        <a href="">Đăng nhập ngay</a>
                    </p>
                </form>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default RegisterPage;