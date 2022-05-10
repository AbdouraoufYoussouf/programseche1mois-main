import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgresse from '../components/CircularProgress';
import { faCaretDown, faCaretRight, faListSquares, } from '@fortawesome/free-solid-svg-icons'

import '../styles/detailStyle.css'
import { pink } from '@mui/material/colors';

import { Checkbox } from '@mui/material';

export const Accordion = ({ titre, index, id, soustitres, idP }) => {
    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(100);

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    // Checkbox
    const [sousBlocs, setSouBloc] = useState([])
    //console.log(sousBlocs)
    const [totalEvolution, setToalEvolution] = useState()
    console.log(totalEvolution);
    useEffect(() => {
        let sousBlocs = [
            { idSBloc: 1, nomSBloc: 'Jour 1', evolutionBloc: 20, select: true },
            { idSBloc: 2, nomSBloc: 'Jour 2', evolutionBloc: 20, select: true },
            { idSBloc: 3, nomSBloc: 'Jour 3', evolutionBloc: 20, select: true },
            { idSBloc: 5, nomSBloc: 'Jour 5', evolutionBloc: 0, select: false },
            { idSBloc: 4, nomSBloc: 'Jour 4', evolutionBloc: 20, select: false },
        ];

        setSouBloc(
            sousBlocs.map(s => {
                return {
                    idSBloc: s.idSBloc,
                    nomSBloc: s.nomSBloc,
                    evolutionBloc: s.evolutionBloc,
                    select: s.select
                }
            })
        );
    }, []);

    const [checked, setChecked] = React.useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }} >
            <div className='mereItem' style={{}}>

                <NavLink key={id} to={'/program/' + idP + '/detail/' + id} className={(nav) => nav.isActive ? 'active' : 'item'}>
                    <CircularProgresse progress={progress} />
                    <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />
                    <div key={index} className='leson'>
                        <p>{titre}</p>
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
                        sousBlocs.map((item, index) => {
                            return (
                                <div key={index} style={{ margin: 0, display: 'flex', flexDirection: 'row', width: 120, alignSelf: 'center', alignItems: 'center', height: 30 }}>
                                    <Checkbox onChange={event => {
                                        let checked = event.target.checked;
                                        setSouBloc(
                                            sousBlocs.map(data => {
                                                if (item.idSBloc === data.idSBloc) {
                                                    data.select = checked;
                                                }
                                                if (item.idSBloc === data.idSBloc && item.select === true) {
                                                    data.evolutionBloc = 20;
                                                } else {
                                                    data.evolutionBloc = 0;
                                                }

                                                return data
                                            })
                                        )
                                    }} checked={checked} sx={{ color: pink[50], '&.Mui-checked': { color: pink[100], }, }} />
                                    <Link style={{ fontSize: 16, textDecoration: 'none', color: 'white', marginLeft: 0 }}
                                        to={'#' + item.id}>{item.nomSBloc}</Link>
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
