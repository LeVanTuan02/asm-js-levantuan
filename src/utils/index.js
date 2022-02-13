import axios from "axios";

export const reRender = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
    }

    if (component.afterRender) await component.afterRender();
};

// hàm upload image
export const uploadFile = (file) => {
    const CLOUDINARY_NAME = "levantuan";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "u6e4fyfm";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    const res = axios.post(CLOUDINARY_API, formData, {
        headers: {
            "Content-Type": "application/form-data",
        },
    });

    return res;
};

// check login
export const checkLogin = (role) => {
    const user = JSON.parse(localStorage.getItem("auth"));

    if (!user || user.role !== 1 || user.role !== role) {
        window.location.href = "/#/";
    } else {
        window.location.href = "/#/admin/dashboard";
    }
};

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    return user;
};

export const saveUser = (uesr) => {
    localStorage.setItem("auth", JSON.stringify(uesr));
};

export const logout = () => {
    localStorage.removeItem("auth");
    document.location.href = "/#/login";
};

// hàm format money
export const formatCurrency = (currency) => currency.toLocaleString("it-IT", { style: "currency", currency: "VND" });

// format date
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};