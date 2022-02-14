import { formatCurrency } from "../utils";
import instance from "./config";

const TABLE_NAME = "products";

export const getAll = () => {
    const url = `/${TABLE_NAME}`;
    return instance.get(url);
};

// ds sp trạng thái hiển thị
export const getAllJoinCategory = (start, limit = 0) => {
    let url = `/${TABLE_NAME}/?_expand=category&status_ne=0&_sort=id&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};

// tìm kiếm
export const search = (keyword, start, limit = 0) => {
    let url = `/${TABLE_NAME}/?q=${keyword}&status_ne=0&_expand=category`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};

// bài viết liên quan
export const getRelated = (id, cateId) => {
    const url = `/${TABLE_NAME}/?status_ne=0&id_ne=${id}&categoryId=${cateId}&_expand=category`;
    return instance.get(url);
};

export const updateView = (id, data) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.patch(url, data);
};

export const get = (id) => {
    const url = `/${TABLE_NAME}/${id}/?_expand=category`;
    return instance.get(url);
};

export const add = (data) => {
    const url = `/${TABLE_NAME}`;
    return instance.post(url, data);
};

export const remove = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.delete(url);
};

export const update = (id, data) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.patch(url, data);
};

// sản phẩm yêu thích
export const getFavorites = () => {
    const url = `/${TABLE_NAME}/?_sort=favorites&_order=desc&_start=0&_limit=10&status_ne=0`;
    return instance.get(url);
};

export const filterProduct = (queryString) => {
    const url = `/${TABLE_NAME}/${queryString}`;
    return instance.get(url);
};

// lọc sp
export const renderFilterProduct = async (typeView, sort, listId) => {
    let queryString = "";
    listId.forEach((id, index) => {
        if (index === 0) {
            queryString += `?id=${id}`;
        } else {
            queryString += `&id=${id}`;
        }
    });

    if (sort) {
        const sortArr = sort.split("-");
        queryString += `&_sort=${sortArr[0]}&_order=${sortArr[1]}`;
    } else {
        queryString += "&_sort=id&_order=desc";
    }

    const { data } = await filterProduct(queryString);

    let html = "";
    if (typeView === "grid") {
        html = `<div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">`;
        data.forEach((item) => {
            html += `
            <div class="group product-item" data-id="${item.id}">
                <div class="relative bg-[#f7f7f7] overflow-hidden">
                    <a href="/#/product/${item.id}" style="background-image: url(${item.image})" class="bg-cover pt-[100%] bg-center block"></a>
                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                    <button data-id="${item.id}" class="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>

                <div class="text-center py-3">
                    <p class="uppercase text-xs text-gray-400">${item.category.name}</p>
                    <a href="/#/product/${item.id}" class="block font-semibold text-lg">${item.name}</a>
                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </ul>
                    <div class="text-sm pt-1">
                        ${formatCurrency(item.price)}
                    </div>
                </div>
            </div>
            `;
        });
        html += "</div>";
    } else if (typeView === "list") {
        html = `<div class="grid grid-cols-1 divide-y">`;

        data.forEach((item) => {
            html += /* html */`
            <div class="grid grid-cols-12 py-4 gap-3 product-item" data-id="${item.id}">
                <div class="col-span-3 relative group overflow-hidden">
                    <a href="/#/product/${item.id}" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url(${item.image})"></a>
                    <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                    <button data-id="${item.id}" class="btn-heart opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>

                <div class="col-span-9">
                    <h3>
                        <a href="/#/product/${item.id}" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">${item.name}</a>
                    </h3>
                    <ul class="flex items-center mt-4">
                        <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </li>
                        <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                        <li>10 Đã bán</li>
                    </ul>
                    <div class="mt-1 mb-2">
                        <span class="text-xl text-[#D9A953] font-semibold">${formatCurrency(item.price)}</span>
                    </div>
                    <p>
                        ${item.description}
                    </p>
                    <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                </div>
            </div>
            `;
        });

        html += "</div>";
    }

    return html;
};

// sp theo danh mục
export const getProductByCate = (cateId, start, limit = 0) => {
    let url = `/${TABLE_NAME}/?categoryId=${cateId}&status_ne=0`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};