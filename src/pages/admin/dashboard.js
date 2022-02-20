import HeaderTop from "../../components/admin/headerTop";
import AdminNav from "../../components/admin/nav";

const DashboardPage = {
    getTitle() {
        return "Dashboard | Administrator";
    },
    render() {
        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render("dashboard")}

            <div class="ml-0 transition md:ml-60">
                <header>
                    ${HeaderTop.render()}

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
        HeaderTop.afterRender();
        AdminNav.afterRender();
    },
};

export default DashboardPage;