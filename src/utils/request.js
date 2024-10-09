import axios from "axios";
import { store } from "../redux/store";
import { message } from "antd";

// 创建axios实例//
let request = axios.create(
    {
        baseURL: process.env.REACT_APP_BASE_API,
        timeout: 8000,
    }
);

// 请求拦截器//
request.interceptors.request.use((config) => {
    // 消息头带上一些公共信息 如：token//
    let { token } = store.getState().user;
    config.headers.token = token;
    return config;
});

// 响应拦截器//
request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // 处理网络错误//
        let msg = '';
        let { status } = error.response;
        switch (status) {
            case 401:
                msg = 'token过期'
                break;
            case 403:
                msg = '无权访问'
                break;
            case 404:
                msg = '请求地址错误'
                break;
            case 500:
                msg = '服务器错误'
                break;
            default:
                msg = '网络异常'
                break;
        }

        message.error(msg);

        return Promise.reject(error);
    }
);

export default request;