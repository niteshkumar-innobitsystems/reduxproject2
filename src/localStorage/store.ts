export const saveStateLocalStorage=(state:any)=>{
try{
    const serializedState=JSON.stringify(state);
    localStorage.setItem('user',serializedState);
    }catch(error){
        console.error("Could not save to LocalStorage");
    }

};

export const loadStateFromLocalStorage=()=>{
    try{
        const serializedState=localStorage.getItem("user");
        if(serializedState===null)return undefined;
        return JSON.parse(serializedState);
    
    }catch(error){
        console.error("Could not load the Local Storage");
    }
}

export const removeFromLocalStorage=()=>{
    try{
        localStorage.removeItem('user');
    }catch(error){
        console.error("Could not delete");
    }

}