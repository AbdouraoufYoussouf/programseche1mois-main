import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Datas";

const secheSlice = createSlice({
  name: "seche",
  initialState: {
    seche: Data,
    
    chechedState: [],
    progresState: [],
    isLoding: false,
    isMiniLoding: false,
  },
  reducers: {
    setSemaine: (state, { payload }) => {
      state.semaine = payload;
      console.log("semaine", payload);
    },

    setChechedStateStore: (state, { payload }) => {
      state.chechedState = payload;
    },

    setProgresState: (state, { payload }) => {
      let semaine = state.seche[0].semaine;
      let checheds = state.chechedState;

      let somme = 0
      semaine.map((jour, indeJ) => {
        let total = checheds.reduce((sum, curr, indexChecked) => {
          if (jour.id === indexChecked + 1) {
            curr.map((select, indexSelect) => {
              if (select === true) {
                sum += 20;
                somme+= 3
            }
        });
          }
          return sum;
        }, 0);

        if (jour.id === indeJ + 1) {
            jour.evolution = total;
        }

       //somme += total
    });
    if(somme===3){
        state.seche[0].evolutionTotal = somme+10
    }else if(somme===0){
        state.seche[0].evolutionTotal = somme
    }else{
        state.seche[0].evolutionTotal = somme+10
    }
    console.log('toal',somme)

    },

    onchangeCheched: (state, { payload }) => {
      const semaine = state.seche[0].semaine;
      const { idSem, idJour } = payload;
      semaine.map((sem, indexS) => {
        if (indexS+1 === idSem) {
          sem.soustitres.map((jour, indexJ) => {
            if (indexJ+1 === idJour) {
              jour.select = !jour.select;
            }
          });
        }
      });

      console.log("onchange", payload);
    },
  },
});

export const {
  setSemaine,
  onchangeCheched,
  setProgresState,
  setChechedStateStore,
} = secheSlice.actions;
export default secheSlice.reducer;
