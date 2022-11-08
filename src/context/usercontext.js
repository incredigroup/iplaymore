const type = {
    USERINFO: "USERINFO",
    LOGINED: "LOGINED"
  };
  
  import { createContext, useReducer } from "react";
  const context = createContext();
  
  const reducer = (state, action) => {
    switch (action.type) {
      case type.USERINFO:
        return {
          ...state,
          nav: action.payload,
        };
      case type.LOGINED:
        return {
          ...state,
          logined: action.payload,
        };
      default:
        return state;
    }
  };
  
  const state = (props) => {
    const initialState = {
      logined: false,
      account: "",
    };
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const logStatus = (value) => {
      dispatch({
        type: type.LOGINED,
        payload: value,
      });
    }
  
    return (
        <context.Provider
            value={{
            ...state,
            logStatus: logStatus,
            }}  
        >
            {props.children}
        </context.Provider>
    );
  };
  
  export default state;
  
  export { context };
  