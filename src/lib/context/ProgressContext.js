import React, { createContext, useEffect, useState } from 'react';
const MyContext = createContext();

const ProgressContext = ({ children }) => {

     // Checkbox
     const [progressTotal, setProgressTotal] = useState(0);

    return (
        <MyContext.Provider value={{
            progressTotal, setProgressTotal,
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { ProgressContext, MyContext }