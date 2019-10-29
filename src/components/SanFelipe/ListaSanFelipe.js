import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../Firebase';

import AIcon from '@material-ui/icons/Add';

import Fab from '@material-ui/core/Fab';


class ListaSanFelipe extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-san-felipe');
    this.unsubscribe = null;
    this.state = {
      solicitudessanfelipe: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudessanfelipe = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudessanfelipe.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,
        
      });
    });
    this.setState({
      solicitudessanfelipe
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    
  }
  
  

  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('si')
        console.log("Correo lista: " + user.email)
        var corre = (user.email);


        if (corre === 'sanfelipedasreu@gmail.com') {
          console.log('usuario permitido')
        } else {
          window.location = '/'   
        }


      } else {
        // No user is signed in.
        console.log('no')
        //alert('¡POR FAVOR INICIA SESIÓN!')
        window.location = '/' 
      }
    }); 
    return (
      
      <div>
        {/*<Navbar2/>*/}
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible SAN FELIPE
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-san-felipe">
                        Nueva Solicitud  <AIcon /> 
                    </Fab>
            {/*<h4><Link to="/create">Nueva Solicitud <AIcon /> </Link></h4>*/}
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Fecha y Hora de Salida</th>
                  <th>Destino</th>
                  <th>Distrito</th>
                  <th>Estado de solicitud</th>
                </tr>
              </thead>
              <tbody>
                {this.state.solicitudessanfelipe.map(solicitudsanfelipe =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-felipe/${solicitudsanfelipe.key}`}>{solicitudsanfelipe.fechaS}</Link></td>
                    <td>{solicitudsanfelipe.destino}</td>
                    <td>{solicitudsanfelipe.distrito}</td>
                    <td>{solicitudsanfelipe.estadosoli}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default ListaSanFelipe;
