import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBare, Header, Left, Right } from './navstyle'

export default function NavBar() {
    const navBar = [
        { id: 1, titre: 'Home', route: '/' },
        // { id: 1, titre: 'Boutique', route: 'boutique' },
    ]
    return (
        <NavBare>
            <Header>
                <Left>
                    <h1>DocteurRaf</h1>
                </Left>
                <Right >
                    <ul>
                        {
                            navBar.map((item, index) => {
                                return (
                                    <NavLink key={index} to={item.route} className={(nav) => nav.isActive ? 'actived' : 'navlink'} >
                                        {item.titre}
                                    </NavLink>
                                )
                            })
                        }
                    </ul>
                </Right>
            </Header>
        </NavBare>
    )
}
