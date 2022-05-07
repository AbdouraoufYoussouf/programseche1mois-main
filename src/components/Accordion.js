import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCalendar, faCaretDown, faCaretRight, faCarRear, faCheckCircle, faListDots, faListSquares, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

import '../styles/detailStyle.css'

export const Accordion = ({ titre, index, id, soustitres, idP }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div style={{ display: 'flex',flexDirection: 'column', marginBottom: 10 }} >
            <NavLink onClick={toggleActive} key={id} to={'/program/' + idP + '/detail/' + id} className={(nav) => nav.isActive ? 'active' : 'item'}>
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faCheckCircle} color='white' size="xl" />
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
                                <div key={index} style={{ marginLeft: 10, marginBottom: 7, display: 'flex', flexDirection: 'row', width: 100, alignSelf: 'center', alignItems: 'center' }}>
                                    <input style={{ color: 'red', width: 18, height: 18 }} type="checkbox" />
                                    <Link style={{ fontSize: 16, textDecoration: 'none', color: 'white', marginLeft: 5 }}
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
