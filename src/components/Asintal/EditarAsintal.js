import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

class EditarAsintal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      estadosoli: '',
      distrito: '',
      cantidad: '',
      destino: '',
      fechaS: '',
      personas: '',
      piloto: '',
      vehiculo: '',
      placa: '',
      detalle: '',
      fechaR: '',
      autorizada: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('solicitudes-asintal').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const solicitudasintal = doc.data();
        this.setState({
          key: doc.id,
          estadosoli: solicitudasintal.estadosoli,
          distrito: solicitudasintal.distrito,
          cantidad: solicitudasintal.cantidad,
          destino: solicitudasintal.destino,
          fechaS: solicitudasintal.fechaS,
          personas: solicitudasintal.personas,
          piloto: solicitudasintal.piloto,
          vehiculo: solicitudasintal.vehiculo,
          placa: solicitudasintal.placa,
          detalle: solicitudasintal.detalle,
          fechaR: solicitudasintal.fechaR,
          autorizada: solicitudasintal.autorizada
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({solicitudasintal:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { estadosoli, distrito, cantidad, destino, fechaS, personas, piloto, vehiculo, placa, detalle, fechaR, autorizada } = this.state;

    const updateRef = firebase.firestore().collection('solicitudes-asintal').doc(this.state.key);
    updateRef.set({
      estadosoli,
      distrito,
      cantidad,
      destino,
      fechaS,
      personas,
      piloto,
      vehiculo,
      placa,
      detalle,
      fechaR,
      autorizada
    }).then((docRef) => {
      this.setState({
        key: '',
        estadosoli: '',
        distrito: '',
        cantidad: '',
        destino: '',
        fechaS: '',
        personas: '',
        piloto: '',
        vehiculo: '',
        placa: '',
        detalle: '',
        fechaR: '',
        autorizada: ''
      });
      window.location ="https://control-ambulancias-d69ec.firebaseapp.com/lista-solicitudes-pendientes"
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'cesarema7@gmail.com') {
          //console.log("el usuario es valido")
          //console.log("correo del usuario: " + user.email)
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

      <div className="animated slideInUpTiny animation-duration-3">
        <div className="m-5">
          <Grid container spacing={3}>
            <Grid className="mx-auto">
              <div>
                <h4><Link to={`/detalle-solicitud-el-asintal/${this.state.key}`} class="btn btn-primary">Volver a detalles de solicitud ASINTAL</Link></h4>
              </div>
              <div>
                <h1 className="text-center font-weight-bold">
                  Solicitud de Combustible
                </h1>
                <small className="d-flex justify-content-center font-italic">
                  Ingrese los datos para la Solicitud de Combustible
                </small>
              </div>
              <div className="mt-5">
                <div>

                <TextField
                  type="text"
                  id="estadosoli"
                  name="estadosoli"
                  label="Estado de la solicitud:"
                  disabled
                  value={this.state.estadosoli}
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />

                <TextField
                  type="text"
                  id="distrito"
                  name="distrito"
                  label="Distrito al que pertenece éste usuario:"
                  disabled
                  value={this.state.distrito}
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />

                <TextField
                  id="destino"
                  name="destino"
                  value={this.state.destino}
                  onChange={this.onChange}
                  fullWidth
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Destino:</InputAdornment>
                    )
                  }}
                />
                
                </div>
                <div className="mt-4">
                  <TextField
                    id="vehiculo"
                    name="vehiculo"
                    value={this.state.vehiculo}
                    type="text"
                    onChange={this.onChange}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Vehiculo
                        </InputAdornment>
                      )
                    }}
                  />
                   
                  <TextField
                    id="placa"
                    name="placa"
                    label="Placa del vehículo: "
                    value={this.state.placa}
                    type="text"
                    onChange={this.onChange}
                    margin="normal"
                    fullWidth
                  />

                </div>

                <div className="mt-1">
                  <TextField
                    id="personas"
                    name="personas"
                    label="Personas que conforman la comision"
                    value={this.state.personas}
                    type="text"
                    onChange={this.onChange}
                    margin="normal"
                    fullWidth
                  />
                  <small className="font-italic">
                    Puede anotar todos los nombres en este campo separados por
                    una coma "Juan, Pedro"
                  </small>
                </div>
              </div>

              <div>
                <TextField
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  label="Cantidad de Combustible que Solicita en Quetzales: "
                  value={this.state.cantidad}                  
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />

                <TextField
                  type="text"
                  id="detalle"
                  name="detalle"
                  label="Detalle de comisión: "
                  value={this.state.detalle}                  
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />

              </div>

              <div className="mt-4">
              <h6>Fecha y Hora de Salida / Regreso</h6>
                <Grid container justify="center">                  
                  <Grid item xs={5}>
                    <TextField
                      id="fechaS"
                      name="fechaS"
                      label="Salida: "
                      type="datetime-local"
					            InputLabelProps={{ shrink: true, }}
                      value={this.state.fechaS}
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="piloto"
                      name="piloto"
                      value={this.state.piloto}
                      type="text"
                      onChange={this.onChange}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            Piloto:
                          </InputAdornment>
                        )
                      }}
                      className="mt-3"
                    />
                      
                  </Grid>
                </Grid>
              </div>

              <div className="mt-4">
                <Grid container justify="center">
                  <Grid item xs={5}>
                    <TextField
                      id="fechaR"
                      name="fechaR"
                      label="Retorno: "
                      type="date"
					            InputLabelProps={{ shrink: true, }}
                      value={this.state.fechaR}                      
                      onChange={this.onChange}
                    />
                  </Grid>
                  
                  <Grid item xs={5}>
                    <TextField
                      id="autorizada"
                      name="autorizada"
                      value={this.state.autorizada}
                      type="text"
                      onChange={this.onChange}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            Vo.Bo:
                          </InputAdornment>
                        )
                      }}
                      className="mt-3"
                    />
                      
                  </Grid>
                  
                </Grid>
              </div>

              <div className="mt-5 d-flex justify-content-center">
                <Fab variant="extended" color="primary" aria-label="add" onClick={this.onSubmit}>
                  <NavigationIcon />
                  Actualizar Solicitud
                </Fab>
              </div>
            </Grid>            
          </Grid>
        </div>
      </div>
    );
  }
}

export default EditarAsintal;