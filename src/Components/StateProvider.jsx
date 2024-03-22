import React, { useContext, useReducer, createContext } from 'react'

//Build Data Layer
export const StateContext = createContext();

//Build Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState )}   >
        {children}
    </StateContext.Provider>
)

//Using in a component
export const useStateValue = () => useContext(StateContext);