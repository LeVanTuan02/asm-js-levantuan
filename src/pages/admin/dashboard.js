const DashboardPage = {
    render() {
        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            <nav class="dashboard__sidebar fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0 -translate-x-full">
                <a href="/" class="flex items-center p-4 text-white font-bold text-3xl">Yotea</a>
                <nav class="text-sm font-medium text-gray-500" aria-label="Main Navigation">
                    <a href="" class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                        <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path d="M10.707 2.293a1 1 0 00-1.414.0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span>Dashboard</span>
                    </a>
                    <a class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200" href="#">
                        <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path d="M5 3a1 1 0 000 2c5.523.0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                            <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5A1 1 0 014 9zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
                        </svg>
                        <span>Articles</span>
                    </a>
                    <a class="flex items-center px-4 py-3 text-gray-200 transition bg-gray-800 cursor-pointer group hover:bg-gray-800 hover:text-gray-200" href="#">
                        <svg class="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5A1 1 0 014 7zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                        </svg>
                        <span>Collections</span>
                    </a>
                    <a class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200" href="#">
                        <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414.0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Checklists</span>
                    </a>
                    <div>
                        <div class="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                            <div class="flex items-center">
                                <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414.0zm8.586.0a1 1 0 011.414.0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Integrations</span>
                            </div>
                            <svg class="shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="mb-4">
                            <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="#">Shopify</a>
                            <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="#">Slack</a>
                            <a class="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" href="#">Zapier</a>
                        </div>
                    </div>
                    <a class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200" href="#">
                        <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9A1 1 0 109 9v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5A1 1 0 108 6h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path>
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zm2 7h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
                        <span>Changelog</span>
                    </a>
                    <a class="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200" href="#">
                        <svg class="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98.0a1.532 1.532.0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6.0 2.978a1.532 1.532.0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532.0 012.287.947c.379 1.561 2.6 1.561 2.978.0a1.533 1.533.0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533.0 01.947-2.287c1.561-.379 1.561-2.6.0-2.978a1.532 1.532.0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532.0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Settings</span>
                    </a>
                </nav>
            </nav>
            <div class="ml-0 transition md:ml-60">
                <header>
                    <div class="bg-white border-b h-14 px-4 flex justify-between items-center">
                        <button id="btn-bars" class="md:hidden px-3 py-1 bg-gray-50 rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-600 transition ease-linear duration-200">
                            <i class="fas fa-bars"></i>
                        </button>

                        <form class="hidden md:flex items-center border-2 border-indigo-500 rounded-full px-2.5">
                            <div class="text-gray-400">
                                <i class="fas fa-search"></i>
                            </div>
                            <input type="text" placeholder="Search" class="px-2 py-1 outline-none rounded-full">
                        </form>

                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">View notifications</span>
                                <svg class="h-5 w-5" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </button>

                            <!-- Profile dropdown -->
                            <div class="ml-3 relative group">
                                <div>
                                    <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" x-ref="button" @click="onButtonClick()" @keyup.space.prevent="onButtonEnter()" @keydown.enter.prevent="onButtonEnter()" aria-expanded="false" aria-haspopup="true" x-bind:aria-expanded="open.toString()" @keydown.arrow-up.prevent="onArrowUp()" @keydown.arrow-down.prevent="onArrowDown()">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                                    </button>
                                </div>
                                
                                <div class="hidden group-hover:block absolute right-0 top-[calc(100%+10px)] w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none before:content-[''] before:absolute before:top-[-10px] before:right-0 before:left-0 before:h-4">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">Dashboard</h5>
                            <span>Thêm mới</span>
                        </div>

                        <a href="">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm mới
                            </button>
                        </a>
                    </div>
                </header>
                <div class="p-6">
                    <h1 class="font-bold text-2xl">Dashboard</h1>
                </div>
            </div>
            <div class="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay"></div>
        </section>
        `;
    },
    afterRender() {
        const btnBars = document.querySelector("#btn-bars");
        const dashboardElement = document.querySelector(".dashboard");
        const dashboardOverlay = document.querySelector(".dashboard__overlay");

        // đóng mở sidebar
        function toggleSidebar() {
            dashboardElement.classList.toggle("active");
        }
        btnBars.addEventListener("click", () => toggleSidebar());
        dashboardOverlay.addEventListener("click", () => toggleSidebar());
    },
};

export default DashboardPage;