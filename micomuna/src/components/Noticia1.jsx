import React from 'react';
import '../css/style.css';
import imgpolicia from '../img/policia-nacional.jpg'
import { Link } from 'react-router-dom';

function Noticia1() {
  
  
  
  
  return (

    <div class="main">

      <div class="noticias">
      <Link to="/infonotice" className="links"><img src={imgpolicia} class="imagenes"></img></Link>
        <h4>Tres capturados con un fusil, un revólver, proveedores munición </h4>
        <aside>La Policía Nacional en desarrollo del Plan Choque “Construyendo seguridad”, luego de una oportuna información ciudadana, logró la captura en flagrancia de tres presuntos integrantes del grupo criminal ‘Niquía’ en el municipio de Bello, en poder de armas de fuego, una de ellas de largo alcance, munición, proveedores y sustancias </aside>
       
        

      </div>





    </div>
  );
}

export default Noticia1;
