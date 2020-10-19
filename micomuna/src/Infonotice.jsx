import React from 'react';
import './css/style.css';
import Leftpanel from './components/Leftpanel'
import Login from './components/Login'
import Tweet from './components/Tweet'
import img from './img/policia-nacional.jpg'


function Infonotice() {
  
  
  
  
  return (
    <div >
    <div class="contenedorgrid">
     <Leftpanel></Leftpanel>
     
     
     <div class="">
     <h2>Tres capturados con un fusil, un revólver, proveedores munición </h2>
     <img src={img} class="imgcomplete"></img>

    

    <p>La Policía Nacional en desarrollo del Plan Choque “Construyendo seguridad”, luego de una oportuna información ciudadana, logró la captura en flagrancia de tres presuntos integrantes del grupo criminal ‘Niquía’ en el municipio de Bello, en poder de armas de fuego, una de ellas de largo alcance, munición, proveedores y sustancias estupefacientes. 
 
    Mediante tres diligencias de allanamiento y registro en viviendas donde según las investigaciones se almacenaban armas de fuego y sustancias estupefacientes, ubicadas en los barrios Niquía Camacol y Ciudad Niquía, fueron capturados en flagrancia tres hombres, quienes se hacen llamar ‘ojo negro’, ‘orejas’ y ‘nano’, de 21 y 25 años de edad</p>
    <p>Perfiles criminales de los capturados:
 
    ‘Ojo negro’: Coordinador del grupo delincuencial común organizado ‘Niquía’, era el encargado de administrar el procesamiento de cocaína, la cual era dosificada y distribuida en los puntos de expendio de los barrios Camacol, Altos de Niquía y Girasoles. Este sujeto le rendía cuentas a ‘Juan 23’ cabecilla de esta organización delincuencial. En la diligencia de registro y allanamiento le fue incautada un arma de fuego tipo fusil, marca Anderson, modelo AM15, con 2 proveedores calibre 5.56 y 30 cartuchos calibre 5.56.
  
    ‘Orejas’: Es integrante del grupo delincuencial común organizado ‘Niquía’. Encargado de cuidar los puntos de expendio de los barrios Camacol, Altos de Niquía y Girasoles, este sujeto le rendía cuentas a alias ‘mono kevin’ coordinador de esta organización delincuencial. 
  
    ‘Nano’: Integrante del grupo delincuencial común organizado ‘Niquía’. Encargado de almacenar y distribuir el estupefaciente (bazuco) en los puntos de expendio de los sectores de El Chispero y el Tapón del barrio Prado.  
  
    Las personas capturadas y elementos incautados fueron dejados a disposición de la Fiscalía General de la Nación por los delitos de fabricación, porte y tráfico armas de fuego y tráfico de estupefacientes.</p>    





          </div>
     <Login></Login>
     <div class="left2"></div>
     <div></div>
     <Tweet></Tweet>
     <div class="left3"></div>
     <div></div>
    </div>


  </div>
  );
}

export default Infonotice