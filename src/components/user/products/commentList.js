/* eslint-disable no-plusplus */
import Swal from "sweetalert2";
import { get as getRating } from "../../../api/rating";
import { get as getComment, remove as removeCmt } from "../../../api/comment";

import { getUser, reRender } from "../../../utils";

const CommentList = {
    async render(productId) {
        const { data: dataComment } = await getComment(productId);
        const { data: dataRating } = await getRating(productId);

        const formatDate = (dateString) => {
            const date = new Date(dateString);

            return `${date.getDate()} Tháng ${date.getMonth() + 1}, ${date.getFullYear()}`;
        };

        const commentJoinRating = () => {
            const result = dataComment.map((cmt) => {
                const rating = dataRating.find((item) => item.userId === cmt.userId);

                return {
                    cmtId: cmt.id,
                    ratingId: rating.id,
                    userId: cmt.userId,
                    userAvatar: cmt.user.avatar,
                    content: cmt.content,
                    createdAt: cmt.createdAt,
                    fullName: cmt.user.fullName,
                    rating: rating.ratingNumber,
                };
            });

            return result;
        };

        const listComment = commentJoinRating();

        // get info current user
        const userLogged = getUser();

        // render star
        const renderStar = (ratingNumber) => {
            let htmlRating = "";
            for (let i = 0; i < ratingNumber; i++) {
                htmlRating += /* html */`
                <div class="text-yellow-400">
                    <i class="fas fa-star"></i>
                </div>
                `;
            }

            for (let i = 0; i < 5 - ratingNumber; i++) {
                htmlRating += /* html */`
                <div class="text-gray-300">
                    <i class="fas fa-star"></i>
                </div>
                `;
            }

            return htmlRating;
        };

        return /* html */`
        <ul class="mt-4 grid grid-cols-1 divide-y divide-dashed">
            ${listComment.map((cmt) => /* html */`
                <li class="flex py-4">
                    <img src="${cmt.userAvatar}" alt="" class="w-16 h-16 rounded-full object-cover">
                    <div class="ml-2">
                        <div class="flex text-xs mb-0.5">
                            ${renderStar(cmt.rating)}
                        </div>

                        <div>
                            <span class="font-semibold">${cmt.fullName}</span>
                            <span class="text-sm text-gray-500">(${formatDate(cmt.createdAt)})</span>
                        </div>
                        <p class="text-gray-500">${cmt.content}</p>

                        <ul class="text-gray-500 flex text-sm mt-1">
                            ${userLogged && (userLogged.role || userLogged.id === cmt.userId) ? `
                            <li data-cmt-id="${cmt.cmtId}" class="btn-remove transition hover:text-black cursor-pointer">Xóa</li>
                            ` : ""}
                        </ul>
                    </div>
                </li>
                `).join("")}
        </ul>
        `;
    },
    afterRender(productId) {
        const btnsRemove = document.querySelectorAll(".btn-remove");
        btnsRemove.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const { cmtId } = e.target.dataset;

                Swal.fire({
                    title: "Bạn có chắc chắn muốn xóa không?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        removeCmt(cmtId)
                            .then(() => reRender(CommentList, "#list-comment", productId))
                            .then(() => {
                                Swal.fire(
                                    "Thành công!",
                                    "Bình luận đã bị xóa.",
                                    "success",
                                );
                            });
                    }
                });
            });
        });
    },
};

export default CommentList;