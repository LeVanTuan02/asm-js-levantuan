import axios from "axios";

const API_URL = "https://provinces.open-api.vn/api";

export const getDistrict = async (provinceCode) => {
    const { data } = await axios.get(`${API_URL}/p/${provinceCode}/?depth=2`);
    return data.districts;
};

export const getAllProvince = async () => {
    const response = await axios.get(`${API_URL}/p`);
    return response;
};

export const getWard = async (districCode) => {
    const { data } = await axios.get(`${API_URL}/d/${districCode}/?depth=2`);
    return data.wards;
};