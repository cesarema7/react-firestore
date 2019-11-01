import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ExitIcon from '@material-ui/icons/ExitToApp';
import firebase from '../Firebase';

const style = {
    flexGrow: 1
}

const NavBar2 = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>    
                    <script> window.onLoad=sesion() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          //console.log('**********************')
          //console.log("Sesión iniciada con: " + user.email)
          
          var usuario = document.getElementById('usuario');
          usuario.innerHTML = ('Hola: ' + user.email)
          usuario.style.display = 'inline';  

          var bienvenido = document.getElementById('bienvenido');
          bienvenido.style.display = 'none';
          
          var contenido = document.getElementById('contenido');
          contenido.style.display = 'inline';
          
        } else {
          // No user is signed in.
          var contenido = document.getElementById('contenido');
          contenido.style.display = 'none';

          var bienvenido = document.getElementById('bienvenido');
          bienvenido.style.display = 'inline';

          var usuario = document.getElementById('usuario');
          usuario.style.display = 'none';

          console.log('***********************')
          console.log("Sesión NOO iniciada")
        }
      })
} </script>

                    <Typography id="bienvenido" align="center" variant="h3" style={style}>
                        Bienvenido 
                    </Typography>                  

                    <Typography id="usuario" align="center" variant="h3" style={style} />

                    <Fab id="contenido"  variant="extended" color="secondary" onClick={cerrar}>
                        Cerrar Sesión <ExitIcon/>
                    </Fab>

                </Toolbar>
            </AppBar>

        </div>
    )
}

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('saliendo.....')
    })
    .catch(function(error){
        console.log(error)
    })
}

export default NavBar2;