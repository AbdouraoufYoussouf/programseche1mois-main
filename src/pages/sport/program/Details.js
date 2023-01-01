import React, { useEffect, useState } from "react";
import "../../../styles/detailStyle.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "../../../components/Accordion";
import Checkboxe from "../../../components/CheckBox";
import { LinearProgress } from "../../../components/LinearProgress";
import {
  onchangeCheched,
  setChechedStateStore,
  setProgresState,
} from "../../../Redux/SecheSlice";
import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";

export const Details = () => {
  const dispach = useDispatch();
  const [pourcentage, setPourcentage] = useState("50");

  const Data = useSelector((state) => state.secheState.seche);

  const { idP, idItem } = useParams();
  const idSemaine = parseInt(idItem)
  //console.log(idP)

  const prSemaine = Data.find((d) => d.id === parseInt(idP));
  const semaine = prSemaine.semaine;
  const detailData = semaine.find((s) => s.id == idItem);
  //// Checkbox
  const handleOnChange = (idSem, idJour) => {
    dispach(onchangeCheched({ idSem, idJour }));
  };

 

  return (
    <div className="containerD">
      <div className="leftD">
        <div
          style={{
            fontSize: 30,
            textAlign: "center",
            backgroundColor: "blueviolet",
            width: "100%",
            borderRadius: 15,
            marginBottom: 15,
          }}
        >
          <LinearProgress
            widthL="100%"
            widthP={Data[0].evolutionTotal + "%"}
            title={Data[0].evolutionTotal + "% Completé"}
          />
        </div>
        <div className="contAcordon">
          {semaine.map((item, index) => {
            return (
              <Accordion
                key={index}
                item={item}
                idP={idP}
                progress={item.evolution}
              />
            );
          })}
        </div>
      </div>

      <div className="content">
        <h1>{detailData.titre}</h1>
        {detailData.intro}
        <img
          style={{
            width: "80%",
            height: "auto",
            borderRadius: 15,
            alignSelf: "center",
          }}
          src={detailData.photo}
        />
        {detailData.soustitres.map((item, index) => {
          return (
            <div
              id={item.id}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "self-start",
                width: "100%",
              }}
            >
              <h2 id={item.slug}
                className="jour"
                style={{
                  display: "flex",
                  color: "#0066CC",
                  zIndex: 200,
                  alignItems: "center",
                  width: "30%",
                  top: 10,
                  position: "sticky",
                  borderRadius: 7,
                }}
              >
                <Checkbox
                  onChange={() => handleOnChange(idSemaine,item.id)}
                  checked={item.select}
                  value={item.name}
                  
                  id={index}
                  sx={{
                    color: pink[50],
                    "&.Mui-checked": {
                      color: pink[100],
                    },
                  }}
                />
                {item.nom}
              </h2>
              <p>
                
                Durée total aproximative :
                <code style={{ fontSize: 18 }}>{item.dure}</code>
              </p>
              <p style={{ fontSize: 18, margin: 0, textAlign: "left" }}>
                {item.desc}
              </p>
              <h2>Routine à suivre:</h2>
              {item.routines.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <h3 style={{ textAlign: "left", margin: 5 }}>
                        {item.titre}
                      </h3>
                      <p
                        style={{
                          fontSize: 18,
                          marginBottom: 15,
                          textAlign: "left",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      <iframe
                        className="video"
                        src={item.url}
                        title="YouTube video player"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
