import React, { useState } from 'react'

const test = () => {
    const [progress, setProgress] = useState(0);

    const handleOnChange = (position) => {
     
        const updatedCheckedState = checkedState.map((cheched, index) =>
            index === position ? !cheched : cheched
        );

        setCheckedState(updatedCheckedState);

        const total = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + item.soustitres[index].evolutionBloc;
                }
                return sum;
            },
            0
        );
        
        setProgress(total);

    };
  return (
    <div>test</div>
  )
}

export default test