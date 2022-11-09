import React from 'react';
import { Link } from 'react-router-dom';
import { DingtalkOutlined, PoweroffOutlined } from '@ant-design/icons';
import './Header.css';
import { Button } from 'antd';

import { logout } from '../../reducers/Login';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();  
    return (
        <header className='header'>
            <div className="wrapper">
                <div><Link to='/' className='logo'><DingtalkOutlined style={{color: "#fff",fontSize:"40px"}} /></Link></div>
                <ul className='nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/parts'>Part</Link></li>
                    <li><Button style={{width: '100%'}} 
                        type='primary' 
                        danger onClick={() => dispatch(logout())} 
                        icon={<PoweroffOutlined />}
                    /></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;