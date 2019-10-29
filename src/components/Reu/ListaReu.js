import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../Firebase';

import AIcon from '@material-ui/icons/Add';

import Fab from '@material-ui/core/Fab';


class ListaReu extends Component {
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
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudesreu.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
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
       

        if (user.email === 'csreumspas@hotmail.com') {
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

    /*var user =  firebase.auth().currentUser ;
    if (user.email === 'reu@reu.com') {
      console.log("el usuario es valido")
      console.log("correo del usuario: " + user.email)
    } else {
      alert('usuario no admitido')
      window.location = '/' 
      
    }*/
      /*
		  .then(function(){
			  alert('No autorizado')
			  props.history.replace('/')
		  })
      .catch
      

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('si')
        console.log("Correo lista: " + user.email)
        var corre = (user.email);


        if (corre == 'reu@reu.com') {
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
    }); */
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
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-retalhuleu">
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
                {this.state.solicitudesreu.map(solicitudreu =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-retalhuleu/${solicitudreu.key}`}>{solicitudreu.fechaS}</Link></td>
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


export default ListaReu;
