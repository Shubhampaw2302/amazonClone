import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);



// For a more in-depth definition, context provides a way for us to make particular data available to all components 
// throughout the component tree no matter how deeply nested that component may be.

// https://www.smashingmagazine.com/2020/01/introduction-react-context-api/
// Check this for more info about context