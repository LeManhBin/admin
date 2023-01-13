import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"

const INITTAL_STATE = {
    darkMode: false
    
}

export const DarkModeContext = createContext(INITTAL_STATE)

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITTAL_STATE);

    return(
        <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}}>{children}</DarkModeContext.Provider>
    )
}