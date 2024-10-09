import React from 'react';
import { Button } from 'antd';
import { REMOVE_TOKEN } from '../../utils/token';
import { requestLogout } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { successNotification } from '../../utils/notification';

export default function Home() {
    const nav = useNavigate();

    const clickLogout = async () => {
        let result = await requestLogout();
        if (result.code === '0000') {
            successNotification('退出登录', '拜拜啦!');
            REMOVE_TOKEN();
            nav('/');
        }
        else {

        }
    }

    return (
        <div>
            <h1>Home</h1>
            <Button type="default" onClick={clickLogout}>退出</Button>
        </div>
    )
}
