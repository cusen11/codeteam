import { Button, Col, Form, Input, Row } from 'antd'; 
import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { CreatePostAPI } from '../Action/posts'; 

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

function CreatePost({dataToken,limit}) {  
    const token = dataToken.value.request_token.token  
     
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const newValue = {
            customer: values.customer,
            content: value
        } 
        CreatePostAPI(newValue,token,dispatch,limit)   
        form.resetFields();  
        setValue('') 

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
    const [value, setValue] = useState('');  
    return (
        <> 
            <Form name="basic" form={form} onFinish={onFinish}>  
                    <Row justify='end' wrap='wrap' gutter={[8, 8]}>
                        <Col md={24} xs={24}>
                            <Form.Item name="customer" style={{margin: '0'}}>
                                <Input placeholder='Tên dự án / Tên khách hàng VD: VMN-COD-00011 / Ozawa Biladen'/>
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
                            <Button type='primary' size='default' htmlType="submit">Thêm</Button>
                        </Col>
                    </Row>
            </Form>
        </>
    );
}

export default CreatePost;