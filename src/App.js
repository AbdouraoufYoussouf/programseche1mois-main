import { Route, Routes } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import "./App.css";
import { Boutique } from "./pages/boutique/Boutique";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./pages/sport/Home";
import { Details } from "./pages/sport/program/Details";
import { Program } from "./pages/sport/program/Program";
import { setChechedStateStore, setProgresState } from "./Redux/SecheSlice";

function App() {
  const dispach = useDispatch();
  const Data = useSelector((state) => state.secheState.seche);
  const semaine = Data[0].semaine;
  const chechedStat = semaine.map((sem) => {
    let temps = new Array();
    sem.soustitres.map((jour) => {
      //console.log('second',jour.select)
      temps.push(jour.select);
    });
    return temps;
  });

  useEffect(() => {
    dispach(setChechedStateStore(chechedStat));
    dispach(setProgresState());
  }, [chechedStat]);
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programmseche" element={<Home />} />
        <Route path="boutique" element={<Boutique />} />
        <Route path="program/:idP" element={<Program />} />
        <Route path="program/:idP/detail/:idItem" element={<Details />} />
        <Route path="program/:idP/detail/:idItem/:jour" element={<Details />} />
      </Routes>
    </Fragment>
  );
}

export default App;
