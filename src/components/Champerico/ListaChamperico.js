import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import AIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class ListaChamperico extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-champerico');
    this.unsubscribe = null;
    this.state = {
      solicitudchamperico: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudchamperico = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudchamperico.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,       
      });
    });
    this.setState({
      solicitudchamperico
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);  
  }

  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'capchamperico@gmail.com') {
          //console.log("el usuario es valido")
          //console.log("correo del usuario: " + user.email)
        } else {
          window.location = '/'           
        }
      } else {
        // No user is signed in.
        //console.log('no')        
        window.location = '/' 
      }
    });

    return (
      
      <div>       
      <div class="container">        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible CHAMPERICO
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-champerico">
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
                {this.state.solicitudchamperico.map(solicitudchamperico =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-champerico/${solicitudchamperico.key}`}>{solicitudchamperico.fechaS}</Link></td>
                    <td>{solicitudchamperico.destino}</td>
                    <td>{solicitudchamperico.distrito}</td>
                    <td>{solicitudchamperico.estadosoli}</td>
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

export default ListaChamperico;
