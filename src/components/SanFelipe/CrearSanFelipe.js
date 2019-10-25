import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

class CrearSanFelipe extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('solicitudes-san-felipe');
    this.state = {
      distrito: 'SAN FELIPE',
      cantidad: '',
      destino: '',
      fecha: '',
      personas: '',
      piloto: '',
      vehiculo: '',
      estadosoli: 'PENDIENTE'
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { distrito, cantidad, destino, fecha, personas, piloto, vehiculo, estadosoli } = this.state;

    this.ref.add({
      distrito,
      cantidad,
      destino,
      fecha,
      personas,
      piloto,
      vehiculo,
      estadosoli
    }).then((docRef) => {
      this.setState({
        distrito: 'SAN FELIPE',
        cantidad: '',
        destino: '',
        fecha: '',
        personas: '',
        piloto: '',
        vehiculo: '',
        estadosoli: 'PENDIENTE',
      });
      this.props.history.push("/lista-solicitudes-san-felipe")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


 

  render() {
   /* function aparece(){
      var distrito2 = document.getElementById('distrito2');
      distrito2.innerHTML = "Retalhuleu"
      
  }*/
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('si')
        console.log("Correo lista: " + user.email)
        

        if (user.email === 'sanfelipe@sanfelipe.com') {
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

    

    const {  cantidad, destino, fecha, personas, piloto, vehiculo } = this.state;
    return (


      <div className="animated slideInUpTiny animation-duration-3">
        <div className="m-5">
          <Grid container spacing={3}>
            <Grid className="mx-auto">
              <div >
              
			  </div>
			  <div>
                <h1 className="text-center font-weight-bold">
                  Solicitud de Combustible SAN FELIPE
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
                  value="SAN FELIPE"//{distrito}
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />
              
				<TextField
          id="destino"
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
                  >
                    
                  </TextField>
						
                </div>
                <div className="mt-4">
                  <TextField
            id="vehiculo"
            name="vehiculo"
          value={vehiculo}
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
                  >
                   
                  </TextField>
                </div>

                <div className="mt-1">
                  <TextField
                    id="personas"
                    name="personas"
                    label="Personas que conforman la comision"
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
                  label="Cantidad de Combustible que Solicita"
                  value={cantidad}
                  
                  onChange={this.onChange}
                  margin="normal"
                  fullWidth
                />
              </div>

              <div className="mt-4">
                <Grid container justify="center">
                  <Grid item xs={5}>
                    <TextField
                      id="fecha"
                      name="fecha"
                      label="Hora y Fecha"
                      type="date"
					  InputLabelProps={{ shrink: true, }}
                      value={fecha}
                      
          onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
            id="piloto"
            name="piloto"
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
                    >
                      
                    </TextField>
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

export default CrearSanFelipe;