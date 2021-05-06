import React, { createContext, useContext, useReducer } from "react";

//prepare the datalayer
export const StateContext = createContext();

//wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layers
export const useStateValue = () => useContext(StateContext);
