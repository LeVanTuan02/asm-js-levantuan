const Nav = {
    render() {
        return `
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
        `;
    },
};

export default Nav;