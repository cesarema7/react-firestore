import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import { Button } from '@material-ui/core';
import { ok } from 'assert';
import Navbar2 from './components/Navbar2';
import AIcon from '@material-ui/icons/Add';

import Fab from '@material-ui/core/Fab';


class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes');
    this.unsubscribe = null;
    this.state = {
      solicitudes: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudes = [];
    querySnapshot.forEach((doc) => {
      const { fecha, destino } = doc.data();
      solicitudes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fecha,
        destino,
        
      });
    });
    this.setState({
      solicitudes
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


        if (corre == '1@1.com' || corre == 'ejemplo@ejemplo.com') {
          console.log('usuario permitido')
        } else {
          window.location = '/'   
        }


      } else {
        // No user is signed in.
        console.log('no')
        alert('¡POR FAVOR INICIA SESIÓN!')
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
              solicitud de combustible
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="http://localhost:3000/create">
                        Nueva Solicitud  <AIcon /> 
                    </Fab>
            {/*<h4><Link to="/create">Nueva Solicitud <AIcon /> </Link></h4>*/}
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Destino</th>
                </tr>
              </thead>
              <tbody>
                {this.state.solicitudes.map(solicitud =>
                  <tr>
                    <td><Link to={`/show/${solicitud.key}`}>{solicitud.fecha}</Link></td>
                    <td>{solicitud.destino}</td>
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


export default App;
