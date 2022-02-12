import instance from "./config";

const TABLE_NAME = "products";

export const getAll = () => {
    const url = `/${TABLE_NAME}`;
    return instance.get(url);
};

// ds sp trạng thái hiển thị
export const getAllJoinCategory = () => {
    const url = `/${TABLE_NAME}/?_expand=category&status_ne=0`;
    return instance.get(url);
};

// tìm kiếm
export const search = (keyword) => {
    const url = `/${TABLE_NAME}/?q=${keyword}&status_ne=0&_expand=category`;
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