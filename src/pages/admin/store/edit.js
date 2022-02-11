import toastr from "toastr";
import { get, update } from "../../../api/store";
import HeaderTop from "../../../components/admin/headerTop";
import AdminNav from "../../../components/admin/nav";
import { reRender, uploadFile } from "../../../utils";
import AdminStoreListPage from ".";

const AdminEditStorePage = {
    async render(id) {
        const { data: storeDetail } = await get(id);

        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render("store")}
            
            <div class="ml-0 transition md:ml-60">
                <header class="left-0 md:left-60 fixed right-0 top-0">
                    ${HeaderTop.render()}

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                            Store
                            </h5>
                            <span>Update chi nhánh</span>
                        </div>

                        <a href="/#/admin/store">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                DS chi nhánh
                            </button>
                        </a>
                    </div>
                </header>
                <div class="p-6 mt-24">
                    <form action="" method="POST" id="form__edit-store">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <span class="font-semibold mb-4 block text-xl">Thông tin chi tiết chi nhánh:</span>

                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__edit-store-name" class="block text-sm font-medium text-gray-700">Tên chi nhánh</label>
                                        <input type="text" name="form__edit-store-name" id="form__edit-store-name" value="${storeDetail.name}" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên chi nhánh">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__edit-store-phone" class="block text-sm font-medium text-gray-700">Sdt</label>
                                        <input type="text" name="form__edit-store-phone" id="form__edit-store-phone" value="${storeDetail.phone}" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập sdt chi nhánh">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="form__edit-store-address" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                        <input type="text" name="form__edit-store-address" id="form__edit-store-address" value="${storeDetail.address}" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập địa chỉ chi nhánh">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__edit-store-start" class="block text-sm font-medium text-gray-700">Giờ mở cửa</label>
                                        <input type="time" name="form__edit-store-start" id="form__edit-store-start" value="${storeDetail.timeStart}" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__edit-store-end" class="block text-sm font-medium text-gray-700">Giờ đóng cửa</label>
                                        <input type="time" name="form__edit-store-end" id="form__edit-store-end" value="${storeDetail.timeEnd}" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="form__edit-store-map" class="block text-sm font-medium text-gray-700">Iframe Map</label>
                                        <textarea id="form__edit-store-map" name="form__edit-store-map" rows="5" class="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập iframe google map">${storeDetail.map}</textarea>
                                        <div class="form__add-cate-error-title text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-3">
                                        <label class="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                        <div class="mt-1">
                                            <img src="${storeDetail.image}" alt="Preview Img" id="form__edit-store-preview" class="h-60 w-full object-cover rounded-md">
                                        </div>
                                    </div>

                                    <div class="col-span-6">
                                        <label class="block text-sm font-medium text-gray-700">Ảnh cửa hàng</label>
                                        <div class="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="form__edit-store-image" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="form__edit-store-image" name="form__edit-store-image" type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                        <div class="form__edit-store-error-img text-sm mt-0.5 text-red-500"></div>
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
    afterRender(id) {
        const formEdit = document.querySelector("#form__edit-store");
        const storeName = formEdit.querySelector("#form__edit-store-name");
        const storeAdd = formEdit.querySelector("#form__edit-store-address");
        const storePhone = formEdit.querySelector("#form__edit-store-phone");
        const storeTimeStart = formEdit.querySelector("#form__edit-store-start");
        const storeTimeEnd = formEdit.querySelector("#form__edit-store-end");
        const storeMap = formEdit.querySelector("#form__edit-store-map");
        const storeImg = formEdit.querySelector("#form__edit-store-image");
        const preview = formEdit.querySelector("#form__edit-store-preview");

        // validate
        const validate = () => {
            let isValid = true;

            if (!storeName.value) {
                storeName.nextElementSibling.innerText = "Vui lòng nhập tên chi nhánh";
                isValid = false;
            } else {
                storeName.nextElementSibling.innerText = "";
            }

            if (!storeAdd.value) {
                storeAdd.nextElementSibling.innerText = "Vui lòng nhập địa chỉ";
                isValid = false;
            } else {
                storeAdd.nextElementSibling.innerText = "";
            }

            if (!storeTimeStart.value) {
                storeTimeStart.nextElementSibling.innerText = "Vui lòng nhập giờ mở cửa";
                isValid = false;
            } else {
                storeTimeStart.nextElementSibling.innerText = "";
            }

            if (!storeTimeEnd.value) {
                storeTimeEnd.nextElementSibling.innerText = "Vui lòng nhập giờ đóng cửa";
                isValid = false;
            } else if (storeTimeEnd.value <= storeTimeStart.value) {
                storeTimeEnd.nextElementSibling.innerText = "Vui lòng nhập lại thời gian";
                isValid = false;
            } else {
                storeTimeEnd.nextElementSibling.innerText = "";
            }

            if (!storeMap.value) {
                storeMap.nextElementSibling.innerText = "Vui lòng nhập iframe google map";
                isValid = false;
            } else {
                storeMap.nextElementSibling.innerText = "";
            }

            const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            if (!storePhone.value) {
                storePhone.nextElementSibling.innerText = "Vui lòng nhập số điện thoại";
                isValid = false;
            } else if (!regexPhone.test(storePhone.value)) {
                storePhone.nextElementSibling.innerText = "Số điện thoại không đúng định dạng";
                isValid = false;
            } else {
                storePhone.nextElementSibling.innerText = "";
            }

            return isValid;
        };

        // bắt sự kiện submit form
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            const isValid = validate();
            if (isValid) {
                const storeData = {
                    name: storeName.value,
                    address: storeAdd.value,
                    phone: storePhone.value,
                    timeStart: storeTimeStart.value,
                    timeEnd: storeTimeEnd.value,
                    map: storeMap.value,
                };

                if (storeImg.files.length) {
                    const { data } = await uploadFile(storeImg.files[0]);
                    storeData.image = data.url;
                }

                update(id, storeData)
                    .then(() => toastr.success("Cập nhật thành công"))
                    .then(() => { window.location.href = "/#/admin/store"; })
                    .then(() => reRender(AdminStoreListPage, "#app"));
            }
        });

        // bắt sự kiện chọn ảnh => preview
        storeImg.addEventListener("change", (e) => {
            preview.src = URL.createObjectURL(e.target.files[0]);
        });
    },
};

export default AdminEditStorePage;