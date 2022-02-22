import Swal from "sweetalert2";
import $ from "jquery";
import { getAll, remove, search } from "../../../api/news";
import HeaderTop from "../../../components/admin/headerTop";
import AdminNav from "../../../components/admin/nav";
import AdminNewsList from "../../../components/admin/newsList";
import Pagination from "../../../components/admin/pagination";
import { formatDate, reRender } from "../../../utils";

const AdminNewsListPage = {
    getTitle() {
        return "News List | Administrator";
    },
    async render(pageNumber) {
        const { data } = await getAll();
        const total = data.length; // tổng số bài viết
        const limit = 8;
        const currentPage = pageNumber ?? 1; // lấy số trang hiện tại

        // ds theo limit
        const { data: newsList } = await getAll(currentPage, limit);

        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render("news")}
            
            <div class="ml-0 transition md:ml-60">
                <header class="left-0 md:left-60 fixed right-0 top-0">
                    ${HeaderTop.render()}

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                            News
                            </h5>
                            <span>DS bài viết</span>
                        </div>

                        <a href="/#/admin/news/add">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm bài viết
                            </button>
                        </a>
                    </div>
                </header>

                <div class="p-6 mt-24 overflow-hidden">
                    <!-- search -->
                    <form action="" class="flex rounded-md shadow-sm mb-5" method="POST" id="news__search-form">
                        <input type="text" name="company-website" id="news__search-form-key" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 px-4 py-2 border outline-none" placeholder="Nhập tiêu đề bài viết...">
                        <select class="border-gray-300 border outline-none px-2 text-sm" id="news__search-form-stt">
                            <option value="">-- Trạng thái --</option>
                            <option value="1">Hiển thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                        <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer hover:bg-gray-200">
                            <i class="fas fa-search"></i>
                        </span>
                    </form>

                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                ${await AdminNewsList.render(newsList)}

                                <!-- pagination -->
                                ${Pagination.render(total, limit, +currentPage, "news")}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                
            </div>
            <div class="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay"></div>
        </section>
        `;
    },
    afterRender() {
        HeaderTop.afterRender();
        AdminNav.afterRender();

        const btnsDelete = document.querySelectorAll(".post__list-btn-delete");

        // xóa bài viết
        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const { id } = e.target.dataset;

                Swal.fire({
                    title: "Bạn có chắc chắn muốn xóa không?",
                    text: "Bạn không thể hoàn tác sau khi xóa!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        remove(id)
                            .then(() => {
                                Swal.fire(
                                    "Thành công",
                                    "Đã xóa danh mục.",
                                    "success",
                                );
                            })
                            .then(() => {
                                reRender(AdminNewsListPage, "#app");
                            });
                    }
                });
            });
        });

        // search
        $("#news__search-form").on("input", async () => {
            const key = $("#news__search-form-key").val();
            const stt = $("#news__search-form-stt").val();

            const { data: newsList } = await search(key, stt);

            $("#news__list").html(newsList.map((post) => `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${post.id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <a href="/#/news/${post.id}" class="hover:underline">${post.title}</a>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        ${formatDate(post.createdAt)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}">
                        ${post.status ? "Hiện" : "Ẩn"}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/#/admin/news/${post.id}/edit" class="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</a>
                        <button data-id="${post.id}" class="post__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3">Delete</button>
                    </td>
                </tr>
                `).join(""));

            $("#pagination").hide();
        });
    },
};

export default AdminNewsListPage;