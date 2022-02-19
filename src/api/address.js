import instance from "./config";

const TABLE_NAME = "address";

export const getByUserId = (userId) => {
    const url = `/${TABLE_NAME}/?userId=${userId}`;
    return instance.get(url);
};

export const add = (data) => {
    const url = `/${TABLE_NAME}`;
    return instance.post(url, data);
};

export const get = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.get(url);
};

export const getAll = () => {
    const url = `/${TABLE_NAME}`;
    return instance.get(url);
};

// check địa chỉ tồn tại chưa
// eslint-disable-next-line max-len
export const checkAddExits = async (data) => {
    const { data: listAdd } = await getAll();

    // eslint-disable-next-line max-len
    const isExits = listAdd.some((item) => item.userId === data.userId && item.fullName === data.fullName && item.phone === data.phone && item.address === data.address && item.email === data.email && item.wardCode === data.wardCode && item.districtCode === data.districtCode && item.provinceCode === data.provinceCode);

    return isExits;
};