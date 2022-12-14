import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgresse from '../components/CircularProgress';
import { faCaretDown, faCaretRight, faListSquares, } from '@fortawesome/free-solid-svg-icons'

import '../styles/detailStyle.css'
import { MyContext } from '../lib/context/ProgressContext';

export const Accordion = ({ idP, item }) => {
    const [isActive, setIsActive] = useState(true);
    
    const {progressTotal, setProgressTotal}=useContext(MyContext)
    console.log(progressTotal)
    // Checkbox
    const [progress, setProgress] = useState(0);

    const [checkedState, setCheckedState] = useState(
        new Array(item.soustitres.length).fill(false)
    );

    const handleOnChange = (position) => {
     
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
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

    const toggleActive = () => {
        setIsActive(!isActive)
    }


    useEffect(() => {

    }, [progress]);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }} >
            <div className='mereItem' >

                <NavLink to={'/program/' + idP + '/detail/' + item.id} className={(nav) => nav.isActive ? 'active' : 'item'}>
                    <CircularProgresse progress={progress} />
                    <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />
                    <div className='leson'>
                        <p>{item.titre}</p>
                    </div>
                </NavLink>
                <div onClick={toggleActive} >

                    {isActive ?
                        <FontAwesomeIcon style={{ marginRight: 10 }} className='icondown' icon={faCaretDown} color='white' size="2x" />
                        : <FontAwesomeIcon style={{ marginRight: 10 }} className='icondown' icon={faCaretRight} color='white' size="2x" />
                    }
                </div>
            </div>
            {
                isActive ? <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        item.soustitres.map((item, index) => {
                            return (
                                <div key={index} style={{ margin: 0, display: 'flex', flexDirection: 'row', width: 120, alignSelf: 'center', alignItems: 'center', height: 30 }}>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={item.nom}
                                        value={item.nom}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />

                                    <Link style={{ fontSize: 16, textDecoration: 'none', color: 'white', marginLeft: 0 }}
                                        to={'#' + item.nom}>
                                        <label htmlFor={`custom-checkbox-${index}`}>{item.nom}</label>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                    : <></>
            }


        </div>
    )
}

