const MyAccNav = {
    render() {
        return /* html */ `
        <aside class="hidden lg:block lg:col-span-3 border-r">
            <header class="flex items-center">
                <img src="https://res.cloudinary.com/levantuan/image/upload/v1643019137/fpoly/asm-js/SonTung_-_MTP_m9lxgi.jpg" class="w-20 h-20 object-cover rounded-full" alt="">

                <div class="pl-3 text-gray-400 font-semibold leading-5">
                    <span class="block text-gray-600">Admin Tea House</span>
                    <span>Admin</span>
                </div>
            </header>

            <ul class="mt-2 grid grid-cols-1 divide-y">
                <li>
                    <a href="/my-account" class="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Thông tin tài khoản</a>
                </li>
                <li>
                    <a href="/my-account/update-pass" class="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Đổi mật khẩu</a>
                </li>
                <li>
                    <a href="/my-account/cart" class="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Đơn hàng</a>
                </li>
                <li>
                    <a href="" class="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Đăng xuất</a>
                </li>
            </ul>
        </aside>
        `;
    },
};

export default MyAccNav;