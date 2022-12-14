import React from 'react';
import { Form, Input, Button,Row, Col, Typography ,Card } from 'antd';   
import axios from 'axios';
import { login } from '../reducers/Login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { error } from '../Action/func';

function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { Title } = Typography;

    const onFinish = async (values) => {
        if(values.password !== values.password2){
            error('Mật khẩu không gióng nhau!!!')
            return
        }
        const newUser = {
            lastname:values.username,
            firstname:values.firstname,
            username: values.username,
            email: values.email,
            password: values.password
        }
        try {
            const body = JSON.stringify(newUser);
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            await axios.post('/api/users/registration', body, config).then(function(res){
                dispatch(login(res)) 
                navigate('/')
            }); 
        } catch (err) {
            alert(err.response.data.msg);

        } 
    }; 
    return (
    <Row justify='center' align='middle'>
        
        <Col xs={24} md={12} lg={8} >
        <Title level={1} align='center'>Registration</Title>
            <Card>
                <Form
                    name="basic"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish} 
                    autoComplete="off"
                >
                     <Form.Item name="lastname"> 
                        <Input placeholder='First Name ( Default Thúy )'/>
                    </Form.Item>
                    <Form.Item name="firstname"> 
                        <Input placeholder='Last Name ( Default Mộng )'/>
                    </Form.Item>
                    <Form.Item 
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username',
                        },
                    ]}
                    > 
                        <Input placeholder='Username'/>
                    </Form.Item>

                    <Form.Item 
                    name="email"
                    
                    rules={[
                        {
                        type: 'email',
                        required: true,
                        message: 'Please input your mail!',
                        },
                    ]}
                    > 
                        <Input placeholder='Email'/>
                    </Form.Item>

                    <Form.Item 
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password placeholder='Password' />
                    </Form.Item>

                    <Form.Item 
                    name="password2"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password placeholder='Password' />
                    </Form.Item> 
                    <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button> 
                    </Form.Item> 
                </Form>
            </Card>
        </Col>
    </Row>
    );
}

export default Registration;