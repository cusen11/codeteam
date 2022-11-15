import React, { useEffect } from 'react'; 
import { Col, Row, Pagination, Card, Popover, Button, Modal,Input } from 'antd'; 
import { HeartFilled, SearchOutlined } from '@ant-design/icons'  
import CreatePost from '../Component/CreatePost';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GetAllPostPagination, SearchPostAPI } from '../Action/posts'; 
import { ColorType } from '../Action/func';  
import LikePost from '../Component/LikePost'; 
import AngryPost from '../Component/AngryPost';
import NormalPost from '../Component/NormalPost';
import CommentPost from '../Component/CommentPost'; 
import DeletePost from '../Component/DeletePost';
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
    const onChange = (e) => {
        
        setTimeout(() => {
            if(e.target.value !== ''){
                SearchPostAPI(e.target.value,tokenKey, dispatch,1,10000) 
            }
            else{
                GetAllPostPagination(tokenKey, dispatch,page,limit)
            } 
           
        }, 3000);

    }

    return (
        <Row className='wrapper'> 
             
            <Modal title="Thêm mới" width={'60%'} open={isModalOpen} footer={null} onCancel={handleCancel}>
                <CreatePost dataToken={token} limit={limit}/>
            </Modal> 
            
             <Row style={{width:'100%'}} justify="end" align='middle'>
               
                <Col style={{textAlign:'right',padding:'18px'}}>  
                    <Input placeholder="Tìm kiếm" onChange={onChange} prefix={<SearchOutlined />} />
                </Col> 
                <Col style={{textAlign:'right',paddingRight:'18px'}}>
                    <Button type='primary' size='lagre' onClick={showModal}>Thêm dự án</Button> 
                </Col> 
             </Row>
             
            <Row align='top' justify='start' style={{width:'100%'}} gutter={[16, 16]}>
                {
                    posts.results.map(post => (
                        <Col key={post._id} className='card' span={24}>
                            <Card  
                            extra={ 
                                    <Popover 
                                        content='Type'> 
                                        <HeartFilled style={{color: ColorType(post), marginRight:'5px'}}/>
                                    </Popover> 
                            }
                            title={post.customer}                             
                            actions={[<> 
                                        <LikePost data={post} token={tokenKey} page={page} limit={limit}/>
                                        <AngryPost data={post} token={tokenKey} page={page} limit={limit}/>
                                        <NormalPost data={post} token={tokenKey} page={page} limit={limit}/> 
                                        <DeletePost data={post} token={tokenKey} page={page} limit={limit}/>
                                        <CommentPost data={post.comment} token={tokenKey} limit={limit} id={post._id} dashboard={false}/>
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