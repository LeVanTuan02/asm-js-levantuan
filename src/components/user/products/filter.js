import toastr from "toastr";
import { add, checkHeart } from "../../../api/favoritesProduct";
import { get, renderFilterProduct, update } from "../../../api/product";
import { getUser, reRender } from "../../../utils";
import WishList from "../wishlist";
import WishListLabel from "../wishlistLabel";

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
        const afterRenderProduct = () => {
            // yêu thích sp
            const btnsHeart = document.querySelectorAll(".btn-heart");
            btnsHeart.forEach((btn) => {
                const { id } = btn.dataset;

                btn.addEventListener("click", async () => {
                    const userLogged = getUser();

                    if (!userLogged) {
                        toastr.info("Vui lòng đăng nhập để yêu thích sản phẩm");
                    } else {
                        const { data: heartList } = await checkHeart(userLogged.id, id);

                        if (heartList.length) {
                            toastr.info("Sản phẩm đã tồn tại trong danh sách yêu thích");
                        } else {
                            const { data: productInfo } = await get(id);
                            productInfo.favorites += 1;

                            // cập nhật số lượt yêu thích
                            update(id, productInfo);

                            // lưu thông tin
                            const date = new Date();
                            add({
                                userId: userLogged.id,
                                productId: +id,
                                createdAt: date.toISOString(),
                            })
                                .then(() => toastr.success("Đã thêm vào danh sách yêu thích"))
                                .then(() => reRender(WishListLabel, ".header-icon-heart"))
                                .then(() => reRender(WishList, "#wishlist"))
                                .then(() => document.querySelector("#wishlist").classList.add("active"));
                        }
                    }
                });
            });
        };
        afterRenderProduct();

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

            afterRenderProduct();
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

                afterRenderProduct();
            });
        });
    },
};

export default FilterProduct;