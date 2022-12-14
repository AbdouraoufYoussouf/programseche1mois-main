import React, { useEffect, useState } from 'react'
import '../../../styles/programStyle.css'
import doc from '../../../images/doc.PNG';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListSquares } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import CircularProgresse from '../../../components/CircularProgress';
import { LinearProgress } from '../../../components/LinearProgress';



export const Program = () => {
  const [sousBlocs, setSouBloc] = useState([])
  //console.log(sousBlocs)
  const [totalEvolution ,setToalEvolution] = useState()
  console.log(totalEvolution);
  useEffect(() => {
    let sousBlocs = [
      { idSBloc: 1, nomSBloc: 'jour1', evolutionBloc: 20, select: true },
      { idSBloc: 2, nomSBloc: 'jour2', evolutionBloc: 20, select: true },
      { idSBloc: 3, nomSBloc: 'jour3', evolutionBloc: 20, select: true },
      { idSBloc: 4, nomSBloc: 'jour4', evolutionBloc: 20, select: false },
      { idSBloc: 5, nomSBloc: 'jour5', evolutionBloc: 0, select: false },
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
    const sumEvolution = sousBlocs.map(item => item.evolutionBloc).reduce((prev, curr) => prev + curr, 0);
      setToalEvolution(sumEvolution)
    setPourcentage(sumEvolution)

  }, []);

  const [pourcentage, setPourcentage] = useState('50')
  const Seche = useSelector((state) => state.secheState)
  const Data = Seche.seche
  const prSemaine = Data.find(d => d.id === 1)
  const semaine = prSemaine.semaine
  //console.log(semaine)

  return (
    <div className='containerP'>
      <h1 className='title1' >Le program 30 jours de routines</h1>
      <div className='leftP'>
        <img src={doc} alt="image" />
        <h3>Transformation Faite Maison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <LinearProgress widthL='100%' widthP={pourcentage + '%'} />
          <h1 style={{ fontSize: 40, textAlign: 'center' }}>{pourcentage} %</h1>
        </div>
      </div>
      <div className='contentP'>
        <h1 className='title2'>Le program 30 jours de routines</h1>

        {
          semaine.map((item, index) => {
            return (
              <Link key={item.id} to={'detail/' + item.id} className='itemp'>
                <CircularProgresse progress={70} />
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faListSquares} color='white' size="lg" />

                <div key={index} className='leson'>
                  <p>{item.titre}</p>
                  <button style={{ backgroundColor: '#1888ff', cursor: 'pointer', fontSize: 18, color: 'white', border: 'none', padding: 5, borderRadius: 5 }}>Commencer</button>
                </div>
              </Link>
            )
          })
        }
        {/* {
          sousBlocs.map((item, index) => {
            return (
              <>
                <p>{item.nomSBloc}</p>
                <Checkbox key={index}

                  onChange={event => {
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
                        setPourcentage(totalEvolution)
                        return data
                      })
                    )
                  }}
                  checked={item.select} sx={{ color: pink[50], '&.Mui-checked': { color: pink[100], }, }}
                />
              </>
            )
          })

        } */}

      </div>
    </div>
  )
}
