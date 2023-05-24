import React from "react";
import { useReducer } from "react";
import mainReducer from "../reducers/mainReducer";
const context = React.createContext();

const MainContext = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, { jobs: { jobsList: [], jobsNumber: 0 }, jobsStatus: { loading: true, err: false }, stats: { jobStats: {}, monthlyStats: [] } });

  return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>;
};

export { context, MainContext };
