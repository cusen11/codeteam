import LOGO from '../Assets/Images/SEN-LOGO.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <div style={{background:'#fff',padding:20,textAlign:'center',marginTop:40}}>
            <h4 style={{color:'#000'}}><div><Link to='/' className='logo'>Make by <img width='55px' src={LOGO} alt="" /> team code </Link></div> </h4>
        </div>
    );
}

export default Footer;