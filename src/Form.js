import {Component} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { indigo } from '@mui/material/colors';
import { Paper } from '@mui/material';

import { LanguageContext } from './contexts/LanguageContext';

const words = {
    english:{
        email:'Email Address',
        password: 'Password',
        remember:'Remember me',
        signIn:'Sign In',
        forgotPaswd: 'Forgot password ?',
        askSignUp:"Don't have an account? Sign Up"
    },
    french:{
        email:'Adresse Electronique',
        password: 'Mot de Passe',
        remember:'Souviens-toi de moi',
        signIn:'Se Connecter',
        forgotPaswd: 'Mot de passe oublié ?',
        askSignUp:"Vous n'avez pas de compte ? Signer"
    },
    spanish:{
        email:'Correo Electrónico',
        password: 'Contraseña',
        remember:'Recuérdame',
        signIn:'Registrarse',
        forgotPaswd: 'Has olvidado tu contraseña ?',
        askSignUp:'Aún no tienes una cuenta? inscribirse'
    }
}

class Form extends Component {
    static contextType = LanguageContext
    state={
        language:'english'
    }

    handleChange = (e)=>{
        this.setState(st=>({
            language: e.target.value
        }))
        this.context.changeLanguage(e.target.value)
    }
    render() {
        const handleSubmit = (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          // eslint-disable-next-line no-console
          console.log({
            email: data.get('email'),
            password: data.get('password'),
          });
        };
        // console.log(this.context);
        const {language} = this.context
        const {email, password, remember, signIn, forgotPaswd, askSignUp} = words[language]

        return (
            <Container component="main" maxWidth="xs">
              <Paper elevation={3} sx={{bgcolor:'white', px:3, pb:2}}>
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    {signIn}
                    </Typography>

                    <Box sx={{ maxWidth: 220, mt:2 }}>
                        <FormControl variant='standard' fullWidth>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.language}
                            label="Language"
                            onChange={this.handleChange}
                            >
                            <MenuItem value='english'>English</MenuItem>
                            <MenuItem value='french'>French</MenuItem>
                            <MenuItem value='spanish'>Spanish</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={email}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={password}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={remember}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 , bgcolor:indigo[900], '&:hover': {bgcolor:indigo[700]}}}
                    >
                        {signIn}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            {forgotPaswd}
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {askSignUp}
                        </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>

              </Paper>
            </Container>
        );
        
    }
}

export default Form