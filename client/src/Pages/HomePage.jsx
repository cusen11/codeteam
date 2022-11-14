import React, { useEffect } from 'react'; 
import { Col, Row, Pagination, Card, Popover, Button, Modal } from 'antd'; 
import { EyeOutlined, EditOutlined } from '@ant-design/icons'  
import CreatePost from '../Component/CreatePost';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GetAllPostPagination } from '../Action/posts'; 
import { formatDAY } from '../Action/func';  
import LikePost from '../Component/LikePost'; 
function HomePage() {
    const dispatch = useDispatch() 
    const token = useSelector(state => state?.login)  
    const tokenKey = token.value.request_token.token
    const [page ,setPage] = useState(1)
    const limit = 9
    useEffect(()=>{
        GetAllPostPagination(tokenKey, dispatch,page,limit)
    },[page,limit,tokenKey,dispatch]) 
    
    const posts = useSelector(state => state?.posts.value)
    const PaginationChange =  (pagePagination) =>{
        setPage(pagePagination) 
    }  
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    }; 
      const handleCancel = () => {
        setIsModalOpen(false);
      }; 
    return (
        <Row className='wrapper'> 
            <Modal title="Thêm mới" width={'60%'} open={isModalOpen} footer={null} onCancel={handleCancel}>
                <CreatePost dataToken={token} limit={limit}/>
            </Modal> 
             <Row style={{width:'100%'}} justify="end" align='middle'>
                <Col style={{textAlign:'right',padding:'18px'}}><Button type='primary' onClick={showModal}>Thêm dự án</Button></Col> 
             </Row>
            <Row align='top' justify='start' style={{width:'100%'}} gutter={[16, 16]}>
                {
                    posts.results.map(post => (
                        <Col key={post._id} className='card' span={8}>
                            <Card
                            extra={
                                <div>
                                    <Popover 
                                        content={
                                        <div>
                                            <p><b>By: </b>{post.user.username}</p>
                                            <p><b>Date:</b> {formatDAY(post.createdAt)}</p>
                                        </div>}>
                                        <EyeOutlined style={{cursor:'pointer', fontSize:'18px',marginRight: '5px'}} /> 
                                    </Popover>
                                    <Popover 
                                        content='Edit'> 
                                        <EditOutlined style={{cursor:'pointer', fontSize:'18px'}}/>
                                    </Popover>
                                </div>
                            }
                            title={post.customer}                             
                            actions={[<>
                                <LikePost data={post} token={tokenKey} page={page} limit={limit}/>
                                {/* <Angry data={post} token={tokenKey} page={page} limit={limit}/> */}
                                </>
                            ]}
                            >  
                                <div  dangerouslySetInnerHTML={{__html: post.content}}></div>
                            </Card>
                        </Col> 
                    ))
                } 
            </Row> 
            {
                posts.totalPage > 1 ? <Pagination style={{marginTop:50,width:'100%',textAlign:'center'}} onChange={PaginationChange} total={posts.totalItem} pageSize={limit} /> : ''
            }
        </Row>
    );
}

export default HomePage;