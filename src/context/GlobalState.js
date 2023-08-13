import { Global } from "@emotion/react";
import { createContext, useContext, useReducer } from "react";
import { AppReducer, initialState } from "./AppReducer";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //   everything wrapped inside the provider tag
  //   will be provided by state management and stored data
  //   {props.children} references all components (and pages)
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
// just put it in a variable (arrow func) so that I dont have to reimport it everytime
const useAuth = () => {
  return useContext(GlobalContext);
};
export default GlobalProvider;
