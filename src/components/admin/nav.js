const AdminNav = {
    render(pageName) {
        return /* html */ `
        <nav class="dashboard__sidebar fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0 -translate-x-full">
            <a href="/" class="flex items-center p-4 text-white font-bold text-3xl">Yotea</a>
            <nav class="text-sm font-medium text-gray-500" aria-label="Main Navigation">
                <a href="/#/admin/dashboard" class="${pageName === "dashboard" ? "text-gray-200 bg-gray-800" : ""} flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                    <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                        <path d="M10.707 2.293a1 1 0 00-1.414.0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    <span>Dashboard</span>
                </a>

                <div>
                    <div class="sidebar__item ${pageName === "news" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-newspaper"></i>
                            </div>
                            <a href="/#/admin/news">News</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/admin/news">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/admin/news/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "categoryNews" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-th-list"></i>
                            </div>
                            <a href="/#/admin/category-news">Categories News</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/category">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/category/add">Thêm mới</a>
                    </div>
                </div>
                
                <div>
                    <div class="sidebar__item ${pageName === "product" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fab fa-product-hunt"></i>
                            </div>
                            <a href="/#/admin/product">Products</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/product">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/product/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "category" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-th-list"></i>
                            </div>
                            <a href="/#/admin/category">Categories Products</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/category">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/category/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "slider" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-sliders-h"></i>
                            </div>
                            <a href="/#/admin/slider">Slider</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/slider">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/slider/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "size" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-th-list"></i>
                            </div>
                            <a href="/#/admin/size">Size</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/size">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/size/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "topping" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-th-list"></i>
                            </div>
                            <a href="/#/admin/topping">Toppings</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/topping">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/topping/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "voucher" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-code"></i>
                            </div>
                            <a href="/#/admin/voucher">Voucher</a>
                        </div>
                        <svg class="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mb-4 hidden sidebar__submenu">
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/voucher">Danh sách</a>
                        <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="/#/admin/voucher/add">Thêm mới</a>
                    </div>
                </div>

                <div>
                    <div class="sidebar__item ${pageName === "contact" ? "text-gray-200 bg-gray-800" : ""} flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <div class="flex items-center">
                            <div class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <i class="fas fa-comment"></i>
                            </div>
                            <a href="/#/admin/contact">Contact</a>
                        </div>
                    </div>
                </div>

                <a class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200" href="#">
                    <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98.0a1.532 1.532.0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6.0 2.978a1.532 1.532.0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532.0 012.287.947c.379 1.561 2.6 1.561 2.978.0a1.533 1.533.0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533.0 01.947-2.287c1.561-.379 1.561-2.6.0-2.978a1.532 1.532.0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532.0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Settings</span>
                </a>
            </nav>
        </nav>
        `;
    },
};

export default AdminNav;