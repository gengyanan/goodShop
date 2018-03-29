import axios from 'axios'

  const ax = axios.create({
    baseURL: "https://easy-mock.com/mock/593674a291470c0ac104e2d2/example", // 因为我本地做了反向代理
    timeout: 10000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  });

export default ax;

