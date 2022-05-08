import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgresse from '../components/CircularProgress';
import { faCaretDown, faCaretRight, faListSquares, } from '@fortawesome/free-solid-svg-icons'

import '../styles/detailStyle.css'
import Checkboxe from './CheckBox';

export const Accordion = ({ titre, index, id, soustitres, idP }) => {
    const [isActive, setIsActive] = useState(true);
    const [progress, setProgress] = useState(100);

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    // Checkbox

    const [checked, setChecked] = React.useState([
        {'checked1':false},
        {'checked2':false},
        {'checked3':false},
        {'checked4':false},
        {'checked5':false},
    ]);
    
    const handleChange = (event) => {
        setChecked({checked1:true});
      };
    return (
        <div style={{ display: 'flex',flexDirection: 'column', marginBottom: 10 }} >
            <NavLink onClick={toggleActive} key={id} to={'/program/' + idP + '/detail/' + id} className={(nav) => nav.isActive ? 'active' : 'item'}>
                <CircularProgresse progress={progress}/>
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />
                <div key={index} className='leson'>
                    <p>{titre}</p>
                </div>
                {isActive ?
                    <FontAwesomeIcon style={{ marginRight: 10 }} icon={faCaretDown} color='white' size="2x" />
                    : <FontAwesomeIcon style={{ marginRight: 10 }} icon={faCaretRight} color='white' size="2x" />
                }
            </NavLink>
            {
                isActive ? <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        soustitres.map((item, index) => {
                            return (
                                <div key={index} style={{ margin: 0, display: 'flex', flexDirection: 'row', width: 120, alignSelf: 'center', alignItems: 'center',height:30 }}>
                                    <Checkboxe checked={checked} handleChange={handleChange} />
                                    <Link style={{ fontSize: 16, textDecoration: 'none', color: 'white', marginLeft: 0 }}
                                        to={'#' + item.id}>{item.nom}</Link>
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
