import {createContext, useReducer} from 'react'

const  AuthContext = createContext()

const initialState  ={
    name :"",
    isActive :false
}
function authReducer(state,action){
    switch(action.type){
        case "login":
            return  {name : "login" , isActive : true}
        case "register":
            return  {name : "register" , isActive : true}
        case "close":
            return  {name : "" , isActive : false}
        default:
            return state;
    }
}
function AuthContextProvider({children}){
    const [authState , authDispatch] = useReducer(authReducer,initialState)

    return (
        <AuthContext.Provider value={{authState,authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
export {AuthContext};