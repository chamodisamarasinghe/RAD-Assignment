import React from 'react'
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Grid,Paper, Avatar, Button, Typography,Link }  from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockIcon from '@mui/icons-material/Lock';


const log = new URL("../../../assets/images/log.png",import.meta.url)
const Login=()=>{

    const paperStyle={padding :20,height:'80vh',width:400,marginLeft:550,marginTop:45}


    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <img src={log} />
                    <h2 style={{color:"green"}}>Log In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required sx={{mt:4}}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required sx={{mt:2}}/>
                <Typography sx={{mt:3}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="success"
                            />
                        }
                        label="Remember me"

                    />
                    <Link href="#" sx={{ml:13,color:"success"}} underline="none" color='success'>
                        Forgot password ?
                    </Link>
                </Typography>
                <Link href="dash" underline="none">
                    <Button type='submit' color='success' variant="contained" sx={{mt:5}} fullWidth>Sign in</Button>
                </Link>
                <Typography sx={{mt:2,ml:10}}> Do you have an account ?
                    <Link href="register" underline="none" color='success' >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>


        </Grid>
    )
}

export default Login