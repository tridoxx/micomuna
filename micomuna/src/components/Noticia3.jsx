import React from 'react';
import '../css/style.css';
import imgpolicia from '../img/policia-nacional1.jpg'
import { Link } from 'react-router-dom';
function Noticia3() {
  
  
  
  
  return (
    <div class="main3">

            <div class="noticias">
            <Link to="/infonotice3" className="links"> <img src={imgpolicia} class="imagenes"></img></Link>
                <h4>En Cauca y Caquetá destruimos 63 laboratorios rústicos </h4>
                <aside>En el marco de la Estrategia Integral Contra el Narcotráfico, la Policía Nacional a través de la Dirección Antinarcóticos, logró dar un contundente golpe a las finanzas de las estructuras criminales, con la destrucción de 63 laboratorios rústicos para la extracción de base de cocaína

Hasta zona rural de los municipios de Piamonte (Cauca),</aside>

            </div>
          </div>
  );
}

export default Noticia3;
