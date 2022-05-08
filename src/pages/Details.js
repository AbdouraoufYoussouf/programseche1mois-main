import React, { useState } from 'react'
import '../styles/detailStyle.css'
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCarRear, faCheckCircle, faListDots, faListSquares } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Accordion } from '../components/Accordion';
import Checkboxe from '../components/CheckBox';
import { LinearProgress } from '../components/LinearProgress';


export const Details = () => {
  const [pourcentage,setPourcentage] = useState('50')

  const Seche = useSelector((state) => state.secheState)
  const Data = Seche.seche

  const { idP, idItem } = useParams()
  //console.log(idP)

  const prSemaine = Data.find(d => d.id === parseInt(idP))
  const semaine = prSemaine.semaine
  const detailData = semaine.find(s => s.id == idItem)
//// Checkbox
const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(!checked);
      };
  return (
    <div className='containerD'>
      <div className='leftD' >
        <div style={{ fontSize: 30, textAlign: 'center', backgroundColor: 'blueviolet', width: '100%', borderRadius: 15, marginBottom: 15 }}>
      <LinearProgress widthL='100%' widthP={pourcentage+'%'} title={pourcentage+'% Completé'}/>

        </div>
        <div className='contAcordon'>
          {
            semaine.map((item, index) => {
              return (
                <Accordion key={index} titre={item.titre} index={index} id={item.id} idP={idP} soustitres={item.soustitres} />
              )
            })
          }
        </div>
      </div>

      <div className='content'>
        <h1>{detailData.titre}</h1>
        {detailData.intro}
        <img style={{ width: 400, height: 'auto', borderRadius: 15, alignSelf: 'center' }} src={detailData.photo} />
        {
          detailData.soustitres.map((item, index) => {
            return (
              <div id={item.id} key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start', width: '100%' }}>
                <h2 style={{display:'flex',alignItems:'center'}}><Checkboxe checked={checked} handleChange={handleChange} /> {item.nom} </h2>
                <p> Durée total aproximative : <code style={{ fontSize: 18 }}>{item.dure}</code></p>
                <p style={{ fontSize: 18, margin: 0 ,textAlign:'left'}}>{item.desc} </p>
                <h2>Routine à suivre:</h2>
                {
                  item.routines.map((item, index) => {
                    return (
                      <div key={index} style={{width:'100%', display: 'flex', flexDirection: 'column',alignItems:'center',}}>
                        <div style={{width:'100%'}}>
                          <h3 style={{ textAlign: 'left', margin: 5 }}>{item.titre} </h3>
                          <p style={{ fontSize: 18, marginBottom: 15, textAlign: 'left' }} >{item.desc} </p>

                        </div>

                        <div >
                          <iframe className='video'
                            src={item.url}
                            title="YouTube video player" allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture"
                          >
                          </iframe>

                        </div>

                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
