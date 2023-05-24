import react, { useReducer } from "react";
import menuReducer from "../reducers/menuReducer";
const context = react.createContext();

const MenuContext = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, { menu: false });
  return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>;
};

export { context, MenuContext };
