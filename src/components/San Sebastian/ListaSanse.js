import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import AIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class ListaSanse extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-sanse');
    this.unsubscribe = null;
    this.state = {
      solicitudsanse: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudsanse = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudsanse.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudsanse
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
       
        if (user.email === 'distritonumero8@hotmail.com') {
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
              solicitudes de combustible SAN SEBASTIÁN
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-san-sebastian">
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
                {this.state.solicitudsanse.map(solicitudsanse =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-sebastian/${solicitudsanse.key}`}>{solicitudsanse.fechaS}</Link></td>
                    <td>{solicitudsanse.destino}</td>
                    <td>{solicitudsanse.distrito}</td>
                    <td>{solicitudsanse.estadosoli}</td>
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

export default ListaSanse;
