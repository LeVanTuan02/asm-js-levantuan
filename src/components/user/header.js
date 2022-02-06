const Header = {
    render() {
        return /* html */ `
        <header>
            <!-- header top -->
            <div class="bg-[#D9A953] hidden md:block">
                <div class="container max-w-6xl px-3 mx-auto flex justify-between items-center h-10">
                    <ul class="flex items-center">
                        <li class="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:right-3 after:top-1/2 after:-translate-y-1/2 text-sm uppercase pr-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <a href="">
                                <i class="far fa-envelope"></i>
                                <span class="pl-1">Contact</span>
                            </a>
                        </li>
                        <li class="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:right-3 after:top-1/2 after:-translate-y-1/2 text-sm uppercase pr-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <i class="far fa-clock"></i>
                            <span class="pl-1">08:00 - 17:00</span>
                        </li>
                        <li class="text-sm uppercase text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <a href="">
                                <i class="fas fa-phone-alt"></i>
                                <span class="pl-1">0347 247 244</span>
                            </a>
                        </li>
                    </ul>

                    <ul class="flex items-center">
                        <li class="group relative uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <button class="rounded-full border border-gray-50 w-7 h-7">
                                <i class="fas fa-search"></i>
                            </button>

                            <div class="hidden group-hover:block absolute top-full -right-[100px] bg-white shadow p-3 opacity-100">
                                <form action="" class="flex">
                                    <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] min-w-[80px] border px-2 h-8 text-sm outline-none" placeholder="Nhập tên đăng nhập hoặc email">
                                    <button class="px-3 bg-red-500 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </form>

                                <ul class="mt-3 grid grid-cols-1 divide-y max-h-[70vh] overflow-y-auto">
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" class="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]" alt="">
                                            <p class="ml-1 normal-case font-normal">Trà sữa</p>
                                            <p class="font-medium ml-auto">20,000</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <a href="/login">Đăng nhập</a>
                        </li>
                        <li class="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <a href="/register">Đăng ký</a>
                        </li>
                        <li class="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-base cursor-pointer pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <div class="relative">
                                <label for="" class="absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                <i class="fas fa-heart"></i>
                            </div>
                        </li>
                        <li class="uppercase text-base pl-4 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <a href="/cart" class="relative">
                                <label for="" class="absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end header top -->

            <!-- header bottom -->
            <div class="container max-w-6xl mx-auto px-3">
                <div class="flex h-24 items-center border-b">
                    <!-- icon mobile -->
                    <div class="flex-1 md:hidden">
                        <button class="pr-3 py-3 text-lg transition duration-200 ease-linear text-gray-400 hover:text-black">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>

                    <ul class="flex-1 items-center hidden md:flex">
                        <li class="pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                            <a href="/">Trang chủ</a>
                        </li>
                        <li class="pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                            <a href="/intro">Giới thiệu</a>
                        </li>
                        <li class="relative pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black group">
                            <a href="/products" class="flex items-center">
                                Sản phẩm
                                <div class="pl-1 -mt-1">
                                    <i class="fas fa-sort-down"></i>
                                </div>

                            </a>
                            <ul class="invisible group-hover:visible absolute top-full left-0 bg-white shadow min-w-[150px] grid grid-cols-1 divide-y px-2 rounded-sm">
                                <li>
                                    <a href="" class="block py-1.5 text-gray-500 transition ease-linear duration-200 hover:text-[#D9A953]">Trà</a>
                                </li>
                                <li>
                                    <a href="" class="block py-1.5 text-gray-500 transition ease-linear duration-200 hover:text-[#D9A953]">Trà</a>
                                </li>
                                <li>
                                    <a href="" class="block py-1.5 text-gray-500 transition ease-linear duration-200 hover:text-[#D9A953]">Trà</a>
                                </li>
                                <li>
                                    <a href="" class="block py-1.5 text-gray-500 transition ease-linear duration-200 hover:text-[#D9A953]">Trà</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="h-full">
                        <a href="" class="block h-full py-2">
                            <img class="block h-full" src="https://res.cloudinary.com/levantuan/image/upload/v1642588847/fpoly/asm-js/logo_oeo8uq.png" alt="">
                        </a>
                    </div>

                    <ul class="flex-1 justify-end hidden md:flex">
                        <li class="pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                            <a href="/news">Tin tức</a>
                        </li>
                        <li class="pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                            <a href="/contact">Liên hệ</a>
                        </li>
                        <li class="pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                            <a href="/store">Cửa hàng</a>
                        </li>
                    </ul>

                    <!-- icon mobile -->
                    <ul class="flex flex-1 justify-end md:hidden">
                        <li class="uppercase text-base cursor-pointer pl-6 text-gray-600 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <div class="relative">
                                <label for="" class="text-white absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                <i class="fas fa-heart"></i>
                            </div>
                        </li>
                        <li class="uppercase text-base pl-4 text-gray-600 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                            <a href="" class="relative">
                                <label for="" class="text-white absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end header bottom -->

            <!-- nav on mobile -->
            <section class="hidden">
                <!-- overlay -->
                <div class="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)]"></div>

                <nav class="fixed top-0 left-0 bottom-0 min-w-[260px] bg-[rgba(255,255,255,0.95)] shadow py-10">
                    <form action="" class="flex px-3">
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] min-w-[80px] border px-2 h-8 text-sm outline-none" placeholder="Nhập tên đăng nhập hoặc email">
                        <button class="px-3 text-white bg-red-500 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                    <ul class="grid grid-cols-1 divide-y mt-5">
                        <li>
                            <a href="" class="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Trang chủ</a>
                        </li>
                        <li>
                            <a href="" class="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Trang chủ</a>
                        </li>
                        <li>
                            <a href="" class="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Trang chủ</a>
                        </li>
                        <li>
                            <a href="" class="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Trang chủ</a>
                        </li>
                        <li>
                            <a href="" class="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Trang chủ</a>
                        </li>
                    </ul>
                </nav>

                <button class="fixed top-3 right-3 text-3xl text-gray-300 transition duration-200 ease-linear hover:text-white">
                    <i class="fas fa-times"></i>
                </button>
            </section>
            <!-- nav on mobile -->
        </header>
        `;
    },
};

export default Header;