import { getRelated } from "../../../api/product";
import { formatCurrency } from "../../../utils";

const Related = {
    async render(id, cateId) {
        const { data } = await getRelated(id, cateId);
        const productList = data.slice(0, 5);

        return `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            ${productList.map((item) => `
                <div class="group">
                    <div class="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style="background-image: url(${item.image})" class="bg-cover pt-[100%] bg-center block"></a>
                        <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
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
                `).join("")}
        </div>
        `;
    },
};

export default Related;