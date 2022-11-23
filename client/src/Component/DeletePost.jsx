import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import React from 'react'; 
import { useDispatch } from 'react-redux';
import { warning } from '../Action/func';
import { removePostById } from '../Action/posts';


function DeletePost(props) {
    const {data,token,page, limit,level} = props;
    const dispatch = useDispatch()
    return (
        <Popover content="Xóa">
            <Button style={{position:'absolute',right:0}} onClick={level === 1 ? ()=>removePostById(token, data, dispatch,page,limit) : ()=> warning('Bạn không có quyền xóa!!!')}
                type="text" 
                icon={<DeleteOutlined style={{color:'red'}}  />} 
                size='large'/>
        </Popover>
    );
}

export default DeletePost;