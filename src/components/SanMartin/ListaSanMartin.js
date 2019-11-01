import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import AIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class ListaSanMartin extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-san-martin');
    this.unsubscribe = null;
    this.state = {
      solicitudessanmartin: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudessanmartin = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudessanmartin.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudessanmartin
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
  
        if (user.email === 'puestosanmartin@gmail.com') {
         // console.log('usuario permitido')
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
              solicitudes de combustible SAN MARTÍN ZAPOTITLÁN
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-san-martin-zapotitlan">
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
                {this.state.solicitudessanmartin.map(solicitudsanmartin =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-martin-zapotitlan/${solicitudsanmartin.key}`}>{solicitudsanmartin.fechaS}</Link></td>
                    <td>{solicitudsanmartin.destino}</td>
                    <td>{solicitudsanmartin.distrito}</td>
                    <td>{solicitudsanmartin.estadosoli}</td>
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

export default ListaSanMartin;
