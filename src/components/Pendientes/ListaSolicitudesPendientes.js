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
        //console.log('si')
        //console.log("Correo lista: " + user.email)
        
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
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

class ListaChampericoApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-champerico');
    this.unsubscribe = null;
    this.state = {
      solicitudchamperico: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudchamperico = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudchamperico.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudchamperico
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }
    
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible CHAMPERICO
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudchamperico.map(solicitudchamperico =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-champerico/${solicitudchamperico.key}`}>{solicitudchamperico.fechaS}</Link></td>
                    <td>{solicitudchamperico.destino}</td>
                    <td>{solicitudchamperico.distrito}</td>
                    <td>{solicitudchamperico.estadosoli}</td>
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

class ListaMuluaApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-mulua');
    this.unsubscribe = null;
    this.state = {
      solicitudesmulua: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudesmulua = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudesmulua.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudesmulua
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }    

  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible SANTA CRUZ MULUÁ
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudesmulua.map(solicitudmulua =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-santa-cruz-mulua/${solicitudmulua.key}`}>{solicitudmulua.fechaS}</Link></td>
                    <td>{solicitudmulua.destino}</td>
                    <td>{solicitudmulua.distrito}</td>
                    <td>{solicitudmulua.estadosoli}</td>
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

class ListaLm2Apro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-lm2');
    this.unsubscribe = null;
    this.state = {
      solicitudlm2: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudlm2 = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudlm2.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudlm2
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
          //console.log("el usuario es valido")
          //console.log("correo del usuario: " + user.email)
        } else {
          window.location = '/'         
        }

      } else {
        // No user is signed in.
        //console.log('no')
        window.location = '/' 
      }
    });

    return (
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible LA MAQUINA II
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudlm2.map(solicitudlm2 =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-la-maquina-II/${solicitudlm2.key}`}>{solicitudlm2.fechaS}</Link></td>
                    <td>{solicitudlm2.destino}</td>
                    <td>{solicitudlm2.distrito}</td>
                    <td>{solicitudlm2.estadosoli}</td>
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

class ListaSanCarlosApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-san-carlos');
    this.unsubscribe = null;
    this.state = {
      solicitudessancarlos: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudessancarlos = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudessancarlos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudessancarlos
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }
  
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible NUEVO SAN CARLOS
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudessancarlos.map(solicitudsancarlos =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-nuevo-san-carlos/${solicitudsancarlos.key}`}>{solicitudsancarlos.fechaS}</Link></td>
                    <td>{solicitudsancarlos.destino}</td>
                    <td>{solicitudsancarlos.distrito}</td>
                    <td>{solicitudsancarlos.estadosoli}</td>
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

class ListaCblancoApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-cblanco');
    this.unsubscribe = null;
    this.state = {
      solicitudescblanco: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudescblanco = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudescblanco.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,      
      });
    });
    this.setState({
      solicitudescblanco
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }
    
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)      

        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible CABALLO BLANCO
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudescblanco.map(solicitudescblanco =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-caballo-blanco/${solicitudescblanco.key}`}>{solicitudescblanco.fechaS}</Link></td>
                    <td>{solicitudescblanco.destino}</td>
                    <td>{solicitudescblanco.distrito}</td>
                    <td>{solicitudescblanco.estadosoli}</td>
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

class ListaSanFelipeApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-san-felipe');
    this.unsubscribe = null;
    this.state = {
      solicitudessanfelipe: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudessanfelipe = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudessanfelipe.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudessanfelipe
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }
    
  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)

        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
          //console.log('usuario permitido')
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible SAN FELIPE
            </h3>
          </div>
          
          <div class="panel-body">
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
                {this.state.solicitudessanfelipe.map(solicitudsanfelipe =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-felipe/${solicitudsanfelipe.key}`}>{solicitudsanfelipe.fechaS}</Link></td>
                    <td>{solicitudsanfelipe.destino}</td>
                    <td>{solicitudsanfelipe.distrito}</td>
                    <td>{solicitudsanfelipe.estadosoli}</td>
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

class ListaSanseApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-sanse');
    this.unsubscribe = null;
    this.state = {
      solicitudsanse: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudsanse = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudsanse.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudsanse
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }
    
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)       

        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible SAN SEBASTIÁN
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudsanse.map(solicitudsanse =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-sebastian/${solicitudsanse.key}`}>{solicitudsanse.fechaS}</Link></td>
                    <td>{solicitudsanse.destino}</td>
                    <td>{solicitudsanse.distrito}</td>
                    <td>{solicitudsanse.estadosoli}</td>
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

class ListaAsintalApro extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('solicitudes-asintal');
    this.unsubscribe = null;
    this.state = {
      solicitudesasintal: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solicitudesasintal = [];
    querySnapshot.forEach((doc) => {
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudesasintal.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
        destino,
        distrito,
        estadosoli,        
      });
    });
    this.setState({
      solicitudesasintal
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);    
  }
    
  render() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //console.log('si')
        //console.log("Correo lista: " + user.email)       

        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible EL ASINTAL
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
                {this.state.solicitudesasintal.map(solicitudasintal =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-el-asintal/${solicitudasintal.key}`}>{solicitudasintal.fechaS}</Link></td>
                    <td>{solicitudasintal.destino}</td>
                    <td>{solicitudasintal.distrito}</td>
                    <td>{solicitudasintal.estadosoli}</td>
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

class ListaSanandresApro extends Component {
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
        //console.log('si')
        //console.log("Correo lista: " + user.email)
       
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible SAN ANDRÉS VILLA SECA
            </h3>
          </div>
          
          <div class="panel-body">
                    
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
      const { fechaS, destino, distrito, estadosoli } = doc.data();
      solicitudessanmartin.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fechaS,
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
        //console.log('si')
        //console.log("Correo lista: " + user.email)
        
        if (user.email === 'gafretalhuleu@gmail.com' ||
            user.email === 'victorlloranca@gmail.com' ||
            user.email === 'cesarema7@gmail.com') {
          //console.log('usuario permitido')
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
      
      <div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              solicitudes de combustible SAN MARTIN
            </h3>
          </div>
          
          <div class="panel-body">
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
                {this.state.solicitudessanmartin.map(solicitudsanmartin =>
                  <tr>
                    <td><Link to={`/detalle-solicitud-san-martin/${solicitudsanmartin.key}`}>{solicitudsanmartin.fechaS}</Link></td>
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
    ListaChampericoApro,
    ListaMuluaApro,
    ListaLm2Apro,
    ListaSanCarlosApro,
    ListaCblancoApro,
    ListaSanFelipeApro,
    ListaSanseApro,
    ListaAsintalApro,
    ListaSanandresApro,
    ListaSanMartinApro
} 