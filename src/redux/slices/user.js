import { createSlice } from "@reduxjs/toolkit";
import { GET_TOKEN, SET_TOKEN } from "../../utils/token";

const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            token: GET_TOKEN(),
        },
        reducers: {
            // 用户登录//
            userLogin: (state, action) => {
                state.token = action.payload;
                SET_TOKEN(state.token);
            }
        }
    }
);

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;