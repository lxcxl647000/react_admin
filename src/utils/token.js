// 封装本地化token的存取方法//

// 存//
export const SET_TOKEN = (token) => {
    localStorage.setItem('TOKEN', token);
};

// 取//
export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN') || '';
};

// 清除//
export const REMOVE_TOKEN = () => {
    localStorage.removeItem('TOKEN');
};