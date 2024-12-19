import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user {
    name?: string;
    email?: string;
    password?: string;
}

const initialState: user = {
    name: "",
    email: "",
    password: ""
};

const userSlice = createSlice({
    name: "RegisterUser",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;

        }, setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;

        }, setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;

        },
        reset: (state) => {
            state.name = "";
            state.email = "";
            state.password = ""

        }
    }
})

export const { setEmail, setName,setPassword,reset }=userSlice.actions;
export default userSlice.reducer;