import React from 'react';
import './css/style.css';
import Leftpanel from './components/Leftpanel'
import Login from './components/Login'
import Tweet from './components/Tweet'
import img from './img/policia-nacional1.jpg'


function Infonotice3() {
  
  
  
  
  return (
    <div >
    <div class="contenedorgrid">
     <Leftpanel></Leftpanel>
     
     
     <div class="">
     <h2>En Cauca y Caquetá destruimos 63 laboratorios rústicos </h2>
     <img src={img} class="imgcomplete"></img>

    

    <p>En el marco de la Estrategia Integral Contra el Narcotráfico, la Policía Nacional a través de la Dirección Antinarcóticos, logró dar un contundente golpe a las finanzas de las estructuras criminales, con la destrucción de 63 laboratorios rústicos para la extracción de base de cocaína

Hasta zona rural de los municipios de Piamonte (Cauca), San José del Fragua, Puerto Rico, Valparaíso y Milán (Caquetá) llegó un componente policial conformado por efectivos de Inteligencia Antinarcóticos, comandos Jungla, uniformados de Investigación Criminal, la Compañía Operativa de Antinarcóticos Florencia y con el apoyo el Área de Aviación Policial efectuaron la “Operación Resplandor II” donde se logró el desmantelamiento de 63 laboratorios para la producción de base de cocaína. 

La Policía Antinarcóticos logró la incautación y posterior destrucción de 2.664 galones de insumos líquidos (ACPM, gasolina y ácido sulfúrico), 1.198 kilos de insumos sólidos (sulfato de amonio, cemento, cal, bicarbonato y nutrimón), 2.547 kilogramos de hoja de coca macerada y 574 kilogramos de base de cocaína en solución. Las diligencias judiciales fueron dejadas bajo noticia criminal a disposición de la Fiscalía General de la Nación con sede en Mocoa y Florencia.

Las investigaciones pudieron determinar que cada uno de estos laboratorios tenía la capacidad de producir alrededor de 1 tonelada de base de coca al mes, lo que representa una afectación a la cadena logística de las organizaciones dedicadas al narcotráfico en un valor cercano a los $1.683.000.000 (mil seiscientos ochenta y tres mil millones de pesos).   </p>    





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

export default Infonotice3