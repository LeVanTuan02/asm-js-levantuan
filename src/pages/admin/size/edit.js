import toastr from "toastr";
import AdminSizeListPage from ".";
import { get, update } from "../../../api/size";
import HeaderTop from "../../../components/admin/headerTop";
import AdminNav from "../../../components/admin/nav";
import { reRender } from "../../../utils";

const AdminEditSizePage = {
    async render(id) {
        const { data: sizeDetail } = await get(id);

        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render("size")}
            
            <div class="ml-0 transition md:ml-60">
                <header class="left-0 md:left-60 fixed right-0 top-0">
                    ${HeaderTop.render()}

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                            Size
                            </h5>
                            <span>Cập nhật size</span>
                        </div>

                        <a href="/#/admin/size">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                DS size
                            </button>
                        </a>
                    </div>
                </header>
                <div class="p-6 mt-24">
                    <form action="" method="POST" id="form__edit-size" data-id="${sizeDetail.id}">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <span class="font-semibold mb-4 block text-xl">Thông tin chi tiết size:</span>

                                <div class="grid grid-cols-6 gap-3">
                                    <div class="col-span-6">
                                        <label for="form__edit-size-name" class="block text-sm font-medium text-gray-700">Tên size</label>
                                        <input type="text" name="form__edit-size-name" id="form__edit-size-name" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên size" value="${sizeDetail.name}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="form__edit-size-price" class="block text-sm font-medium text-gray-700">Giá thêm</label>
                                        <input type="number" name="form__edit-size-price" id="form__edit-size-price" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập giá thêm của size" value="${sizeDetail.priceIncrease}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Lưu thay đổi
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay"></div>
        </section>
        `;
    },
    afterRender() {
        const formEdit = document.querySelector("#form__edit-size");
        const sizeName = formEdit.querySelector("#form__edit-size-name");
        const priceIncrease = formEdit.querySelector("#form__edit-size-price");

        // validate
        function validate() {
            let isValid = true;

            if (!sizeName.value) {
                sizeName.nextElementSibling.innerText = "Vui lòng nhập tên size";
                isValid = false;
            } else {
                sizeName.nextElementSibling.innerText = "";
            }

            if (!priceIncrease.value) {
                priceIncrease.nextElementSibling.innerText = "Vui lòng nhập giá thêm";
                isValid = false;
            } else {
                priceIncrease.nextElementSibling.innerText = "";
            }

            return isValid;
        }

        // bắt sự kiện submit form
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const { id } = e.target.dataset;
            const isValid = validate();
            const date = new Date();

            if (isValid) {
                const cateData = {
                    name: sizeName.value.toUpperCase(),
                    priceIncrease: +priceIncrease.value,
                    updatedAt: date.toISOString(),
                };

                update(id, cateData)
                    .then(() => toastr.success("Cập nhật thành công"))
                    .then(() => { window.location.href = "/#/admin/size"; })
                    .then(() => reRender(AdminSizeListPage, "#app"));
            }
        });
    },
};

export default AdminEditSizePage;