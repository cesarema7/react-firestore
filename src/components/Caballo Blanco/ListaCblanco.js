import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import AIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class ListaCblanco extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-cblanco');
    this.unsubscribe = null;
    this.state = {
      solicitudescblanco: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudescblanco = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudescblanco.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,
      });
    });
    this.setState({
      solicitudescblanco
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
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'dcaballoblanco2013@gmail.com') {
       //   console.log("el usuario es valido")
       //   console.log("correo del usuario: " + user.email)
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
              solicitudes de combustible CABALLO BLANCO
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-caballo-blanco">
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
                {this.state.solicitudescblanco.map(solicitudescblanco =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-caballo-blanco/${solicitudescblanco.key}`}>{solicitudescblanco.fechaS}</Link></td>
                    <td>{solicitudescblanco.destino}</td>
                    <td>{solicitudescblanco.distrito}</td>
                    <td>{solicitudescblanco.estadosoli}</td>
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

export default ListaCblanco;
