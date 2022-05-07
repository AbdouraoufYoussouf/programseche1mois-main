import React from 'react'
import {useParams,Link, useLocation } from "react-router-dom";
import '../styles/stylesHome.css'
import raf from '../images/raf.jpg';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

export default function Home() {
    const Seche = useSelector((state)=> state.secheState)
    const Data = Seche.seche
    //console.log(Data)
    
    return (
        <div className='container'>
            <div style={{
                width: '100%', height: '400px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
                backgroundImage: `url(${raf})`, backgroundSize: 'cover', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat'
            }}>
                <div className='heder'>
                    <h2 style={{ fontSize: 25, textAlign: 'center' }}>Vous voulez etre beau pour l'été? si vous etes la c'est que
                        oui ,alors prepare toi et le'st go</h2>
                </div>
                <div className='heder'>
                    <h2 style={{ fontSize: 25, textAlign: 'center' }}>je sais que tu en as marre de ton biton de ventre ,c'est le moment de t'en debarasser .</h2>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                {
                    Data.map((item, index) => {
                        return (
                            
                            <Link className='carditem' to={'/program/'+item.id} key={index}>
                                <Card titre={item.nom}
                                    categorie={item.categorie}
                                    imag={item.photo} />
                            </Link >
                        )
                    })
                }

            </div>
        </div>
    )
}
