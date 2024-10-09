import { notification } from "antd";

export const successNotification = (msg, des, duration = 3, placement = 'topRight') => {
    notification.success(
        {
            message: msg,
            description: des,
            duration: duration,
            placement: placement
        }
    );
};