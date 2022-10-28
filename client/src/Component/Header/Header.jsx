import React from 'react';
import { Link } from 'react-router-dom';
import { DingtalkOutlined } from '@ant-design/icons';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="wrapper">
                <div><Link to='/' className='logo'><DingtalkOutlined style={{color: "#fff",fontSize:"40px"}} /></Link></div>
                <ul className='nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/parts'>Part</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;