import React, { useEffect } from 'react'; 
import { Col, Row, Pagination, Card, Popover } from 'antd'; 
import { FrownOutlined, MehOutlined, HeartOutlined, EyeOutlined, CommentOutlined } from '@ant-design/icons'  
import CreatePost from '../Component/CreatePost';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GetAllPostPagination } from '../Action/posts';
function HomePage() {
    const dispatch = useDispatch() 
    const token = useSelector(state => state?.login)  
    const tokenKey = token.value.request_token.token
    const [page ,setPage] = useState(1)
    const limit = 12
    useEffect(()=>{
        GetAllPostPagination(tokenKey, dispatch,page,limit)
    },[page,limit,tokenKey,dispatch]) 
    
    const posts = useSelector(state => state?.posts.value)
    const PaginationChange =  (pagePagination) =>{
        setPage(pagePagination) 
    }  
    return (
        <Row className='wrapper'> 
            <CreatePost dataToken={token} limit={limit}/>
             
            <Row align='top' justify='start' style={{width:'100%'}} gutter={[16, 16]}>
                {
                    posts.results.map(post => (
                        <Col key={post._id} className='card' span={6}>
                            <Card
                            extra={<Popover content={`Người đăng: ${post.user.username}`}><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                            title={post.customer}                             
                            actions={[
                                <Popover content="Bình luận">
                                   <CommentOutlined />
                                </Popover>,
                                <Popover content="Dễ chịu">
                                    <HeartOutlined />
                                </Popover>,
                                <Popover content="Bình thường">
                                    <MehOutlined />
                                </Popover>,
                                <Popover content="Khó tánh" >
                                    <FrownOutlined />
                                </Popover>

                            ]}
                            >  
                                <p>{post.content}</p>
                            </Card>
                        </Col> 
                    ))
                } 
            </Row> 
            {
                posts.totalPage > 1 ? <Pagination onChange={PaginationChange} total={posts.totalItem} pageSize={limit} /> : ''
            }
        </Row>
    );
}

export default HomePage;