import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import chatSlice from "./features/chatSlice";
// import categorySlice from "./features/categorySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
    
  },
});
export default store;
