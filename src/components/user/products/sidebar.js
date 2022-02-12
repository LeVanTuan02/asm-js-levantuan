import { getAll } from "../../../api/category";

const Sidebar = {
    async render() {
        const { data: cateList } = await getAll();

        return `
        <aside class="hidden lg:block lg:col-span-3 pt-3">
            <div>
                <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Danh mục sản phẩm</h2>

                <ul class="grid grid-cols-1 divide-y mt-3">
                    ${cateList.map((item) => `
                        <li>
                            <a href="" class="block uppercase py-2 text-[#D9A953] transition duration-300 ease-linear hover:text-black">${item.name}</a>
                        </li>
                        `).join("")}
                </ul>
            </div>

            <div class="mt-3">
                <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Lọc theo giá</h2>

            </div>

            <div class="mt-5">
                <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Sản phẩm đánh giá cao</h2>

                <ul class="grid grid-cols-1 divide-y mt-2">
                    <li class="py-3 flex">
                        <a href="" class="block bg-[#f7f7f7]">
                            <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                        </a>

                        <div class="ml-3 flex-1">
                            <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                            <span class="font-semibold">25,000 ₫</span>
                        </div>
                    </li>
                    <li class="py-3 flex">
                        <a href="" class="block bg-[#f7f7f7]">
                            <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                        </a>

                        <div class="ml-3 flex-1">
                            <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                            <span class="font-semibold">25,000 ₫</span>
                        </div>
                    </li>
                    <li class="py-3 flex">
                        <a href="" class="block bg-[#f7f7f7]">
                            <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                        </a>

                        <div class="ml-3 flex-1">
                            <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                            <span class="font-semibold">25,000 ₫</span>
                        </div>
                    </li>
                    <li class="py-3 flex">
                        <a href="" class="block bg-[#f7f7f7]">
                            <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                        </a>

                        <div class="ml-3 flex-1">
                            <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                            <span class="font-semibold">25,000 ₫</span>
                        </div>
                    </li>
                    <li class="py-3 flex">
                        <a href="" class="block bg-[#f7f7f7]">
                            <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                        </a>

                        <div class="ml-3 flex-1">
                            <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                            <span class="font-semibold">25,000 ₫</span>
                        </div>
                    </li>
                    <li class="py-3 flex">
                        <a href="" class="block bg-[#f7f7f7]">
                            <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                        </a>

                        <div class="ml-3 flex-1">
                            <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                            <span class="font-semibold">25,000 ₫</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
        `;
    },
};

export default Sidebar;