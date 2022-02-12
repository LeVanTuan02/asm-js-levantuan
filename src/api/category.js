import instance from "./config";

const TABLE_NAME = "categories";

export const getAll = () => {
    const url = `/${TABLE_NAME}`;
    return instance.get(url);
};

export const getAllJoinProduct = () => {
    const url = `/${TABLE_NAME}/?_embed=products`;
    return instance.get(url);
};

// sp theo danh mục
export const getProductByCate = (cateId) => {
    const url = `/${TABLE_NAME}/${cateId}/?_embed=products`;
    return instance.get(url);
};

export const get = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
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