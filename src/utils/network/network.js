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
  getById: async (url, id) => {
    let response = {};
    await axiosInstance.get(`${url}/${id}`).then((res) => {
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
  getCategories: async (url, category) => {
    let response = {};
    await axiosInstance.get(`${url}/${category}`).then((res) => {
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
  getByCategory: async (url, name) => {
    let response = {};
    await axiosInstance.get(`${url}/category/${name}`).then((res) => {
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
};
