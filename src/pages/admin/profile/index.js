import toastr from "toastr";
import HeaderTop from "../../../components/admin/headerTop";
import AdminNav from "../../../components/admin/nav";
import {
    getUser, reRender, saveUser, uploadFile,
} from "../../../utils";
import { getAllProvince, getDistrict, getWard } from "../../../api/location";
import { update } from "../../../api/user";

const AdminProfilePage = {
    async render() {
        const userInfo = getUser();
        const { data: listProvince } = await getAllProvince();
        const listDistrict = await getDistrict(userInfo.provinceCode);
        const listWard = await getWard(userInfo.districtCode);

        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render()}
            
            <div class="ml-0 transition md:ml-60">
                <header class="left-0 md:left-60 fixed right-0 top-0">
                    ${HeaderTop.render()}

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                            Profile
                            </h5>
                            <span>Thông tin tài khoản</span>
                        </div>

                        <a href="/#/admin/profile/change-password">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Đổi mật khẩu
                            </button>
                        </a>
                    </div>
                </header>

                <div class="p-6 mt-24 overflow-hidden">
                    <form action="" method="POST" id="form__update-account">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <span class="font-semibold mb-4 block text-xl">Thông tin tài khoản:</span>

                                <div class="grid grid-cols-6 gap-3">
                                    <div class="col-span-6">
                                        <label for="form__update-account-fullname" class="block text-sm font-medium text-gray-700">Họ và tên</label>
                                        <input type="text" name="form__update-account-fullname" id="form__update-account-fullname" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên đầy đủ" value="${userInfo.fullName}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__update-account-username" class="block text-sm font-medium text-gray-700">Username</label>
                                        <input type="text" name="form__update-account-username" id="form__update-account-username" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập username" value="${userInfo.username}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__update-account-phone" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                        <input type="text" name="form__update-account-phone" id="form__update-account-phone" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập sdt" value="${userInfo.phone}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__update-account-role" class="block text-sm font-medium text-gray-700">Vai trò</label>
                                        <select id="form__update-account-role" name="form__update-account-role" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn vai trò --</option>
                                            <option value="0" ${!userInfo.role ? "selected" : ""}>Khách hàng</option>
                                            <option value="1" ${userInfo.role ? "selected" : ""}>Admin</option>
                                        </select>
                                        <div class="form__add-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-3">
                                        <label for="form__update-account-stt" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                                        <select id="form__update-account-stt" name="form__update-account-stt" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn trạng thái tài khoản --</option>
                                            <option value="0" ${!userInfo.active ? "selected" : ""}>Khóa</option>
                                            <option value="1" ${userInfo.active ? "selected" : ""}>Kích hoạt</option>
                                        </select>
                                        <div class="form__add-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="form__update-account-email" class="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="text" name="form__update-account-email" id="form__update-account-email" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập email" value="${userInfo.email}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>
                                    
                                    <div class="col-span-6 md:col-span-2">
                                        <label for="form__update-account-province" class="block text-sm font-medium text-gray-700">Tỉnh/TP</label>
                                        <select id="form__update-account-province" name="form__update-account-province" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn Tỉnh/TP --</option>
                                            ${listProvince.map((item) => `<option value="${item.code}" ${userInfo.provinceCode === item.code ? "selected" : ""}>${item.name}</option>`).join("")}
                                        </select>
                                        <div class="form__add-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-2">
                                        <label for="form__update-account-district" class="block text-sm font-medium text-gray-700">Quận/Huyện</label>
                                        <select id="form__update-account-district" name="form__update-account-district" class="form-control mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn Quận/Huyện --</option>
                                            ${listDistrict.map((item) => `<option value="${item.code}" ${userInfo.districtCode === item.code ? "selected" : ""}>${item.name}</option>`).join("")}
                                        </select>
                                        <div class="form__add-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6 md:col-span-2">
                                        <label for="form__update-account-ward" class="block text-sm font-medium text-gray-700">Xã/Phường</label>
                                        <select id="form__update-account-ward" name="form__update-account-ward" class="form-control mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn Xã/Phường --</option>
                                            ${listWard.map((item) => `<option value="${item.code}" ${userInfo.wardsCode === item.code ? "selected" : ""}>${item.name}</option>`).join("")}
                                        </select>
                                        <div class="form__add-cate-error-img text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="form__update-account-address" class="block text-sm font-medium text-gray-700">Địa chỉ hiện tại</label>
                                        <input type="text" name="form__update-account-address" id="form__update-account-address" class="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập thôn/xóm/TDP" value="${userInfo.address}">
                                        <div class="text-sm mt-0.5 text-red-500"></div>
                                    </div>

                                    <div class="col-span-3">
                                        <label class="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                        <div class="mt-1">
                                            <img src="${userInfo.avatar}" alt="Preview Image" id="form__update-account-preview" class="h-40 w-40 rounded-full object-cover">
                                        </div>
                                    </div>

                                    <div class="col-span-6">
                                        <label class="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
                                        <div class="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="form__update-account-avatar" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="form__update-account-avatar" name="form__update-account-avatar" type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                        <div class="form__add-cate-error-img text-sm mt-0.5 text-red-500"></div>
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
        HeaderTop.afterRender();
        AdminNav.afterRender();

        const formAdd = document.querySelector("#form__update-account");
        const fullName = formAdd.querySelector("#form__update-account-fullname");
        const username = formAdd.querySelector("#form__update-account-username");
        const phone = formAdd.querySelector("#form__update-account-phone");
        const email = formAdd.querySelector("#form__update-account-email");
        const role = formAdd.querySelector("#form__update-account-role");
        const status = formAdd.querySelector("#form__update-account-stt");
        const avatar = formAdd.querySelector("#form__update-account-avatar");
        const avatarPreview = formAdd.querySelector("#form__update-account-preview");
        const provinceElement = formAdd.querySelector("#form__update-account-province");
        const districtElement = formAdd.querySelector("#form__update-account-district");
        const wardElement = formAdd.querySelector("#form__update-account-ward");
        const address = formAdd.querySelector("#form__update-account-address");

        // validate
        const validate = () => {
            let isValid = true;

            if (!fullName.value) {
                fullName.nextElementSibling.innerText = "Vui lòng nhập họ tên";
                isValid = false;
            } else {
                fullName.nextElementSibling.innerText = "";
            }

            const regexUsername = /[\s*]/;
            if (!username.value) {
                username.nextElementSibling.innerText = "Vui lòng nhập username";
                isValid = false;
            } else if (regexUsername.test(username.value)) {
                username.nextElementSibling.innerText = "Username không được chứa khoảng trắng";
                isValid = false;
            } else {
                username.nextElementSibling.innerText = "";
            }

            const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            if (!phone.value) {
                phone.nextElementSibling.innerText = "Vui lòng nhập số điện thoại";
                isValid = false;
            } else if (!regexPhone.test(phone.value)) {
                phone.nextElementSibling.innerText = "Số điện thoại không đúng định dạng";
                isValid = false;
            } else {
                phone.nextElementSibling.innerText = "";
            }

            const regexEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!email.value) {
                email.nextElementSibling.innerText = "Vui lòng nhập email";
                isValid = false;
            } else if (!regexEmail.test(email.value)) {
                email.nextElementSibling.innerText = "Email không đúng định dạng";
                isValid = false;
            } else {
                email.nextElementSibling.innerText = "";
            }

            if (!role.value) {
                role.nextElementSibling.innerText = "Vui lòng chọn vai trò";
                isValid = false;
            } else {
                role.nextElementSibling.innerText = "";
            }

            if (!status.value) {
                status.nextElementSibling.innerText = "Vui lòng chọn trạng thái tài khoản";
                isValid = false;
            } else {
                status.nextElementSibling.innerText = "";
            }

            if (!address.value) {
                address.nextElementSibling.innerText = "Vui lòng nhập địa chỉ";
                isValid = false;
            } else {
                address.nextElementSibling.innerText = "";
            }

            if (!provinceElement.value) {
                provinceElement.nextElementSibling.innerText = "Vui lòng chọn Tỉnh/TP";
                isValid = false;
            } else {
                provinceElement.nextElementSibling.innerText = "";
            }

            if (!districtElement.value) {
                districtElement.nextElementSibling.innerText = "Vui lòng chọn Quận/Huyện";
                isValid = false;
            } else {
                districtElement.nextElementSibling.innerText = "";
            }

            if (!wardElement.value) {
                wardElement.nextElementSibling.innerText = "Vui lòng chọn Xã/Phường";
                isValid = false;
            } else {
                wardElement.nextElementSibling.innerText = "";
            }

            return isValid;
        };

        // bắt sự kiện submit form
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const isValid = validate();

            if (isValid) {
                // get user info
                const userInfo = getUser();
                let userAvatar = userInfo.avatar;

                // nếu cập nhật avatar
                if (avatar.files.length) {
                    const { data } = await uploadFile(avatar.files[0]);
                    userAvatar = data.url;
                }

                userInfo.email = email.value;
                userInfo.username = username.value;
                userInfo.fullName = fullName.value;
                userInfo.phone = phone.value;
                userInfo.avatar = userAvatar;
                userInfo.wardsCode = +wardElement.value;
                userInfo.districtCode = +districtElement.value;
                userInfo.provinceCode = +provinceElement.value;
                userInfo.address = address.value;
                userInfo.role = +role.value;
                userInfo.active = +status.value;

                update(userInfo.id, userInfo)
                    .then(() => saveUser(userInfo))
                    .then(() => toastr.success("Cập nhật thành công"))
                    .then(() => reRender(AdminProfilePage, "#app"));
            }
        });

        // bắt sự kiện đổi avatar
        avatar.addEventListener("change", (e) => {
            avatarPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // bắt sự kiện chọn tỉnh/tp
        provinceElement.addEventListener("change", async (e) => {
            const provinceCode = e.target.value;
            const districtList = await getDistrict(provinceCode);
            let htmlDistrict = `<option value="">-- Chọn Tỉnh/TP --</option>`;
            districtList.forEach((item) => {
                htmlDistrict += `<option value="${item.code}">${item.name}</option>`;
            });

            districtElement.innerHTML = htmlDistrict;
        });

        // bắt sự kiện chọn quận/huyện
        districtElement.addEventListener("change", async (e) => {
            const districtCode = e.target.value;
            const wardList = await getWard(districtCode);
            let htmlWard = `<option value="">-- Chọn Xã/Phường --</option>`;
            wardList.forEach((item) => {
                htmlWard += `<option value="${item.code}">${item.name}</option>`;
            });

            wardElement.innerHTML = htmlWard;
        });
    },
};

export default AdminProfilePage;