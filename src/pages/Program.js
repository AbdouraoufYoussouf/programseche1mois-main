import React from 'react'
import '../styles/programStyle.css'
import doc from '../images/doc.PNG';
import { Link,} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListSquares } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import CircularProgresse from '../components/CircularProgress';

export const Program = () => {
  const Seche = useSelector((state) => state.secheState)
  const Data = Seche.seche
  const percentage = 66;
  const prSemaine = Data.find(d => d.id === 1)
  const semaine = prSemaine.semaine
  console.log(semaine)
  return (
    <div className='containerP'>
      <h1 className='title1' >Le program 30 jours de routines</h1>
      <div className='leftP'>
        <img src={doc} alt="image" />
        <h3>Transformation Faite Maison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          bar de progresssion
          <h1 style={{ fontSize: 40, textAlign: 'center' }}>36%</h1>
        </div>
      </div>
      <div className='contentP'>
        <h1 className='title2'>Le program 30 jours de routines</h1>

        {
          semaine.map((item, index) => {
            return (
              <Link key={item.id} to={'detail/' + item.id} className='itemp'>
                <CircularProgresse/>
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />

                <div key={index} className='leson'>
                  <p>{item.titre}</p>
                  <button style={{ backgroundColor: '#1888ff', cursor: 'pointer', fontSize: 18, color: 'white', border: 'none', padding: 5, borderRadius: 5 }}>Commencer</button>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
