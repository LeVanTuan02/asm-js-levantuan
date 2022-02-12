import { getAll, getAllJoinNews } from "../../api/cateNews";
import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import { getAll as getAllNews } from "../../api/news";

const NewsByCatePage = {
    formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getDate()}, Tháng ${date.getMonth() + 1} ${date.getFullYear()}`;
    },
    async render(cateId) {
        const { data: newsCateList } = await getAll();
        const { data: { news: newsList } } = await getAllJoinNews(cateId);

        return /* html */ `
        ${await Header.render("news")}

        <!-- content -->
        <main>
            <section class="container max-w-6xl px-3 mx-auto flex mt-8 justify-center">
                <div class="text-center px-4 group cate-news-item">
                    <div class="cate-news-icon w-[75px] h-[75px] text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <i class="fas fa-border-all"></i>
                    </div>
                    <p class="cate-news-name font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tất cả</p>
                </div>
                ${newsCateList.map((cate) => /* html */`
                    <div data-id="${cate.id}" class="text-center px-4 group cate-news-item ${cate.id === +cateId ? "active" : ""}">
                        <div class="cate-news-icon w-[75px] h-[75px] text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                            <svg class="svg-inline--fa fa-newspaper fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"></path></svg>
                        </div>
                        <p class="cate-news-name font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">${cate.name}</p>
                    </div>
                    `).join("")}
            </section>

            <section class="py-16 bg-[#EFE8DE] mt-6 min-h-[500px]">
                <div class="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="news__list">
                    ${newsList.map((item) => `
                        <div>
                            <a href="/#/news/${item.id}" style="background-image: url(${item.thumbnail});" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                                <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                    <i class="fas fa-newspaper"></i>
                                </button>
                            </a>
                            <div class="bg-white rounded-b-xl shadow px-3 py-2">
                                <p class="text-sm text-gray-500">${this.formatDate(item.createdAt)}</p>
                                <h3>
                                    <a href="/#/news/${item.id}" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">${item.title}</a>
                                </h3>
                                <p class="text-gray-500 text-sm text-justify">${item.description}</p>

                                <a href="">
                                    <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                        `).join("")}
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Footer.afterRender();

        const cateNewsItem = document.querySelectorAll(".cate-news-item");
        const newsListElement = document.querySelector("#news__list");
        cateNewsItem.forEach((cateElement) => {
            const { id } = cateElement.dataset;

            cateElement.addEventListener("click", async () => {
                document.querySelector(".cate-news-item.active").classList.remove("active");
                cateElement.classList.add("active");

                let newsList = "";
                if (id) {
                    const { data: { news } } = await getAllJoinNews(id);
                    newsList = news;
                } else {
                    const { data } = await getAllNews();
                    newsList = data;
                }

                newsListElement.innerHTML = newsList.map((item) => `
                <div>
                    <a href="/#/news/${item.id}" style="background-image: url(${item.thumbnail});" class="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                        <button class="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                            <i class="fas fa-newspaper"></i>
                        </button>
                    </a>
                    <div class="bg-white rounded-b-xl shadow px-3 py-2">
                        <p class="text-sm text-gray-500">${this.formatDate(item.createdAt)}</p>
                        <h3>
                            <a href="/#/news/${item.id}" class="block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">${item.title}</a>
                        </h3>
                        <p class="text-gray-500 text-sm text-justify">${item.description}</p>

                        <a href="/#/news/${item.id}">
                            <button class="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </a>
                    </div>
                </div>
                `).join("");
            });
        });
    },
};

export default NewsByCatePage;