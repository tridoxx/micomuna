import React from 'react';
import './css/style.css';
import Leftpanel from './components/Leftpanel'
import Login from './components/Login'
import Tweet from './components/Tweet'
import img from './img/reina_de_colores-05.jpg'


function Infonotice2() {
  
  
  
  
  return (
    <div >
    <div class="contenedorgrid">
     <Leftpanel></Leftpanel>
     
     
     <div class="">
     <h2>“Reina de colores”, la linda quinceañera de Magangué </h2>
     <img src={img} class="imgcomplete"></img>

    

    <p>El pasado 14 de octubre Shirlys Tapias Pastrana cumplió 15 años. Una niña con enfermedades congénitas que limitan su motricidad, y esa discapacidad, la posiciona como una reina de colores. 

La fiesta quinceañera, como son los eventos especiales, tuvo como corte a los uniformados de la Estación de Policía del municipio de Magangué. Los gendarmes motivados por la vocación de servicio dieron ejemplo de calidad humana. 

Y qué calidad… El CAI Móvil lo transformaron en un palacio para la Reina de Colores, ahí estuvo su trono. Toda una celebración, aunque sencilla, estuvo pletórica de amor, de solidaridad y sobre todo de enseñar que las buenas acciones jamás tienen límite. 

Lo que al principio se mostró poco posible, al final, fue toda una realidad fantástica, la tía de Shirlys, Aracelys Tapias, quien vive en España se comunicó con el Intendente José Ángel Meza Vecino, jefe del Grupo de Protección de Infancia y Adolescencia del Departamento de Policía de Bolívar, a quien le dijo, que dado a la pandemia estaba impedida para venir a Colombia y celebrar los 15 años de su sobrina. 

Y fue ahí, donde una chispa divina, posible un ángel de Dios le iluminó la idea al Intendente Meza Vecino, motivado convoca a sus compañeros, en especial, a la Patrullera Eliana Patricia Zapata Colorado, quien fue otro motor clave en la celebración.

También, se unieron otras personas convocadas por el espíritu de la convivencia, todos unidos por una bella idea de amor y solidaridad atinaron, como si fuera un cuento de hada, a armar la mejor fiesta para la Reina de Colores. </p>    





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

export default Infonotice2