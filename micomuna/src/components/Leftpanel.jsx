import React from 'react';
import '../css/style.css';
import imgcomuna from '../img/logo_micomuna.png'
import { Link } from "react-router-dom";


function Leftpanel() {


  return (
    <div class="left">
      <img src={imgcomuna} alt="" id="logoprincipal" srcset=""></img>
      
      <Link to="/"><button id="inputinicio" class="boton">Inicio</button></Link>
      <hr></hr>
      <select id="inputcomuna" class="botoneslista">
        <option>Comuna 1 Popular</option>
        <option>Comuna 2 Santa Cruz</option>
        <option>Comuna 3 Manrique</option>
        <option>Comuna 4 Aranjuez</option>
        <option>Comuna 5 Castilla</option>
        <option>Comuna 6 Doce de Octubre</option>
        <option>Comuna 7 Robledo</option>
        <option>Comuna 8 Villa Hermosa</option>
        <option>Comuna 9 Buenos Aires</option>
        <option>Comuna 10 La Candelaria</option>
        <option>Comuna 11 Laureles-Estadio</option>
        <option>Comuna 12 La América</option>
        <option>Comuna 13 San Javier</option>
        <option>Comuna 14 El Poblado</option>
        <option>Comuna 15 Guayabal</option>
        <option>Comuna 16 Belén</option>
      </select>
      <br></br>

      <select id="inputbarrio" class="botoneslista">
        <option>Barrio1</option>
        <option>Barrio2</option>
        <option>Barrio3</option>
        <option>Barrio4</option>
        <option>Barrio5</option>
        <option>Barrio6</option>
        <option>Barrio7</option>
        <option>Barrio8</option>

      </select>
      <hr></hr>
      <Link to="/cai"><button id="inputcai" class="boton">Contactar CAI</button></Link>
    </div>
  );
}

export default Leftpanel;