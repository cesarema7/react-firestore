import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
/*import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import MostrarLista from './Acciones/MostrarLista';
import AIcon from '@material-ui/icons/Add';
import EIcon from '@material-ui/icons/Edit';
import DIcon from '@material-ui/icons/Delete';
import VIcon from '@material-ui/icons/Visibility';*/

import firebase from '../Firebase';

const style = {
    flexGrow: 1
}




const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>


                    

                    <Typography align="center" variant="h3" style={style}>
                        Solicitudes de combustible
                    </Typography>

                    

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

export default NavBar;