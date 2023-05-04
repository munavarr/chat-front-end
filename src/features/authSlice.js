import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosApi } from "./axiosApi";

const initialState = {
  msg: "",
  user: "",
  token: localStorage.getItem("token"),
  loading: false,
  error: "",
  email: "",
  id: "",
  role:"",
  number: null,
};
// const url = "http://192.168.29.54:4001";

// const LoginUrl = "/login";
// const productsurl = "/products"
export const SignInUser = createAsyncThunk("siginuser", async (data) => {
  try {
    const res = await AxiosApi.post("/auth/user-signin",data);
    localStorage.setItem("token",res.data.tokenRole.token)
    localStorage.setItem("role",res.data.tokenRole.role)
    return res.data;
  } catch {
    console.error("error");
  }
});

export const SignUpUser = createAsyncThunk("SignUpUser", async (userdata) => {
  const res = await AxiosApi.post("/user/signup", userdata);
  return await res.data;
});

export const Profile = createAsyncThunk("Profile", async (profileData) => {
  const res = await AxiosApi.post("/user/signup", profileData);
  return await res.data;
});

export const logouts = createAsyncThunk("SignUpUser", async (navigate) => {
  const res = await AxiosApi.post("/user/logout");

  return await res.data;
});

// export const products = createAsyncThunk("products",async()=>{

//     const res = await axios.get(url)
//   return await res.data
//   })

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getitem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getitem("user");
    },
    // logout: (state, action) => {
    //   state.token = null;
    //   localStorage.clear();

    // },
    addemail: (state, action) => {
      state.email = action.payload;
    },
    addi: (state, action) => {
      state.number = state.number + action.payload;
    },
  },
  extraReducers: {
    // signup

    [SignUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [SignUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.role = action.payload.result.role
      }
    },
    [SignUpUser.rejected]: (state, action) => {
      state.loading = false;
    },
    // profile
    [Profile.pending]: (state, action) => {
      state.loading = true;
    },
    [Profile.fulfilled]: (state, action) => {
    
    },
    [Profile.rejected]: (state, action) => {
      state.loading = false;
    },


    // signin

    [SignInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [SignInUser.fulfilled]: (state, action) => {
      state.loading = false;
      // if (action.payload.tokenRole.error) {
      //   state.error = action.payload.tokenRole.error;
      // } else {
        
        state.msg = action.payload.msg;
        
        state.user = action.payload.user;

        // localStorage.setItem("msg", msg);
        // localStorage.setItem("user", user);
        // localStorage.setItem("token", token);
        // localStorage.setItem("id", id);
      // }
    },
    [SignInUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logout, addi } = authSlice.actions;
export default authSlice.reducer;
