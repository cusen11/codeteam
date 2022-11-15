import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { Button, Popover } from 'antd'; 
import { NormalPostAPI, UnNormalPostAPI } from '../Action/posts';
import { useDispatch, useSelector } from 'react-redux';  
import { MehOutlined } from '@ant-design/icons';

NormalPost.propTypes = {
    data:PropTypes.object 
};

function NormalPost({data,token,limit,page}) {   
    const dispath = useDispatch()  
    const [ isNomal, setIsNomal ] = useState()
    const [ length, setLength ] = useState(data.normals.length)
    const user  = useSelector(state => state?.login.info)  
    useEffect(()=>{
        setIsNomal(data.normals.some((normal) => {return normal.user === user._id})) 
    },[token,data.normals, user._id]) 
    
    return (
        <Popover content="Dễ chịu">
         {
                !isNomal ?
                <Button
                type="text" 
                icon={<MehOutlined />} 
                size='large'
                onClick={()=>{
                    NormalPostAPI(data._id,token,dispath, limit,page)
                    setIsNomal(!isNomal)
                    setLength(length + 1)
                }}
                >
                        {length === 0 ? '' : ` ${length}`} 
                </Button> 
                :
                <Button
                type="text" 
                icon={<MehOutlined style={{color:'green'}}/>} 
                size='large'
                onClick={()=>{
                    UnNormalPostAPI(data._id,token,dispath, limit,page)
                    setIsNomal(!isNomal)
                    setLength(length - 1)
                }}
                >
                        {length === 0 ? '' : ` ${length}`} 
                </Button>
            } 
        </Popover>
            
    );
}

export default NormalPost;