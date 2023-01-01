import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgresse from '../components/CircularProgress';
import { faCaretDown, faCaretRight, faListSquares, } from '@fortawesome/free-solid-svg-icons'

import '../styles/detailStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { onchangeCheched } from '../Redux/SecheSlice';

export const Accordion = ({ idP, item ,progress}) => {

    const [isActive, setIsActive] = useState(false);
    // Checkbox
    
    const dispach = useDispatch()
    const chechedState = useSelector((state) => state.secheState.chechedState)
    //console.log('chechedState',chechedState)

    // const [checkedState, setCheckedState] = useState(
    //     new Array(item.soustitres.length).fill(false)
    // );

    const handleOnChange = (idSem,idJour) => {
        dispach(onchangeCheched({idSem,idJour}))
    };

    const toggleActive = () => {
        setIsActive(!isActive)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }} >
            <div className='mereItem' >

                <NavLink onClick={toggleActive}  to={'/program/' + idP + '/detail/' + item.id} className={(nav) => nav.isActive ? 'active' : 'item'}>
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
                        item.soustitres.map((jour, index) => {
                            return (
                                <div key={index} style={{ margin: 0, display: 'flex', flexDirection: 'row', width: 120, alignSelf: 'center', alignItems: 'center', height: 30 }}>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={jour.nom}
                                        value={jour.nom}
                                        checked={jour.select}
                                        onChange={() => handleOnChange(item.id,jour.id)}
                                    />

                                    <a style={{ fontSize: 16, textDecoration: 'none', color: 'white', marginLeft: 0,}}
                                        href={'#'+jour.slug}>
                                        <label >{jour.nom}</label>
                                    </a>
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

