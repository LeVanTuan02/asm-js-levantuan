import { renderFilterProduct } from "../../../api/product";

const FilterProduct = {
    render(totalProduct, start, limit) {
        return /* html */`
        <div class="border-b pb-2 flex justify-between items-center">
            <div class="flex items-center">
                <ul class="flex">
                    <li data-view="grid" class="filter__btn-view active text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                        <i class="fas fa-th"></i>
                    </li>
                    <li data-view="list" class="filter__btn-view text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                        <i class="fas fa-th-list"></i>
                    </li>
                </ul>

                <span>Hiển thị ${(start + 1) > 0 ? (start + 1) : 0} - ${(start + limit) < totalProduct ? (start + limit) : totalProduct} trong ${totalProduct} kết quả</span>
            </div>

            <form action="" class="flex items-center">
                <label for="filter-sort">Sắp xếp theo</label>

                <select id="filter-sort" class="ml-2 flex-1 shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-9 text-sm outline-none">
                    <option value="">Mặc định</option>
                    <option value="createdAt-desc">Thứ tự theo ngày tạo: mới nhất</option>
                    <option value="createdAt-asc">Thứ tự theo ngày tạo: cũ nhất</option>
                    <option value="favorites-asc">Lượt yêu thích: thấp -> cao</option>
                    <option value="favorites-desc">Lượt yêu thích: cao -> thấp</option>
                    <option value="view-asc">Lượt xem: thấp -> cao</option>
                    <option value="view-desc">Lượt xem: cao -> thấp</option>
                    <option value="price-asc">Thứ tự theo giá: thấp -> cao</option>
                    <option value="price-desc">Thứ tự theo giá: cao -> thấp</option>
                </select>
            </form>
        </div>
        `;
    },
    afterRender() {
        const productsElement = document.querySelector("#product-list");

        // lấy ds id sp
        const listProduct = document.querySelectorAll(".product-item");
        const listId = Array.from(listProduct).map((item) => {
            const { id } = item.dataset;
            return +id;
        });

        // bắt sự kiện thay đổi bộ lọc sp
        const filterElement = document.querySelector("#filter-sort");
        filterElement.addEventListener("change", async (e) => {
            // lọc theo
            const sort = e.target.value;

            // kiểu hiển thị
            const viewActive = document.querySelector(".filter__btn-view.active");
            const { view } = viewActive.dataset;

            // render ra màn hình
            const html = await renderFilterProduct(view, sort, listId);
            productsElement.innerHTML = html;
        });

        // đổi kiểu hiển thị sp
        const btnsView = document.querySelectorAll(".filter__btn-view");
        btnsView.forEach((btn) => {
            const { view: typeView } = btn.dataset;

            btn.addEventListener("click", async () => {
                document.querySelector(".filter__btn-view.active").classList.remove("active");
                btn.classList.add("active");

                // lọc theo
                const sortBy = filterElement.value;

                // render ra màn hình
                const html = await renderFilterProduct(typeView, sortBy, listId);
                productsElement.innerHTML = html;
            });
        });
    },
};

export default FilterProduct;