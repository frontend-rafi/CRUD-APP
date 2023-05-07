import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//! create Action 
export const createUser = createAsyncThunk("createUser", async(data,{rejectWithValue})=>{
const response = await fetch("https://6437d32c894c9029e8c70109.mockapi.io/crud",{
  method:"POST",
  headers:{
   "Content-Type":"aplication/json"
  },
body:JSON.stringify(data)
});

try {
  const result = await response.json();
  return result;
} catch (error) {
return rejectWithValue(error);
}

});


//! Read user
export const showUser = createAsyncThunk("showUser", async({rejectWithValue})=>{
  const response = await fetch("https://6437d32c894c9029e8c70109.mockapi.io/crud");
  
  try {
    const result = await response.json();
    return result;
  } catch (error) {
  return rejectWithValue(error);
  }
  
  })

  
//! delete user
export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
  const response = await fetch(`https://6437d32c894c9029e8c70109.mockapi.io/crud/${id}`,{
    method:"DELETE"
  });
  
  try {
    const result = await response.json();
    return result;
  } catch (error) {
  return rejectWithValue(error);
  }
  
  })

//! update user
export const updateUserData = createAsyncThunk("updateUserData", async({id,name,email,age,gender},{rejectWithValue})=>{
  const response = await fetch(`https://6437d32c894c9029e8c70109.mockapi.io/crud/${id}`,{
    method:"PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id,name,email,age,gender}),
  });
  
  try {
    const result = await response.json();
    return result;
  } catch (error) {
  return rejectWithValue(error);
  }
  
  })


export const userSlice = createSlice({
  name: "userSlice",
  initialState:{
users:[],
loading:false,
error:null,
searchInput:[]
},
//! create reducer for searching function
reducer:{
  searchingData : (state,action)=>{
state.searchInput = action.payload
  },
},

  extraReducers: {
    //! create user
   [createUser.pending]:(state)=>{
state.loading=true;
   }, 
    [createUser.fulfilled]:(state,action)=>{
    state.loading=false;
   state.users.push(action.payload);
       },
       [createUser.rejected]:(state,action)=>{
      state.loading=false;
      state.error = action.payload;
    },
     //! show user
   [showUser.pending]:(state)=>{
    state.loading=true;
       }, 
        [showUser.fulfilled]:(state,action)=>{
        state.loading=false;
       state.users = action.payload;
           },
           [showUser.rejected]:(state,action)=>{
          state.loading=false;
          state.error = action.payload;
        },
  //! delete user
  [deleteUser.pending]:(state)=>{
    state.loading=true;
       }, 
        [deleteUser.fulfilled]:(state,action)=>{
        state.loading=false;
const {id} = action.payload
        if(id){
          state.users = state.users.filter
          ((user)=>
           user.id !== id);
         
        }
      
           },
           [deleteUser.rejected]:(state,action)=>{
          state.loading=false;
          state.error = action.payload;
        },
        [updateUserData.pending]: (state) => {
          state.loading = true;
        },
        [updateUserData.fulfilled]: (state, action) => {
          console.log("updated user fulfilled", action.payload);
          state.loading = false;
          state.users = state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          );
        },
        [updateUserData.rejected]: (state, action) => {
          state.loading = false;    
          state.error = action.payload.message;
        },
  },

  
      
});



export default userSlice.reducer
export const {searchingData} = userSlice.actions