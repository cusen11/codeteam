import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { Button, Popover } from 'antd'; 
import { AngryPostAPI, UnAngryPostAPI } from '../Action/posts';
import { useDispatch, useSelector } from 'react-redux'; 
import { FrownOutlined } from '@ant-design/icons';

AngryPost.propTypes = {
    data:PropTypes.object 
};

function AngryPost({data,token,limit,page}) {   
    const dispath = useDispatch()  
    const [ isAngry, setIsAngry ] = useState()
    const [ length, setLength ] = useState(data.angrys.length)
    const user  = useSelector(state => state?.login.info)  
    useEffect(()=>{
        setIsAngry(data.angrys.some((angry) => {return angry.user === user._id})) 
    },[token,data.angrys, user._id]) 
    
    return (
        <Popover content="Khó chịu">
         {
                !isAngry ?
                <Button
                type="text" 
                icon={<FrownOutlined />} 
                size='large'
                onClick={()=>{
                    AngryPostAPI(data._id,token,dispath, limit,page)
                    setIsAngry(!isAngry)
                    setLength(length + 1)
                }}
                >
                        {length === 0 ? '' : ` ${length}`} 
                </Button> 
                :
                <Button
                type="text" 
                icon={<FrownOutlined style={{color:'red'}}/>} 
                size='large'
                onClick={()=>{
                    UnAngryPostAPI(data._id,token,dispath, limit,page)
                    setIsAngry(!isAngry)
                    setLength(length - 1)
                }}
                >
                        {length === 0 ? '' : ` ${length}`} 
                </Button>
            } 
        </Popover>
            
    );
}

export default AngryPost;