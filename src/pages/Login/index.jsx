import React from 'react';
import './index.less';
import logo from '../../assets/images/logo.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/slices/user';
import { requestLogin } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { successNotification } from '../../utils/notification';

export default function Login() {
    const dispach = useDispatch();
    const nav = useNavigate();

    async function onFinish(value) {
        try {
            let result = await requestLogin(value);
            if (result.code === '0000') {
                successNotification('welcome', 'hello,晚上好!');
                dispach(userLogin(result.data));
                nav('/home');
            }
            else {

            }
        } catch (error) {

        }
    }

    function checkValid(rule, value) {
        let { field } = rule;
        let str = field === 'username' ? '用户名' : '密码';

        const regex = /^[a-zA-Z0-9_]+$/;  // 正则表达式：只允许英文、数字和下划线
        if (!value) {
            return Promise.reject(`请输入${str}!`);
        }
        else if (value.length < 4) {
            return Promise.reject(`${str}至少4位`);
        }
        else if (value.length > 12) {
            return Promise.reject(`${str}最多12位`);
        }
        else if (!regex.test(value)) {
            return Promise.reject(`${str}只能由英文、数字或下划线组成`);
        }
        else {
            return Promise.resolve(); // 校验通过
        }
    }

    return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="" />
                <h1>React项目:后台管理系统</h1>
            </header>
            <section className='login-container'>
                <h2>用户登录</h2>
                <Form name="login" className='login-form' onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                validator: checkValid,
                            }
                        ]}>
                        <Input prefix={<UserOutlined />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item name="password" rules={[
                        {
                            required: true,
                            validator: checkValid,
                        }
                    ]}>
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>

            </section>
        </div>
    )
}
