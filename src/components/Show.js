import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import EIcon from '@material-ui/icons/Edit';
import DIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/ListAlt';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solicitud: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('solicitudes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          solicitud: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('solicitudes').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('si')

      } else {
        // No user is signed in.
        console.log('no')
        alert('¡POR FAVOR INICIA SESIÓN!')
        window.location = '/' 
      }
    });
    return (
      <div align="center" class="container" >
        <div align="start" class="panel panel-default" class="col-md-4">
          <div class="panel-heading">
            <div className="mt-3">
              <h4><Link to="/list" class="btn btn-primary">Listado de solicitudes <ListIcon/> </Link></h4>
            </div>
          
            <h3 class="panel-title">
              {this.state.solicitud.fecha}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Destino:</dt>
              <dd>{this.state.solicitud.destino}</dd>
              <dt>Piloto:</dt>
              <dd>{this.state.solicitud.piloto}</dd>
              <dt>Vehículo:</dt>
              <dd>{this.state.solicitud.vehiculo}</dd>
              <dt>Personas que conforman la comision:</dt>
              <dd>{this.state.solicitud.personas}</dd>
              <dt>Cantidad de Combustible que Solicita:</dt>
              <dd>{this.state.solicitud.cantidad}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Editar <EIcon /> </Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Eliminar <DIcon /> </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;