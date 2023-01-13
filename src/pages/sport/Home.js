import React from 'react'
import {useParams,Link, useLocation } from "react-router-dom";
import '../../styles/stylesHome.css'
import raf from '../../images/raf.jpg';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

export default function Home() {

    const caddie = [
        {
          id:1,
          blocEvol:50,
          soutitres:[
            {book:1,price:20},
            {beer:6,price:20},
            {breas:2,price:20},
            {breas:2,price:20},
            {beach:8,price:20}
          ]
        },
        {
          id:2,
          blocEvol:50,
          soutitres:[
            {book:1,price:20},
            {beer:6,price:20},
            {breas:2,price:20},
            {breas:2,price:20},
            {beach:8,price:20}
          ]
        },
      ];
      
      console.log('debut du calcul')
      
      const total =  caddie.map((acc,index)=>{
        let result = {total:0,sumbloc:0}
        let item=acc.soutitres
        let tot =0
        
        let sum = item.reduce((accs,curs)=>{
            accs+=curs.price
            return accs
        }, 0 )

        tot +=sum
        console.log('resultat bloc',acc)

        result={total:tot,sumbloc:sum}
        return result
    },0)
    
    console.log('Total ',total)


    const Seche = useSelector((state)=> state.secheState)
    const Data = Seche.seche
    //console.log(Data)
    
    return (
        <div className='container'>
            <div className='hedercont' style={{
                backgroundImage: `url(${raf})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
                <div className='heder'>
                    <h2 className='h2'>Vous voulez etre beau pour l'été? si vous etes la c'est que
                        oui ,alors prepare toi et let go</h2>
                </div>
                <div className='heder h2hiden'>
                    <h2 className='h2 '>je sais que tu en as marre de ton bidon de ventre ,c'est le moment de t'en debarasser .</h2>
                </div>
            </div>
            <h2 style={{ textAlign:'center'}}>Liste des Programes</h2>
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
