import toastr from "toastr";
import AdminProductListPage from ".";
import { getAll } from "../../../api/category";
import { get, update } from "../../../api/product";
import HeaderTop from "../../../components/admin/headerTop";
import AdminNav from "../../../components/admin/nav";
import { reRender, uploadFile } from "../../../utils";

const AdminEditProductPage = {
    async render(id) {
        const { data: cateList } = await getAll();
        const { data: productDetail } = await get(id);

        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render("product")}
            
            <div class="ml-0 transition md:ml-60">
                <header class="left-0 md:left-60 fixed right-0 top-0">
                    ${HeaderTop.render()}

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                            Product
                            </h5>
                            <span>Cập nhật sản phẩm</span>
                        </div>

                        <a href="/#/admin/product">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                DS sản phẩm
                            </button>
                        </a>
                    </div>
                </header>
                <div class="p-6 mt-24">
                    <form action="" id="form__edit-product" method="POST" data-id="${productDetail.id}">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <span class="font-semibold mb-4 block text-xl">Thông tin chi tiết sản phẩm:</span>

                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label for="form__edit-product-name" class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                        <input type="text" name="form__edit-product-name" id="form__edit-product-name" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên sản phẩm" value="${productDetail.name}">
                                        <div class="form__edit-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="form__edit-product-price" class="block text-sm font-medium text-gray-700">Giá sản phẩm</label>
                                        <input type="number" name="form__edit-product-price" id="form__edit-product-price" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập giá sản phẩm" value="${productDetail.price}">
                                        <div class="form__edit-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>
        
                                    <div class="col-span-6">
                                        <label for="form__edit-product-description" class="block text-sm font-medium text-gray-700">Mô tả</label>
                                        <textarea id="form__edit-product-description" name="form__edit-product-description" rows="3" class="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập mô tả sản phẩm">${productDetail.description}</textarea>
                                        <div class="form__edit-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>
        
                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__edit-product-cate" class="block text-sm font-medium text-gray-700">Danh mục sản phẩm</label>
                                        <select id="form__edit-product-cate" name="form__edit-product-cate" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn danh mục sản phẩm --</option>
                                            ${cateList.map((cate) => `
                                                <option value="${cate.id}" ${cate.id === productDetail.cate_id ? "selected" : ""}>${cate.name}</option>
                                                `)}
                                        </select>
                                        <div class="form__edit-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>
        
                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__edit-product-stt" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                                        <select id="form__edit-product-stt" name="form__edit-product-stt" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn trạng thái sản phẩm --</option>
                                            <option value="0" ${!productDetail.status ? "selected" : ""}>Ẩn</option>
                                            <option value="1" ${productDetail.status ? "selected" : ""}>Hiển thị</option>
                                        </select>
                                        <div class="form__edit-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-3">
                                        <label class="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                        <div class="mt-1">
                                            <img src="${productDetail.image}" alt="Preview Image" id="form__edit-product-preview" class="h-60 w-full object-cover rounded-md">
                                        </div>
                                    </div>

                                    <div class="col-span-6">
                                        <label class="block text-sm font-medium text-gray-700">Ảnh sản phẩm</label>
                                        <div class="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="form__edit-product-image" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="form__edit-product-image" name="form__edit-product-image" type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                        <div class="form__edit-cate-error-img text-sm mt-0.5 text-red-500"></div>
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
        const formAddProduct = document.querySelector("#form__edit-product");
        const proName = formAddProduct.querySelector("#form__edit-product-name");
        const proPrice = formAddProduct.querySelector("#form__edit-product-price");
        const proDesc = formAddProduct.querySelector("#form__edit-product-description");
        const proCate = formAddProduct.querySelector("#form__edit-product-cate");
        const proStt = formAddProduct.querySelector("#form__edit-product-stt");
        const proImage = formAddProduct.querySelector("#form__edit-product-image");
        const proPreview = formAddProduct.querySelector("#form__edit-product-preview");

        // validate
        const validate = () => {
            let isValid = true;

            if (!proName.value) {
                proName.nextElementSibling.innerText = "Vui lòng nhập tên sản phẩm";
                isValid = false;
            } else {
                proName.nextElementSibling.innerText = "";
            }

            if (!proPrice.value) {
                proPrice.nextElementSibling.innerText = "Vui lòng nhập giá sản phẩm";
                isValid = false;
            } else {
                proPrice.nextElementSibling.innerText = "";
            }

            if (!proDesc.value) {
                proDesc.nextElementSibling.innerText = "Vui lòng nhập mô tả sản phẩm";
                isValid = false;
            } else {
                proDesc.nextElementSibling.innerText = "";
            }

            if (!proCate.value) {
                proCate.nextElementSibling.innerText = "Vui lòng chọn loại sản phẩm";
                isValid = false;
            } else {
                proCate.nextElementSibling.innerText = "";
            }

            if (!proStt.value) {
                proStt.nextElementSibling.innerText = "Vui lòng chọn trạng thái sản phẩm";
                isValid = false;
            } else {
                proStt.nextElementSibling.innerText = "";
            }

            return isValid;
        };

        // bắt sự kiện submit form
        formAddProduct.addEventListener("submit", async (e) => {
            e.preventDefault();

            const { id } = e.target.dataset;
            const isValid = validate();

            if (isValid) {
                const date = new Date();
                let productData = {
                    name: proName.value,
                    price: +proPrice.value,
                    description: proDesc.value,
                    cate_id: +proCate.value,
                    status: +proStt.value,
                    updatedAt: date.toISOString(),
                };

                if (proImage.files.length) {
                    const response = await uploadFile(proImage.files[0]);

                    productData = {
                        name: proName.value,
                        image: response.data.url,
                        price: +proPrice.value,
                        description: proDesc.value,
                        cate_id: +proCate.value,
                        status: +proStt.value,
                        updatedAt: date.toISOString(),
                    };
                }

                update(id, productData)
                    .then(() => toastr.success("Cập nhật thành công"))
                    .then(() => { window.location.href = "/#/admin/product"; })
                    .then(() => reRender(AdminProductListPage, "#app"));
            }
        });

        // preview iamge
        proImage.addEventListener("change", () => {
            proPreview.src = URL.createObjectURL(proImage.files[0]);
        });
    },
};

export default AdminEditProductPage;