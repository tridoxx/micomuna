import React from 'react';
import './css/style.css';
import Inicio from './inicio'
import Register from './Register'
import Recovery from './Recovery'
import Cai from './Cai'
import Infon1 from './Infonotice'
import Infon2 from './Infonotice2'
import Infon3 from './Infonotice3'

import { Switch, Route } from 'react-router-dom'

function App() {
  
  
  
  
  return (
    <div className="App">
      <main>
      <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/recovery" component={Recovery}/>
      <Route path="/cai" component={Cai}/>
      <Route path="/infonotice" component={Infon1}/>
      <Route path="/infonotice2" component={Infon2}/>
      <Route path="/infonotice3" component={Infon3}/>
      <Route path="/" component={Inicio}/>
      </Switch>

      </main>
      

    </div>
  );
}

export default App;
