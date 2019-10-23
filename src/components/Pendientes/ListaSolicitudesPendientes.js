import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../Firebase';




class ListaReuApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-reu');
    this.unsubscribe = null;
    this.state = {
      solicitudesreu: []
    };
  }

    onCollectionUpdate = (querySnapshot) => {
    const solicitudesreu = [];
    querySnapshot.forEach((doc) => {
      const { fecha, destino, distrito, estadosoli } = doc.data();
      solicitudesreu.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fecha,
        destino,
        distrito,
        estadosoli,
        
      });
    });
    this.setState({
      solicitudesreu
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
       

        if (user.email === 'apro@apro.com') {
          console.log("el usuario es valido")
          console.log("correo del usuario: " + user.email)
        } else {
          //alert('usuario no admitido')
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
              solicitudes de combustible RETALHULEU
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudesreu.map(solicitudreu =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-reu/${solicitudreu.key}`}>{solicitudreu.fecha}</Link></td>
                    <td>{solicitudreu.destino}</td>
                    <td>{solicitudreu.distrito}</td>
                    <td>{solicitudreu.estadosoli}</td>
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


//export default ListaSolicitudesAprobadas;




class ListaSanMartinApro extends Component {
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
  
  
          if (corre === 'apro@apro.com') {
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
  
export {
    ListaReuApro,
    ListaSanMartinApro,
}