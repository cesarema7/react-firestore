import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import AIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class ListaLm2 extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-lm2');
    this.unsubscribe = null;
    this.state = {
      solicitudlm2: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudlm2 = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudlm2.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,    
      });
    });
    this.setState({
      solicitudlm2
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // console.log('si')
        // console.log("Correo lista: " + user.email)
       
        if (user.email === 'csmaquina2@gmail.com') {
          // console.log("el usuario es valido")
          // console.log("correo del usuario: " + user.email)
        } else {
          window.location = '/'
        }

      } else {
        // No user is signed in.
        console.log('no')
        window.location = '/' 
      }
    });

    return (
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible LA MAQUINA II
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-la-maquina-II">
                        Nueva Solicitud  <AIcon /> 
                    </Fab>
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
                {this.state.solicitudlm2.map(solicitudlm2 =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-la-maquina-II/${solicitudlm2.key}`}>{solicitudlm2.fechaS}</Link></td>
                    <td>{solicitudlm2.destino}</td>
                    <td>{solicitudlm2.distrito}</td>
                    <td>{solicitudlm2.estadosoli}</td>
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

export default ListaLm2;
