import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Popover, Row } from 'antd';
import React, { useState } from 'react'; 
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import { EditPostById } from '../Action/posts';
import EditPost from '../Component/EditPost'; 


function EditButton(props) {
    const {data,token,page,limit} = props;
    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false); 

     // const token = dataToken.value.request_token.token   
      
     const [form] = Form.useForm();
     const onFinish = (values) => {
         const newValue = {
             customer: values.customer,
             content: value
         } 
         // EditPostAPI(newValue,token,dispatch,limit)     
 
     };
     const modules = {
         toolbar: [
           [{ 'header': [1, 2, false] }],
           ['bold', 'italic', 'underline','strike', 'blockquote'],
           [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
           ['link'],
           ['clean']
         ],
       }
     
     const  formats = [
         'header',
         'bold', 'italic', 'underline', 'strike', 'blockquote',
         'list', 'bullet', 'indent',
         'link'
       ] 
     const [value, setValue] = useState(data?.content);  
    return (
        <>
            <Popover content="Sửa">
                <Button style={{position:'absolute',right:30}} onClick={()=> setIsModalOpen(true)}
                    type="text" 
                    icon={<EditOutlined />} 
                    size='large'/>
            </Popover>
            <Modal title="Sửa" width={'60%'} open={isModalOpen} footer={null} onCancel={()=> setIsModalOpen(false)}>
                <Form name="basic" form={form} onFinish={onFinish}>  
                        <Row justify='end' wrap='wrap' gutter={[8, 8]}>
                            <Col md={24} xs={24}>
                                <Form.Item name="customer" style={{margin: '0'}}>
                                    <Input defaultValue={data.customer} placeholder='Tên dự án / Tên khách hàng VD: VMN-COD-00011 / Ozawa Biladen'/>
                                </Form.Item> 
                            
                            </Col> 
                            <Col md={24} xs={24}> 
                            <ReactQuill 
                                theme="snow" 
                                value={value} 
                                onChange={setValue} 
                                modules={modules}
                                formats={formats}
                            /> 
                            </Col>
                            <Col>
                                <Button type='primary' size='default' htmlType="submit">Sửa</Button>
                            </Col>
                        </Row>
                </Form>
            </Modal>
            
        </>
        
    );
}

export default EditButton;