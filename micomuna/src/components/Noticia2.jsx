import React from 'react';
import '../css/style.css';
import imgpolicia from '../img/reina_de_colores-05.jpg'
import { Link } from 'react-router-dom';

function Noticia2() {
  
  
  
  
  return (
    <div class="main2">


            <div class="noticias">
            <Link to="/infonotice2" className="links"><img src={imgpolicia} class="imagenes"></img></Link>
                <h4>“Reina de colores”, la linda quinceañera de Magangué </h4>
                <aside>El pasado 14 de octubre Shirlys Tapias Pastrana cumplió 15 años. Una niña con enfermedades congénitas que limitan su motricidad, y esa discapacidad, la posiciona como una reina de colores. 

La fiesta quinceañera, como son los eventos especiales, tuvo como corte a los uniformados de la Estación de Policía del municipio de Magangué.  </aside>

            </div>


      </div>
  );
}

export default Noticia2;
