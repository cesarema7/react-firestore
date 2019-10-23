import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';
import Navbar2 from './components/Navbar2';

import ListaReu from './components/Reu/ListaReu';
import CrearReu from './components/Reu/CrearReu';
import DetalleReu from './components/Reu/DetalleReu';
import EditarReu from './components/Reu/EditarReu';

import ListaSanMartin from './components/SanMartin/ListaSanMartin';
import CrearSanMartin from './components/SanMartin/CrearSanMartin';
import DetalleSanMartin from './components/SanMartin/DetalleSanMartin';
import EditarSanMartin from './components/SanMartin/EditarSanMartin';

import { ListaReuApro, ListaSanMartinApro } from './components/Pendientes/ListaSolicitudesPendientes';

import { ListaReuOk, ListaSanMartinOk } from './components/Aprobadas/ListaSolicitudesAprobadas'


ReactDOM.render(
  <Router>
      <div>
     
        <Navbar2/>
        <Container>
        <Route exact path='/' component={Login} />  
        {/*<Route exact path='/' component={App} />*/}
        <Route path='/list' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />

        <Route path='/lista-solicitudes-reu' component={ListaReu} />
        <Route path='/nueva-solicitud-reu' component={CrearReu} />
        <Route path='/detalle-solicitud-reu/:id' component={DetalleReu} />
        <Route path='/editar-solicitud-reu/:id' component={EditarReu} />

        <Route path='/lista-solicitudes-san-martin' component={ListaSanMartin} />
        <Route path='/nueva-solicitud-san-martin' component={CrearSanMartin} />
        <Route path='/detalle-solicitud-san-martin/:id' component={DetalleSanMartin} />
        <Route path='/editar-solicitud-san-martin/:id' component={EditarSanMartin} />

        <Route path='/lista-solicitudes-pendientes' component={ListaReuApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaSanMartinApro}/>

        <Route path='/lista-solicitudes-aprovadas' component={ListaReuOk} />
        <Route path='/lista-solicitudes-aprovadas' component={ListaSanMartinOk} />
        </Container>
       

      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();