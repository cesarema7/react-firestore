import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import EIcon from '@material-ui/icons/Edit';
import DIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/ListAlt';
import OkIcon from '@material-ui/icons/CheckCircle';
import XIcon from '@material-ui/icons/Cancel';

class DetalleLm2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solicitudlm2: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('solicitudes-lm2').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          solicitudlm2: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('solicitudes-lm2').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/lista-solicitudes-la-maquina-II")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  aprobar(id){
    firebase.firestore().collection('solicitudes-lm2').doc(id).update({estadosoli: 'APROBADO'}).then(() => {
      console.log("Document successfully actualizado!");
      this.props.history.push("/lista-solicitudes-pendientes")
    }).catch((error) => {
      console.error("Error actualizando document: ", error);
    });    
  }

  rechazar(id){
    firebase.firestore().collection('solicitudes-lm2').doc(id).update({estadosoli: 'RECHAZADO'}).then(() => {
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
        console.log("Correo lista: " + user.email)
       

        if (user.email === 'csmaquina2@gmail.com' || 
            user.email === 'bedemo09@yahoo.com' || 
            user.email === 'victorlloranca@gmail.com' || 
            user.email === 'gafretalhuleu@gmail.com') {
          console.log("el usuario es valido")
          console.log("correo del usuario: " + user.email)

          if (user.email === 'victorlloranca@gmail.com' || user.email === 'gafretalhuleu@gmail.com') {
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
            var btn_lsa= document.getElementById('btn-lsa');
            btn_lsa.style.display = 'none';
            var btn_rechazado= document.getElementById('btn-rechazado');
            btn_rechazado.style.display = 'inline';
          }
          
          if (user.email === 'csmaquina2@gmail.com') {
            var btn_aprobado = document.getElementById('btn-aprobado');
            btn_aprobado.style.display = 'none';
            var btn_editar = document.getElementById('btn-editar');
            btn_editar.style.display = 'none';
            var btn_eliminar= document.getElementById('btn-eliminar');
            btn_eliminar.style.display = 'none';
            var btn_ls= document.getElementById('btn-ls');
            btn_ls.style.display = 'none';
            var btn_lsr= document.getElementById('btn-lsr');
            btn_lsr.style.display = 'inline';
            var btn_lsa= document.getElementById('btn-lsa');
            btn_lsa.style.display = 'none';
            var btn_rechazado= document.getElementById('btn-rechazado');
            btn_rechazado.style.display = 'none';
          }

          if (user.email === 'bedemo09@yahoo.com') {
            var btn_aprobado = document.getElementById('btn-aprobado');
            btn_aprobado.style.display = 'none';
            var btn_editar = document.getElementById('btn-editar');
            btn_editar.style.display = 'none';
            var btn_eliminar= document.getElementById('btn-eliminar');
            btn_eliminar.style.display = 'none';
            var btn_ls= document.getElementById('btn-ls');
            btn_ls.style.display = 'none';
            var btn_lsr= document.getElementById('btn-lsr');
            btn_lsr.style.display = 'none';
            var btn_lsa= document.getElementById('btn-lsa');
            btn_lsa.style.display = 'inline';
            var btn_rechazado= document.getElementById('btn-rechazado');
            btn_rechazado.style.display = 'none';
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
              <h4><Link id="btn-lsr" to="/lista-solicitudes-la-maquina-II" class="btn btn-primary">Listado de solicitudes LA MAQUINA II<ListIcon/> </Link></h4>
              <h4><Link id="btn-lsa" to="/lista-solicitudes-aprobadas" class="btn btn-primary">Listado de solicitudes<ListIcon/> </Link></h4>
            </div>
          
            <h3 class="panel-title">
              {this.state.solicitudlm2.estadosoli}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Distrito:</dt>
              <dd>{this.state.solicitudlm2.distrito}</dd>
              <dt>Destino:</dt>
              <dd>{this.state.solicitudlm2.destino}</dd>
              <dt>Vehículo:</dt>
              <dd>{this.state.solicitudlm2.vehiculo}</dd>
              <dt>Placa del vehículo:</dt>
              <dd>{this.state.solicitudlm2.placa}</dd>
              <dt>Personas que conforman la comision:</dt>
              <dd>{this.state.solicitudlm2.personas}</dd>
              <dt>Cantidad de Combustible que Solicita en Quetzales:</dt>
              <dd>{this.state.solicitudlm2.cantidad}</dd>
              <dt>Detalle de comisión:</dt>
              <dd>{this.state.solicitudlm2.detalle}</dd>
              <dt>Hora y Fecha de salida:</dt>
              <dd>{this.state.solicitudlm2.fechaS}</dd>
              <dt>Fecha de regreso:</dt>
              <dd>{this.state.solicitudlm2.fechaR}</dd>
              <dt>Piloto:</dt>
              <dd>{this.state.solicitudlm2.piloto}</dd>
              <dt>Vo.Bo:</dt>
              <dd>{this.state.solicitudlm2.autorizada}</dd>
            </dl>
            <Link id="btn-editar" to={`/editar-solicitud-la-maquina-II/${this.state.key}`} class="btn btn-warning">Editar <EIcon /> </Link>&nbsp;
            <button id="btn-eliminar" onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Eliminar <DIcon /> </button>
            <button id="btn-aprobado" onClick={this.aprobar.bind(this, this.state.key)} class="btn btn-success">Aprobar <OkIcon /> </button>
            <button id="btn-rechazado" onClick={this.rechazar.bind(this, this.state.key)} class="btn btn-danger">Rechazar <XIcon /> </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetalleLm2;