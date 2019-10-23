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
      const { fecha, destino, distrito, estadosoli } = doc.data();
      solicitudessanmartin.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fecha,
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
        console.log('si')
        console.log("Correo lista: " + user.email)
        var corre = (user.email);


        if (corre === 'sanmartin@sanmartin.com') {
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
              solicitud de combustible SAN MARTIN
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="http://localhost:3000/nueva-solicitud-san-martin">
                        Nueva Solicitud  <AIcon /> 
                    </Fab>
            {/*<h4><Link to="/create">Nueva Solicitud <AIcon /> </Link></h4>*/}
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Destino</th>
                  <th>Distrito</th>
                  <th>Estado de solicitud</th>
                </tr>
              </thead>
              <tbody>
                {this.state.solicitudessanmartin.map(solicitudsanmartin =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-martin/${solicitudsanmartin.key}`}>{solicitudsanmartin.fecha}</Link></td>
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
