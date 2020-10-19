import React from 'react';
import '../css/style.css';
import { Link } from "react-router-dom";


function Login() {
  
  
  
  
    return (
        <div class="rigth">
        <h3>Iniciar sesion</h3>
        <div class="form-group col-md-13">
            <label for="inputcorreo">Correo Electronico</label>
            <input type="email" class="form-control" id="inputcorreo"></input>
        </div>
        <div class="form-group col-md-13">
            <label for="inputconfirmacorreo">Contraseña</label>
            <input type="email" class="form-control" id="inputconfirmacorreo"></input>
        </div>
        <div id="login">
            <button id="inputcuenta" role="link" onclick="" class="boton1">Ingresar</button>
            <Link to="/register"> <button id="inputcuenta" role="link" onclick="" class="boton1">Registrarme</button></Link>
        </div>
        <hr></hr>
        <Link to="/recovery"><button id="inputregistro" role="link" onclick="" class="boton">RecuperarCuenta</button></Link>

    </div>
    );
  }
  
  export default Login;