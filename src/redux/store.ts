import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/loginSlice"
import { loadStateFromLocalStorage, saveStateLocalStorage } from "../localStorage/store";

const preloadedState = loadStateFromLocalStorage();
console.log(preloadedState);
const store = configureStore({
    
    reducer: { login: userReducer}, 
    preloadedState,
})
store.subscribe(()=>saveStateLocalStorage(store.getState()));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;