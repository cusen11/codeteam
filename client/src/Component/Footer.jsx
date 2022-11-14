import { DingdingOutlined } from '@ant-design/icons';
import React from 'react';

function Footer() {
    return ( 
        <div style={{background:'#3498db',padding:20,textAlign:'center',marginTop:40}}>
            <h4 style={{color:'#fff'}}>Make by <DingdingOutlined style={{color: "#fff",fontSize:"40px"}} />  team code </h4>
        </div>
    );
}

export default Footer;