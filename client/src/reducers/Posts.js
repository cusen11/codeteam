import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
    name:'Posts',
    initialState:{ 
        value:{
            currentPage: 1,
            totalItem: 1,
            results:[],
            totalPage:10000
        }
    },
    reducers:{
        GetPost: (state, actions) =>{
            state.value = actions.payload;   
        },
        GetPostByUser: (state, actions) =>{ 
            state.users = actions.payload.data; 
        }
    }
})

export const { GetPost,GetPostByUser } = PostSlice.actions;
export default PostSlice.reducer
