import React from 'react'; 
import { Col, Row, Typography, Pagination, Card, Popover } from 'antd'; 
import { FrownOutlined, MehOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons'  
function HomePage() {
    const { Title } = Typography
    return (
        <Row className='wrapper'>
            <Title level={2}>Hello TeamCode</Title>
            <Row align='top' justify='space-between' style={{width:'100%',marginBottom:'50px'}} gutter={[16, 16]}>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col> 
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex? </p> 
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                <Col className='card' span={6}>
                     <Card
                     extra={<Popover content="Xem thêm"><EyeOutlined style={{cursor:'pointer', fontSize:'18px'}} /></Popover>}
                     title="Tên Khách Hàng"
                     actions={[
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex?</p>
                     </Card>
                </Col>
                
            </Row> 
            <Pagination defaultCurrent={1} total={50} />
        </Row>
    );
}

export default HomePage;