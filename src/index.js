import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Login from './components/Login';

import Container from '@material-ui/core/Container';
import Navbar2 from './components/Navbar2';

import ListaReu from './components/Reu/ListaReu';
import CrearReu from './components/Reu/CrearReu';
import DetalleReu from './components/Reu/DetalleReu';
import EditarReu from './components/Reu/EditarReu';


import ListaChamperico from './components/Champerico/ListaChamperico';
import CrearChamperico from './components/Champerico/CrearChamperico';
import DetalleChamperico from './components/Champerico/DetalleChamperico';
import EditarChamperico from './components/Champerico/EditarChamperico';

import ListaMulua from './components/Mulua/ListaMulua';
import CrearMulua from './components/Mulua/CrearMulua';
import DetalleMulua from './components/Mulua/DetalleMulua';
import EditarMulua from './components/Mulua/EditarMulua';

import ListaLamaquina from './components/La Maquina II/ListaLamaquina';
import CrearLamaquina from './components/La Maquina II/CrearLamaquina';
import DetalleLamaquina from './components/La Maquina II/DetalleLamaquina';
import EditarLamaquina from './components/La Maquina II/EditarLamaquina';

import ListaSanCarlos from './components/SanCarlos/ListaSanCarlos';
import CrearSanCarlos from './components/SanCarlos/CrearSanCarlos';
import DetalleSanCarlos from './components/SanCarlos/DetalleSanCarlos';
import EditarSanCarlos from './components/SanCarlos/EditarSanCarlos';

import ListaCblanco from './components/Caballo Blanco/ListaCblanco';
import CrearCblanco from './components/Caballo Blanco/CrearCblanco';
import DetalleCblanco from './components/Caballo Blanco/DetalleCblanco';
import EditarCblanco from './components/Caballo Blanco/EditarCblanco';

import ListaSanFelipe from './components/SanFelipe/ListaSanFelipe';
import CrearSanFelipe from './components/SanFelipe/CrearSanFelipe';
import DetalleSanFelipe from './components/SanFelipe/DetalleSanFelipe';
import EditarSanFelipe from './components/SanFelipe/EditarSanFelipe';

import ListaSanse from './components/San Sebastian/ListaSanse';
import CrearSanse from './components/San Sebastian/CrearSanse';
import DetalleSanse from './components/San Sebastian/DetalleSanse';
import EditarSanse from './components/San Sebastian/EditarSanse';

import ListaAsintal from './components/Asintal/ListaAsintal';
import CrearAsintal from './components/Asintal/CrearAsintal';
import DetalleAsintal from './components/Asintal/DetalleAsintal';
import EditarAsintal from './components/Asintal/EditarAsintal';

import ListaSanandres from './components/SanAndresVillaSeca/ListaSanandres';
import CrearSanandres from './components/SanAndresVillaSeca/CrearSanandres';
import DetalleSanandres from './components/SanAndresVillaSeca/DetalleSanandres';
import EditarSanandres from './components/SanAndresVillaSeca/EditarSanandres';

import ListaSanMartin from './components/SanMartin/ListaSanMartin';
import CrearSanMartin from './components/SanMartin/CrearSanMartin';
import DetalleSanMartin from './components/SanMartin/DetalleSanMartin';
import EditarSanMartin from './components/SanMartin/EditarSanMartin';

import {
    ListaReuApro,
    ListaChampericoApro,
    ListaMuluaApro,
    ListaLm2Apro,
    ListaSanCarlosApro,
    ListaCblancoApro,
    ListaSanFelipeApro,
    ListaSanseApro,
    ListaAsintalApro,
    ListaSanandresApro,
    ListaSanMartinApro

} from './components/Pendientes/ListaSolicitudesPendientes';

import {
  ListaReuOk,
    ListaChampericoOk,
    ListaMuluaOk,
    ListaLm2Ok,
    ListaSanCarlosOk,
    ListaCblancoOk,
    ListaSanFelipeOk,
    ListaSanseOk,
    ListaAsintalOk,
    ListaSanandresOk,
    ListaSanMartinOk
} from './components/Aprobadas/ListaSolicitudesAprobadas'


ReactDOM.render(
  <Router>
      <div>
     
        <Navbar2/>
        <Container>
        <Route exact path='/' component={Login} />  
        
        <Route path='/lista-solicitudes-retalhuleu' component={ListaReu} />
        <Route path='/nueva-solicitud-retalhuleu' component={CrearReu} />
        <Route path='/detalle-solicitud-retalhuleu/:id' component={DetalleReu} />
        <Route path='/editar-solicitud-retalhuleu/:id' component={EditarReu} />

        <Route path='/lista-solicitudes-champerico' component={ListaChamperico} />
        <Route path='/nueva-solicitud-champerico' component={CrearChamperico} />
        <Route path='/detalle-solicitud-champerico/:id' component={DetalleChamperico} />
        <Route path='/editar-solicitud-champerico/:id' component={EditarChamperico} />

        <Route path='/lista-solicitudes-santa-cruz-mulua' component={ListaMulua} />
        <Route path='/nueva-solicitud-santa-cruz-mulua' component={CrearMulua} />
        <Route path='/detalle-solicitud-santa-cruz-mulua/:id' component={DetalleMulua} />
        <Route path='/editar-solicitud-santa-cruz-mulua/:id' component={EditarMulua} />

        <Route path='/lista-solicitudes-la-maquina-II' component={ListaLamaquina} />
        <Route path='/nueva-solicitud-la-maquina-II' component={CrearLamaquina} />
        <Route path='/detalle-solicitud-la-maquina-II/:id' component={DetalleLamaquina} />
        <Route path='/editar-solicitud-la-maquina-II/:id' component={EditarLamaquina} />

        <Route path='/lista-solicitudes-nuevo-san-carlos' component={ListaSanCarlos} />
        <Route path='/nueva-solicitud-nuevo-san-carlos' component={CrearSanCarlos} />
        <Route path='/detalle-solicitud-nuevo-san-carlos/:id' component={DetalleSanCarlos} />
        <Route path='/editar-solicitud-nuevo-san-carlos/:id' component={EditarSanCarlos} />

        <Route path='/lista-solicitudes-caballo-blanco' component={ListaCblanco} />
        <Route path='/nueva-solicitud-caballo-blanco' component={CrearCblanco} />
        <Route path='/detalle-solicitud-caballo-blanco/:id' component={DetalleCblanco} />
        <Route path='/editar-solicitud-caballo-blanco/:id' component={EditarCblanco} />

        <Route path='/lista-solicitudes-san-felipe' component={ListaSanFelipe} />
        <Route path='/nueva-solicitud-san-felipe' component={CrearSanFelipe} />
        <Route path='/detalle-solicitud-san-felipe/:id' component={DetalleSanFelipe} />
        <Route path='/editar-solicitud-san-felipe/:id' component={EditarSanFelipe} />

        <Route path='/lista-solicitudes-san-sebastian' component={ListaSanse} />
        <Route path='/nueva-solicitud-san-sebastian' component={CrearSanse} />
        <Route path='/detalle-solicitud-san-sebastian/:id' component={DetalleSanse} />
        <Route path='/editar-solicitud-san-sebastian/:id' component={EditarSanse} />

        <Route path='/lista-solicitudes-el-asintal' component={ListaAsintal} />
        <Route path='/nueva-solicitud-el-asintal' component={CrearAsintal} />
        <Route path='/detalle-solicitud-el-asintal/:id' component={DetalleAsintal} />
        <Route path='/editar-solicitud-el-asintal/:id' component={EditarAsintal} />

        <Route path='/lista-solicitudes-san-andres-villa-seca' component={ListaSanandres} />
        <Route path='/nueva-solicitud-san-andres-villa-seca' component={CrearSanandres} />
        <Route path='/detalle-solicitud-san-andres-villa-seca/:id' component={DetalleSanandres} />
        <Route path='/editar-solicitud-san-andres-villa-seca/:id' component={EditarSanandres} />

        <Route path='/lista-solicitudes-san-martin-zapotitlan' component={ListaSanMartin} />
        <Route path='/nueva-solicitud-san-martin-zapotitlan' component={CrearSanMartin} />
        <Route path='/detalle-solicitud-san-martin-zapotitlan/:id' component={DetalleSanMartin} />
        <Route path='/editar-solicitud-san-martin-zapotitlan/:id' component={EditarSanMartin} />

        

        <Route path='/lista-solicitudes-pendientes' component={ListaReuApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaChampericoApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaMuluaApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaLm2Apro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaSanCarlosApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaCblancoApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaSanFelipeApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaSanseApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaAsintalApro}/>
        <Route path='/lista-solicitudes-pendientes' component={ListaSanandresApro}/>        
        <Route path='/lista-solicitudes-pendientes' component={ListaSanMartinApro}/>

        <Route path='/lista-solicitudes-aprobadas' component={ListaReuOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaChampericoOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaMuluaOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaLm2Ok} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaSanCarlosOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaCblancoOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaSanFelipeOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaSanseOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaAsintalOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaSanandresOk} />
        <Route path='/lista-solicitudes-aprobadas' component={ListaSanMartinOk} />

        </Container>
       

      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();