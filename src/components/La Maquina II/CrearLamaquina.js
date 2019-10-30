import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

class CrearLm2 extends Component {

  constructor() {
    super();
    
    this.ref = firebase.firestore().collection('solicitudes-lm2');
    this.state = {
      distrito: 'LA MÁQUINA II',
      cantidad: '',
      destino: '',
      fechaS: '',
      personas: '',
      piloto: '',
      vehiculo: '',
      estadosoli: 'PENDIENTE',
      placa: '',
      detalle: '',
      fechaR: '',
      autorizada: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { distrito, cantidad, destino, fechaS, personas, piloto, vehiculo, estadosoli, placa, detalle, fechaR, autorizada } = this.state;

    this.ref.add({
      distrito,
      cantidad,
      destino,
      fechaS,
      personas,
      piloto,
      vehiculo,
      estadosoli,
      placa,
      detalle,
      fechaR,
      autorizada
    }).then((docRef) => {
      
      this.setState({
        distrito: '',
        cantidad: '',
        destino: '',
        fechaS: '',
        personas: '',
        piloto: '',
        vehiculo: '',
        estadosoli: '',
        placa: '',
        detalle:'',
        fechaR: '',
        autorizada: ''
      });
      this.props.history.push("/lista-solicitudes-la-maquina-II")
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

        if (user.email === 'csmaquina2@gmail.com') {
          console.log("el usuario es valido")
          console.log("correo del usuario: " + user.email)
        } else {
          window.location = '/'           
        }

      } else {
        // No user is signed in.
        console.log('no')
        window.location = '/' 
      }
    });

    const {  cantidad, destino, fechaS, personas, piloto, vehiculo, placa, detalle, fechaR, autorizada } = this.state;
    return (


      <div className="animated slideInUpTiny animation-duration-3">
        <div className="m-5">
          <Grid container spacing={3}>
            <Grid className="mx-auto">
              <div >
              
			  </div>
			  <div>
                <h1 className="text-center font-weight-bold">
                  Solicitud de Combustible LA MÁQUINA II
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
                  value="PENDIENTE"
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


                  // medio funciona   value={distrito , 'ejemplo'}


                  //value="asdfasdf"
                  value="LA MÁQUINA II"//{distrito}
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />
              
				<TextField
          id="destino"
          required
          autoFocus
          name="destino"
                    value={destino}
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
            required
            name="vehiculo"
          value={vehiculo}
          type="text"
          onChange={this.onChange}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Vehiculo:
                        </InputAdornment>
                      )
                    }}
                  />

                  <TextField
                    id="placa"
                    required
                    name="placa"
                    label="Placa del vehículo: "
                    value={placa}
                    type="text"
                    onChange={this.onChange}
                    margin="normal"
                    fullWidth
                  />
                   
                </div>

                <div className="mt-1">
                  <TextField
                    id="personas"
                    required
                    name="personas"
                    label="Personas que conforman la comision:"
                    value={personas}
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
                  value={cantidad}
                  required
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />

                <TextField
                  type="text"
                  id="detalle"
                  name="detalle"
                  label="Detalle de comisión: "
                  value={detalle}
                  required
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
                      value={fechaS}
                      required
          onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
            id="piloto"
            name="piloto"
            required
                      value={piloto}
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
                      value={fechaR}
                      required
          onChange={this.onChange}
                    />
                  </Grid>
                  
                  <Grid item xs={5}>
                    <TextField
            id="autorizada"
            name="autorizada"
            required
                      value={autorizada}
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
                  Enviar Solicitud
                </Fab>
              </div>
              
              
            </Grid>
            
          </Grid>
        </div>
      </div>

    );
  }
}

export default CrearLm2;