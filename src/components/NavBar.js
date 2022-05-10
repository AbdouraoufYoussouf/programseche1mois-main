import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBars, faCalendar, faCaretDown, faCaretRight, faCarRear, faCheckCircle, faListDots, faListSquares, faTimeline, faTimes, faTimesCircle, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

import { NavbarCont, MenuIcon, Madal, Left, Right, Ul, ContainerModal } from './navstyle'

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }



    const navBar = [
        { id: 1, titre: 'Home', route: '/' },
        { id: 1, titre: 'Boutique', route: 'boutique' },
    ]
    return (
        <NavbarCont >
            <Left>
                <span>DoctRaf</span>
            </Left>
            <Right >
                <Ul display='none'>
                    {
                        navBar.map((item, index) => {
                            return (
                                <li >
                                    <NavLink key={index} to={item.route} className={(nav) => nav.isActive ? 'actived' : 'navlink'} >
                                        {item.titre}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </Ul>

                <MenuIcon className='menu-icon' onClick={handleClick} >
                    {click ?
                        <h2 style={{ marginTop: -14, marginBottom: 0, textAlign: 'center', color: 'white', fontSize: 40, }}>X</h2>
                        : <FontAwesomeIcon icon={faBars} color='white' size="2x" />
                    }
                </MenuIcon>
                {
                    click ?
                        <ContainerModal onClick={()=> setClick(false)}>

                            <Madal onClick={()=> setClick(true)}>
                                <Ul display='flex' >
                                    {
                                        navBar.map((item, index) => {
                                            return (
                                                <li >
                                                    <NavLink onClick={handleClick} key={index} to={item.route} className={(nav) => nav.isActive ? 'actived' : 'navlink'} >
                                                        {item.titre}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </Ul>
                            </Madal>
                        </ContainerModal>
                        : <></>
                }

            </Right>
        </NavbarCont>

    )
}
