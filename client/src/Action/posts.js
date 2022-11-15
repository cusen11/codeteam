import axios from "axios"; 
import { GetPost,GetPostByUser } from "../reducers/Posts";
import { error, success, warning } from "./func";

export const LikePostAPI = async (id,token,dispatch,limit,page) => {   
    try {
       
        const config = { 
            headers:{ 
                'x-auth-token': token
            } 
        } 
        axios.put(`/api/posts/like/${id}`,config).then(()=>{
            GetAllPostPagination(token, dispatch,page,limit)
        });  
        
    } catch (err) {
        console.log(err.respond.data.msg)
    }
} 
export const UnLikePostAPI = async (id,token,dispatch,limit,page) => {   
    try {
        const config = { 
            headers:{ 
                'x-auth-token': token
            } 
        }
        axios.put(`/api/posts/unlike/${id}`,config).then(()=>{
            GetAllPostPagination(token, dispatch,page,limit)
        });   
    } catch (err) {
        console.log(err.respond.data.msg)
    }
} 
export const AngryPostAPI = async (id,token,dispatch,limit,page) => {    
    try {
       
        const config = { 
            headers:{ 
                'x-auth-token': token
            } 
        } 
        axios.put(`/api/posts/angry/${id}`,config).then(()=>{ 
            GetAllPostPagination(token, dispatch,page,limit) 
        });  
        
    } catch (err) {
        console.log(err.respond.data.msg)
    }
} 
export const UnAngryPostAPI = async (id,token,dispatch,limit,page) => {   
    try {
        const config = { 
            headers:{ 
                'x-auth-token': token
            } 
        }
        axios.put(`/api/posts/unangry/${id}`,config).then(()=>{
            GetAllPostPagination(token, dispatch,page,limit)
        });   
    } catch (err) {
        console.log(err.respond.data.msg)
    }
}
export const NormalPostAPI = async (id,token,dispatch,limit,page) => {   
    try {
       
        const config = { 
            headers:{ 
                'x-auth-token': token
            } 
        } 
        axios.put(`/api/posts/normal/${id}`,config).then(()=>{
            GetAllPostPagination(token, dispatch,page,limit)
        });  
        
    } catch (err) {
        console.log(err.respond.data.msg)
    }
} 
export const UnNormalPostAPI = async (id,token,dispatch,limit,page) => {   
    try {
        const config = { 
            headers:{ 
                'x-auth-token': token
            } 
        }
        axios.put(`/api/posts/unnormal/${id}`,config).then(()=>{
            GetAllPostPagination(token, dispatch,page,limit)
        });   
    } catch (err) {
        console.log(err.respond.data.msg)
    }
}
export const GetAllPost = async(token,dispatch) =>{   
    try {
        const config = { 
            headers:{ 
                'x-auth-token': token
            }
        } 
        await axios.get('/api/posts/', config).then(function(res){
            dispatch(GetPost(res)) 
        }) 
    } catch (err) {
        console.log(err.respond.data.msg)
    } 
     
}

export const GetPostById = async(token,id) =>{   
    try {
        const config = { 
            headers:{ 
                'x-auth-token': token
            }
        }  
        const res = await axios.get(`/api/posts/${id}`, config)
        return res.data
    } catch (err) {
        console.log(err.respond.data.msg)
    } 
     
}

export const GetPostByUserId = async(token,dispatch) =>{   
    try {
        const config = { 
            headers:{ 
                'x-auth-token': token
            }
        } 
        await axios.get('/api/posts/dashboard/user/posts', config).then(function(res){ 
            dispatch(GetPostByUser(res)) 
        }) 
    } catch (err) {
        console.log(err.respond.data.msg)
    } 
     
}

export const CreatePostAPI = async(data,token,dispatch,limit) => {
    try {
        const body = JSON.stringify(data)
        const config = {
            headers: {
                'x-auth-token': token,
                'Content-Type': 'application/json'
            }
        } 
        await axios.post('/api/posts/add', body, config).then(()=>{
            success('Create post Success!!!')
            GetAllPostPagination(token, dispatch,1,limit)
            
        }) 
    } catch (err) {
        error(err.respond.data.msg) 
    }
}

export const  PaginationArray = (array, pageSize, PageNumber) =>{
    return array.slice((PageNumber - 1) * pageSize, PageNumber * pageSize);
}

export const AddComment = async (token, text,id, dispatch,dashboard,limit) =>{
    try {
        const config = {
            headers:{
                'x-auth-token': token,
                'Content-Type': 'application/json'
            }
        }
        await axios.put(`/api/posts/comment/${id}`, text, config).then(()=>{
            if(dashboard){ 
                GetPostByUserId(token,dispatch) 
            }
            else{ 
                GetAllPostPagination(token, dispatch,1,limit)
            }
        }) 

    } catch (err) { 
        error(err.response.data.msg)
    }
}
export const removeComment = async(token,postId,id,dispatch,dashboard,limit) =>{ 
        try {
            const config = {
                headers: {
                    'x-auth-token': token
                }
            }
            if (window.confirm('Bạn có chắc chắn xóa comment này?'))
                await axios.delete(`/api/posts/comment/${postId}/${id}`,config).then((res)=>{
                    if(dashboard){
                        success('Xóa thành công!!!')
                        GetPostByUserId(token,dispatch) 
                    }
                    else{
                        success('Xóa thành công!!!')
                        GetAllPostPagination(token, dispatch,1,limit)
                    }
                }) 
        } catch (err) {  
            error(err.response.data.msg)
        } 
} 

export const GetAllPostPagination = async (token,dispatch ,page,limit) =>{ 
    
    try {
        const config = {
            headers:{
                'x-auth-token': token,
                'Content-Type': 'application/json'
            },
           
        },
        body = { 
            page,
            limit 
        }
        const res = await axios.post('/api/posts/page',body,config); 
        dispatch(GetPost(res.data))  
    } catch (err) {
        error(err.response.data.msg)
    } 
}
export const removePostById = async(token, data, dispatch,page,limit) => {  
    try {
        const config={
            headers:{
                'x-auth-token': token
            }
        }
        if (window.confirm('Bạn có chắc chắn xóa?')){  
            if(data.user.level !== 1){
                warning('Chỉ leader mới được phép xóa !!!')
            }
            else{
                await axios.delete(`/api/posts/${data._id}`,config)
                GetAllPostPagination(token, dispatch,page,limit)  
            }
            
        } 
    } catch (err) {
        error(err.response.data.msg)
    }
}

export const SearchPostAPI = async(value, tokenKey, dispatch,) => { 
    try {
        const config = { 
            headers:{ 
                'x-auth-token': tokenKey
            }
        } 
        await axios.post(`/api/posts/search/${value}`, config).then(function(res){ 
            dispatch(GetPost(res.data))  
        }) 
    } catch (err) {
        console.log(err.respond.data.msg)
    } 
}