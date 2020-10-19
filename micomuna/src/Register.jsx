import React from 'react';
import './css/style.css';
import imgpolicia from './img/logo_micomuna.png'
import { Link } from "react-router-dom";

function Register() {
  return (
      <div>
         <Link to="/"><h3><a id="volver">volver</a></h3></Link>
        <img src={imgpolicia} alt="" id="logo" srcset=""></img>



            <form class="FormularioRegistro">
                <div class="container">
            <div class="row">
              <div class="form-group col-md-3">
                <label for="inputname1">Primer Nombre</label>
                <input type="text" class="form-control" id="inputname1"></input>
              </div>
              <div class="form-group col-md-3">
                <label for="inputname2">Segundo Nombre</label>
                <input type="text" class="form-control" id="inputname2"></input>
              </div>
            </div>

            <div class="row">
                <div class="form-group col-md-3">
                  <label for="inputlastname1">Primer Apellido</label>
                  <input type="text" class="form-control" id="inputlastname1"></input>
                </div>
                <div class="form-group col-md-3">
                  <label for="inputlastname2">Segundo Apellido</label>
                  <input type="text" class="form-control" id="inputlastname2"></input>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-3">
                  <label for="inputnacimiento">Fecha de nacimiento</label>
                  <input type="date" class="form-control" id="inputnacimiento" placeholder="dia/mes/año"></input>
                </div>
                <div class="form-group col-md-3">
                  <label for="inputtel">Telefono</label>
                  <input type="text" class="form-control" id="inputtel"></input>
                </div>
            </div>

            <div class="row">
            <div class="form-group col-md-3">
                <label for="inputtypedocument">Tipo de documento</label>
                <select id="inputtypedocument" class="form-control">
                  <option>C.C</option>
                  <option>C.E</option>
                  <option>P.A</option>
                  <option>R.C</option>
                  <option>T.I</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="inputnumberdocument">Numero de documento</label>
                <input type="text" class="form-control" id="inputnumberdocument" ></input>
              </div>

            </div>




            <div class="row">
                <div class="form-group col-md-3">
                    <label for="inputcomuna">Comuna</label>
                    <select id="inputcomuna" class="form-control">
                      <option>Comuna 1</option>
                      <option>Comuna 2</option>
                      <option>Comuna 3</option>
                      <option>Comuna 4</option>
                      <option>Comuna 5</option>
                      <option>Comuna 6</option>
                      <option>Comuna 7</option>
                      <option>Comuna 8</option>
                      <option>Comuna 9</option>
                      <option>Comuna 11</option>
                      <option>Comuna 12</option>
                      <option>Comuna 13</option>
                      <option>Comuna 14</option>
                      <option>Comuna 15</option>
                      <option>Comuna 16</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="inputbarrio">Barrio</label>
                    <select id="inputbarrio" class="form-control">
                        <option>Barrio1</option>
                        <option>Barrio2</option>
                        <option>Barrio1</option>
                        <option>Barrio4</option>
                        <option>Barrio5</option>
                        <option>Barrio6</option>
                        <option>Barrio7</option>
                        <option>Barrio8</option>

                    </select>
                  </div>

                </div>




                <div class="row">
                    <div class="form-group col-md-3">
                      <label for="inputcorreo">Correo Electronico</label>
                      <input type="email" class="form-control" id="inputcorreo"></input>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="inputconfirmacorreo">Confirmar Correo Electronico</label>
                      <input type="email" class="form-control" id="inputconfirmacorreo"></input>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="inputcontra">Contraseña</label>
                      <input type="password" class="form-control" id="inputcontra"></input>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="inputcontra2">Confirmar Contraseña</label>
                      <input type="password" class="form-control" id="inputcontra2"></input>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-4">
                        <label for="Registro">Al registrarme acepto terminos y condiciones</label>
                        <button type="submit" class="btn btn-primary btn-block" id="botonregistro">Registrarme</button>
                    </div>
                  </div>





                </div>
    
          </form>



          

          </div>
  );
}

export default Register;