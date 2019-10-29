import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import AIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class ListaSanandres extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-sanandres');
    this.unsubscribe = null;
    this.state = {
      solicitudessanandres: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudessanandres = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudessanandres.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,
        
      });
    });
    this.setState({
      solicitudessanandres
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
       

        if (user.email === 'distritos.a.v.s.10reu@hotmail.com') {
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
              solicitudes de combustible SAN ANDRÉS VILLA SECA
            </h3>
          </div>
          
          <div class="panel-body">
                    <Fab variant="extended" color="primary" href="https://control-ambulancias-d69ec.firebaseapp.com/nueva-solicitud-san-andres-villa-seca">
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
                {this.state.solicitudessanandres.map(solicitudessanandres =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-andres-villa-seca/${solicitudessanandres.key}`}>{solicitudessanandres.fechaS}</Link></td>
                    <td>{solicitudessanandres.destino}</td>
                    <td>{solicitudessanandres.distrito}</td>
                    <td>{solicitudessanandres.estadosoli}</td>
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


export default ListaSanandres;
