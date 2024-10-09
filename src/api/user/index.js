import request from "../../utils/request";

const API = {
    LOGIN_URL: '/user/login',
    LOGOUT_URL: '/user/logout'
}

/**请求登录接口 */
export const requestLogin = (data) => {
    return request.post(API.LOGIN_URL, data);
};

/**请求退出接口 */
export const requestLogout = () => {
    return request.post(API.LOGOUT_URL);
}