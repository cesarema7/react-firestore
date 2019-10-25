import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import EIcon from '@material-ui/icons/Edit';
import DIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/ListAlt';
import OkIcon from '@material-ui/icons/CheckCircle';

class DetalleSanFelipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solicitudsanfelipe: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('solicitudes-san-felipe').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          solicitudsanfelipe: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('solicitudes-san-felipe').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/lista-solicitudes-san-felipe")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  aprobar(id){
    firebase.firestore().collection('solicitudes-san-felipe').doc(id).update({estadosoli: 'APROBADO'}).then(() => {
      console.log("Document successfully actualizado!");
      this.props.history.push("/lista-solicitudes-pendientes")
    }).catch((error) => {
      console.error("Error actualizando document: ", error);
    });    
  }

  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('si')


        if (user.email === 'sanfelipe@sanfelipe.com' || user.email === 'apro@apro.com') {
          console.log("el usuario es valido")
          console.log("correo del usuario: " + user.email)

          if (user.email === 'apro@apro.com') {
            var btn_aprobado = document.getElementById('btn-aprobado');
            btn_aprobado.style.display = 'inline';
            var btn_editar = document.getElementById('btn-editar');
            btn_editar.style.display = 'none';
            var btn_eliminar= document.getElementById('btn-eliminar');
            btn_eliminar.style.display = 'none';
            var btn_ls= document.getElementById('btn-ls');
            btn_ls.style.display = 'inline';
            var btn_lsr= document.getElementById('btn-lsr');
            btn_lsr.style.display = 'none';
            
          } else {
            var btn_aprobado = document.getElementById('btn-aprobado');
            btn_aprobado.style.display = 'none';
            var btn_editar = document.getElementById('btn-editar');
            btn_editar.style.display = 'inline';
            var btn_eliminar= document.getElementById('btn-eliminar');
            btn_eliminar.style.display = 'inline';
            var btn_ls= document.getElementById('btn-ls');
            btn_ls.style.display = 'none';
            var btn_lsr= document.getElementById('btn-lsr');
            btn_lsr.style.display = 'inline';
            
          }

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
      <div align="center" class="container" >
        <div align="start" class="panel panel-default" class="col-md-5">
          <div class="panel-heading">
            <div className="mt-3">
            <h4><Link id="btn-ls" to="/lista-solicitudes-pendientes" class="btn btn-primary">Listado de solicitudes<ListIcon/> </Link></h4>
            <h4><Link id="btn-lsr" to="/lista-solicitudes-san-felipe" class="btn btn-primary">Listado de solicitudes SAN FELIPE<ListIcon/> </Link></h4>
            </div>
          
            <h3 class="panel-title">
              {this.state.solicitudsanfelipe.fecha}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Estado de la solicitud:</dt>
              <dd>{this.state.solicitudsanfelipe.estadosoli}</dd>
              <dt>Distrito:</dt>
              <dd>{this.state.solicitudsanfelipe.distrito}</dd>
              <dt>Destino:</dt>
              <dd>{this.state.solicitudsanfelipe.destino}</dd>
              <dt>Piloto:</dt>
              <dd>{this.state.solicitudsanfelipe.piloto}</dd>
              <dt>Vehículo:</dt>
              <dd>{this.state.solicitudsanfelipe.vehiculo}</dd>
              <dt>Personas que conforman la comision:</dt>
              <dd>{this.state.solicitudsanfelipe.personas}</dd>
              <dt>Cantidad de Combustible que Solicita:</dt>
              <dd>{this.state.solicitudsanfelipe.cantidad}</dd>
            </dl>
            <Link id="btn-editar" to={`/editar-solicitud-san-felipe/${this.state.key}`} class="btn btn-warning">Editar <EIcon /> </Link>&nbsp;
            <button id="btn-eliminar" onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Eliminar <DIcon /> </button>
            <button id="btn-aprobado" onClick={this.aprobar.bind(this, this.state.key)} class="btn btn-success">Aprobar <OkIcon /> </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetalleSanFelipe;