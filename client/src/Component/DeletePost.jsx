import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import React from 'react'; 
import { useDispatch } from 'react-redux';
import { removePostById } from '../Action/posts';


function DeletePost(props) {
    const {data,token,page, limit} = props;
    const dispatch = useDispatch()
    return (
        <Popover content="Xóa">
            <Button onClick={()=>removePostById(token, data._id, dispatch,page,limit)}
                type="text" 
                icon={<DeleteOutlined style={{color:'red'}}  />} 
                size='large'/>
        </Popover>
    );
}

export default DeletePost;