import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import {Avatar, Box, Button, Grid, Link, Paper, Typography} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

import CustomerService from "../../../services/CustomerService";

import { ToastContainer, toast } from 'react-toastify';


const sign = new URL("../../../assets/images/sign.png",import.meta.url)

const Register = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: "20px auto"}
    const paperStyleContainer = {
        padding: 20, height: '83vh', width: 500, mt: -5,
        margin: "50px auto"
    }

    const avatarStyle = {backgroundColor: '#1565C0'}

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        passWord: "",
        city: "",
        street: "",
        streetNo: "",
        zipCode: "",
        latValue: "",
        longValue: "",
        mobileNo: "",

    };

    const statusObj = {
        alert: false,
        message: '',
        severity: '',
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [btnLabel, setBtnLabel] = useState('Create Account');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitUser();
    }

    const clearFields = () => {

        setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            passWord: "",
            city: "",
            street: "",
            streetNo: "",
            zipCode: "",
            latValue: "",
            longValue: "",
            mobileNo: "",

        });
    };




    const submitUser = async () => {

        let dto = {};
        dto = formValues;
        console.log("form Values",formValues)
        let res = await CustomerService.registerCustomer(formValues);
        console.log(res.status)

        console.log("res Status", res)

        function showToast(success, savedSuccessfully) {

        }

        if (res.data.code === 200) {

            setStatus({
                alert: true,
                message: "S",
                severity: 'success'
            })
            showToast('success', 'saved successfully !');

            clearFields();

        } else {
            setStatus({
                alert: true,
                message: "E",
                severity: 'error'
            });
            console.log("not Equal")
            showToast('error', 'Not Saved');
        }
    };


    return (
        <Grid>
            <ToastContainer/>
            <Paper elevation={10} style={paperStyleContainer}>
                <Grid align='center'>
                    <img src={sign} />
                    {/*<Avatar style={avatarStyle}><LockOpenIcon/></Avatar>*/}
                    <h2 style={{color:"green"}}>Sign Up</h2>
                </Grid>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': {},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                          sx={{paddingLeft: 2, mt: -4}}>

                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='FirstName' placeholder='Enter FirstName'
                                       name="firstName"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='LastName' placeholder='Enter LastName'
                                       name="lastName"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Email' placeholder='Enter Email'
                                       name="email"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='UserName' placeholder='Enter UserName'
                                       name="username"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Password' placeholder='Enter Password'
                                       name="password"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='City' placeholder='Enter City'
                                       name="city"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Street' placeholder='Enter Street'
                                       name="street"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Street No' placeholder='Enter Street No'
                                       name="streetNo"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Zip Code' placeholder='Enter Zip Code'
                                       name="zipCode"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Lat Value' placeholder='Enter Lat Value'
                                       name="latValue"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Long Value' placeholder='Enter Long Value'
                                       name="longValue"
                                       validators={['required']}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: 2}}>
                            <TextField label='Mobile No' placeholder='Enter Mobile No'
                                       name="mobileNo"
                                       validators={['required']}
                            />
                        </Grid>


                    </Grid>
                    <Button type='submit' color="success" variant="contained" sx={{mt: 3, ml: 20}}>
                        {btnLabel}
                    </Button>
                </Box>
                <Typography sx={{mt: 1, ml: 20}}> Previous Page ?
                    <Link href="dashboard" underline="none" >
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Register