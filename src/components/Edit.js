import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      cantidad: '',
      destino: '',
      fecha: '',
      personas: '',
      piloto: '',
      vehiculo: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('solicitudes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const solicitud = doc.data();
        this.setState({
          key: doc.id,
          cantidad: solicitud.cantidad,
          destino: solicitud.destino,
          fecha: solicitud.fecha,
          personas: solicitud.personas,
          piloto: solicitud.piloto,
          vehiculo: solicitud.vehiculo
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({solicitud:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { cantidad, destino, fecha, personas, piloto, vehiculo } = this.state;

    const updateRef = firebase.firestore().collection('solicitudes').doc(this.state.key);
    updateRef.set({
      cantidad,
      destino,
      fecha,
      personas,
      piloto,
      vehiculo
    }).then((docRef) => {
      this.setState({
        key: '',
        cantidad: '',
        destino: '',
        fecha: '',
        personas: '',
        piloto: '',
        vehiculo: ''
      });
      //this.props.history.push("/show/"+this.props.match.params.id)
      this.props.history.push("/list")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
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

      <div className="animated slideInUpTiny animation-duration-3">
        <div className="m-5">
          <Grid container spacing={3}>
            <Grid className="mx-auto">
              <div>
              <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Volver a detalles de solicitud</Link></h4>
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
                  >
                    
                  </TextField>
						
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
                  >
                   
                  </TextField>
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
                  label="Cantidad de Combustible que Solicita"
                  value={this.state.cantidad}
                  type="text"
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
                      value={this.state.fecha}
                      type="text"
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
                    >
                      
                    </TextField>
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

export default Edit;