import React from 'react'
import '../styles/programStyle.css'
import doc from '../images/doc.PNG';
import { Link,useParams, useLocation  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,  faListSquares } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

export const Program = () => {
  const Seche = useSelector((state)=> state.secheState)
  const Data = Seche.seche

  const prSemaine = Data.find(d => d.id === 1)
  const semaine = prSemaine.semaine
  console.log(semaine)
  return (
    <div className='containerP'>
      <div className='leftP'>
        <img src={doc} alt="image" />
        <h3>Transformation Faite Maison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          bar de progresssion
          <h1 style={{ fontSize: 40, textAlign: 'center' }}>36%</h1>
        </div>
      </div>
      <div className='contentP'>
        <h1>Le program 30 jours de routines</h1>

          {
            semaine.map((item, index) => {
              return (
                <Link key={item.id}  to={'detail/'+item.id} className='itemp'>
                  <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faCheckCircle} color='white' size="2x" />
                  <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />

                  <div key={index} className='leson'>
                    <p>{item.titre}</p>
                    <button style={{ backgroundColor: '#1888ff',cursor:'pointer', fontSize: 18, color: 'white', border: 'none', padding: 5, borderRadius: 5 }}>Commencer</button>
                  </div>
                </Link>
              )
            })
          }
      </div>
    </div>
  )
}
