import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import MostrarLista from './Acciones/MostrarLista';
//import AIcon from '@material-ui/icons/Add';
//import EIcon from '@material-ui/icons/Edit';
//import DIcon from '@material-ui/icons/Delete';
//import VIcon from '@material-ui/icons/Visibility';
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


                    

                    <Typography align="center" variant="h3" style={style}>
                        Bienvenido 
                    </Typography>
                    {/*<div id="corre"></div>*/}

                    <Fab variant="extended" color="secondary" onClick={cerrar}>
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

 /*function correoU(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var correo = (user.email)
          //var corre = document.getElementById('corre');

          //corre.innerHTML = `

          
          //`;

          
          console.log('si')
          console.log("Correo asjfdklajf: " + correo)
          
          
    
        } else {
          // No user is signed in.
          console.log('no')
          alert('¡POR FAVOR INICIA SESIÓN!')
          window.location = '/' 
        }
      });
 }

//correoU();*/

export default NavBar2;