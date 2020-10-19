import React from 'react';
import './css/style.css';
import Leftpanel from './components/Leftpanel'
import Login from './components/Login'
import Tweet from './components/Tweet'






function Cai() {
  
  
  
  
    return (
        <div >
        <div class="contenedorgrid">
         <Leftpanel></Leftpanel>
         <div class="mainrecuperacion">

      <h4>Llamada desde el cai de la comuna </h4>
      <div class="form-group col-md-16">
        <div class="row">
          <label for="inputcomuna">El cuadrante de la Comuna</label>
          <select id="inputcomuna" class="form-control">
            <option>Comuna 1</option>
          </select>
        </div>
        <div class="row">
          <label for="inputcomuna">Ingrese su télefono</label>
          <select id="inputcomuna" class="form-control">
            <option>3121234124</option>
            <option>4444444</option>
          </select>
        </div>
        <button id="inputregistro" class="boton">Pedir llamada</button>
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
  
  export default Cai;