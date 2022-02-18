import instance from "./config";

const TABLE_NAME = "comments";

export const add = (comment) => {
    const url = `/${TABLE_NAME}`;
    return instance.post(url, comment);
};

export const get = (productId) => {
    const url = `/${TABLE_NAME}/?productId=${productId}&_expand=user&_sort=id&_order=desc`;
    return instance.get(url);
};

export const remove = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.delete(url);
};