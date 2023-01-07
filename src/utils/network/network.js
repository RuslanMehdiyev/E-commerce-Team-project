import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

export const network = {
  getAll: async (url) => {
    let responseData = [];
    await axiosInstance
      .get(url)
      .then((res) => {
        responseData = res.data;
      })
      .catch((err) => {
        console.log("Error", err);
        throw err;
      });
    return responseData;
  },
  getById: async (id) => {
    let response = {};
    await axiosInstance.get(`/${id}`).then((res) => {
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
  getCategories: async () => {
    let response = {};
    await axiosInstance.get(`/categories`).then((res) => {
      console.log(res);
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
  getByCategory: async (name) => {
    let response = {};
    await axiosInstance.get(`/category/${name}`).then((res) => {
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
};
