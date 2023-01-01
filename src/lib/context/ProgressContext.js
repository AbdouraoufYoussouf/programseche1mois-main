import React, { createContext, useEffect, useState } from 'react';
const MyContext = createContext();

const ProgressContext = ({ children }) => {

    // Checkbox
    const [progress, setProgress] = useState(0);
    const [progressTotal, setProgressTotal] = useState(0);
    const handleOnChange = (position,data,checkedState,setCheckedState) => {

        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);  

        const total = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + data.evolutionBloc;
                }
                return sum;
            },0);

        setProgress(total);

    };

    return (
        <MyContext.Provider value={{
            progressTotal, setProgressTotal,progress,handleOnChange
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { ProgressContext, MyContext }