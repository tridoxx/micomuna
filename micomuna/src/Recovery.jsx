import React from 'react';
import './css/style.css';
import Leftpanel from './components/Leftpanel'
import Login from './components/Login'
import Tweet from './components/Tweet'


function Recovery() {
  
  
  
  
  return (
    <div >
    <div class="contenedorgrid">
     <Leftpanel></Leftpanel>
     
     
     <div class="mainrecuperacion">

             <h4>Ingrese su correo electronico donde se le enviara un enlace de recuperación</h4>
             <div id="recuperacion">
             <div class="form-group col-md-13">
             <label for="inputcorreo">Correo Electronico</label>
             <input type="email" class="form-control" id="inputcorreo"></input>
             <button id="inputinicio" class="boton">Enviar</button>
             </div>
            </div>





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

export default Recovery;