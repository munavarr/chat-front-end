import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosApi } from "./axiosApi";

// import { AxiosApi } from "./axiosApi";



const url = "";

const initialState = {
  cartitems: "",
  itemsList: [
   
  ],
  usermsg: "",
  id:null,
  allcontacts : [],
  allchatlist: [],
  chatgetsall: [],
  messages :null

};

const path = "/user"
export const contacts = createAsyncThunk("contacts", async () => {
  try {
    const res = await AxiosApi.get(`${path}/user-all`);
    return res.data;
  } catch {
    console.error("error");
  }
});
const chats = "/chat"
export const chatlist = createAsyncThunk("chatlist", async (userid) => {
  try {
    const res = await AxiosApi.post(`${chats}/user`,userid);
    return res.data;
  } catch {
    console.error("error");
  }
});
export const chatget = createAsyncThunk("chatget", async () => {
  try {
    const res = await AxiosApi.get(`${chats}/get`);
    return res.data;
  } catch {
    console.error("error");
  }
});

export const messageget = createAsyncThunk("messageget", async () => {
  try {
    const res = await AxiosApi.get(`${message}/get/${chatId}`);
    return res.data;
  } catch {
    console.error("error");
  }
});

const message = "/message"

export const messagesend = createAsyncThunk("messagesend", async (mes) => {
  try {
    const res = await AxiosApi.post(`${message}/send`,mes);
    return res.data;
  } catch {
    console.error("error");
  }
});

export const groupcreate = createAsyncThunk("groupcreate", async (grpdata) => {
  try {
    const res = await AxiosApi.post(`${chats}/group/create`,grpdata);
    return res.data;
  } catch {
    console.error("error");
  }
});



export const updateproducts = createAsyncThunk(
  "updateproducts",
  async (carts) => {
    const res = await AxiosApi.put(url, { carts });
    return await res.data;
  }
);

export const propost = createAsyncThunk("propost", async (postdata) => {
  try {
    const res = await AxiosApi.post("/product/new", postdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    return res.data;
  } catch {
    console.error("error");
  }
});
// export const proupdate  = createAsyncThunk("proupdate",async(postdata)=>{
//   const res = await axios.put(url,{postdata})
//   return await res.data
// })

export const prodelete = createAsyncThunk("propost", async (postdata) => {
  const res = await AxiosApi.delete(url, { postdata });
  return await res.data;
});

export const prouser = createAsyncThunk("prouser", async (id) => {
  const res = await AxiosApi.get(`/user/update${id}`);
  return await res.data;
});
// prouser need an extraReducer

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    increment: (state, action) => {
    
    },
    addid: (state, action) => {
    state.id = action.payload
    console.log(state.id)
    }
  },
  extraReducers: {
    [contacts.pending]: (state, action) => {
      state.loading = true;
    },
    [contacts.fulfilled]: (state, action) => {
      state.loading = false;
     state.allcontacts = action.payload.result
    },
    [contacts.rejected]: (state, action) => {
      state.loading = true;
    },
    [chatlist.pending]: (state, action) => {
      state.loading = true;
    },
    [chatlist.fulfilled]: (state,action) => {
      state.loading = false;
      state.allchatlist = action.payload
     
    },
    [chatlist.rejected]: (state, action) => {
      state.loading = true;
    },
    [chatget.pending]: (state, action) => {
      state.loading = true;
    },
    [chatget.fulfilled]: (state, action) => {
      state.loading = false;
      state.chatgetsall = action.payload
      console.log(state.chatgetsall)
    },
    [chatget.rejected]: (state, action) => {
      state.loading = true;
    },
    [messagesend.pending]: (state, action) => {
      state.loading = true;
    },
    [messagesend.fulfilled]: (state, action) => {
      state.loading = false;
     
    },
    [messagesend.rejected]: (state, action) => {
      state.loading = true;
    },
    [groupcreate.pending]: (state, action) => {
      state.loading = true;
    },
    [groupcreate.fulfilled]: (state, action) => {
      state.loading = false;
     
    },
    [groupcreate.rejected]: (state, action) => {
      state.loading = true;
    },

    [messageget.pending]: (state, action) => {
      state.loading = true;
    },
    [messageget.fulfilled]: (state, action) => {
      state.loading = false;
     
    },
    [messageget.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { increment, decrement, addsingle,addid } = chatSlice.actions;
export default chatSlice.reducer;
