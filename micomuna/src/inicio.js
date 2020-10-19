import React from 'react';
import './css/style.css';
import Leftpanel from './components/Leftpanel'
import Noticia1 from './components/Noticia1'
import Noticia2 from './components/Noticia2'
import Login from './components/Login'
import Tweet from './components/Tweet'
import Noticia3 from './components/Noticia3'



function inicio() {
  
  
  
  
  return (
    <div >
      <div class="contenedorgrid">
       <Leftpanel></Leftpanel>
        <Noticia1></Noticia1>
       <Login></Login>
       <div class="left2"></div>
       <Noticia2></Noticia2>
       <Tweet></Tweet>
       <div class="left3"></div>
       <Noticia3></Noticia3>
      </div>

      
    

    </div>
  );
}

export default inicio;
