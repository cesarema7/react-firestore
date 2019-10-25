import React,{useState} from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../Firebase'
import Navbar from './Navbar';


const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

function Login(props) {
	const { classes } = props

	// I'm produce state using useState.
	// The second parameter that will keep the first parameter value will change the value.
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	//When the form is submitted it will run
	function onSubmit(e){
		e.preventDefault()//blocks the postback event of the page
		console.log('email: '+email)
		console.log('password: '+password)
	}

	return (
		
		<div>			
			<div>
				{/*<Navbar/>*/}
			</div>
			<main className={classes.main}>
			
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Inicio De Sesión
       			</Typography>
				<form className={classes.form} onSubmit={onSubmit}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Correo Electrónico</InputLabel>
						{/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)}  />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Contraseña</InputLabel>
						{/* When the password field is changed, setPAssword will run and assign the password to the value in the input. */}
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}/>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={onLogin}
						className={classes.submit}>
						Iniciar Sesión 
          			</Button>
                      <div id="contenido"></div>
					
				</form>
			</Paper>
			</main>
		</div>
    )
    

    function onLogin(){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){
           // props.history.replace('/list')
			alert('¡BIENVENIDO!')

			if (email === 'reu@reu.com') {

				props.history.replace('/lista-solicitudes-reu')
				console.log('***********')
				console.log('vista de reu: ' + email)
				
			} else {
				if (email === 'sanmartin@sanmartin.com') {

					props.history.replace('/lista-solicitudes-san-martin')
					console.log('***********')
					console.log('vista de san martin: ' + email)
					
				} else {
					if (email === 'doc@doc.com') {
						
							props.history.replace('/lista-solicitudes-aprovadas')
								//alert('en proceso')
								console.log('***********')
								console.log('vista de doctora jefa: ' + email)
			
						
					} else {
						if (email === 'apro@apro.com') {
							props.history.replace('/lista-solicitudes-pendientes')
								console.log('***********')
								console.log('vista del que aprueba: ' + email)
						}
					}
				}
			} 
			if (email === 'sanfelipe@sanfelipe.com') {
				props.history.replace('/lista-solicitudes-san-felipe')
				console.log('***********')
				console.log('vista de san martin: ' + email)
			}
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert('Credenciales Incorrectas...      Intenta Nuevamente')
            // ...
		  });
		  
		/*
		  firebase.auth().currentUser 
		  .then(function(){
			  alert('No autorizado')
			  props.history.replace('/')
		  })
		  .catch*/

/*AuthStateChanged(function(user) {
            if (user) {
                console.log('siii')
                //aparece();


            }else{
                console.log('noooo')
            }
        });
    }*/
/*
    function aparece(){
        var contenido = document.getElementById('contenido');
        contenido.innerHTML = "solo lo ve usuario activo"
    }
    
    function ok() {
        firebase.auth().currentUser 
        .then(function(){
            alert('No autorizado')
            props.history.replace('/')
        })
    }*/

	}
}

export default withRouter(withStyles(styles)(Login))