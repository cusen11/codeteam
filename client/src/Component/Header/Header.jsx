import React from 'react';
import { Link } from 'react-router-dom';
import { DingtalkOutlined, PoweroffOutlined } from '@ant-design/icons';
import './Header.css'; 

import { logout } from '../../reducers/Login';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const dispatch = useDispatch();  
    const token = useSelector(state => state?.login)   
    const status = token.value.status
    return (
        <header className='header'>
            <div className="wrapper">
                <div><Link to='/' className='logo'><DingtalkOutlined style={{color: "#fff",fontSize:"40px"}} /></Link></div>
                <ul className='nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/parts'>Part</Link></li> 
                    
                        {
                            status ?  
                            <li
                            onClick={() => dispatch(logout())} > 
                            <Link><PoweroffOutlined /></Link></li>
                        : '' 
                        }
                    
                </ul>
            </div>
        </header>
    );
}

export default Header;