import React from "react";
import { Formik, Form, Field } from 'formik'
import TextField from '@mui/material/TextField';
import * as yup from "yup"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';


const MyInput = ({ field, form, ...props }) => {
    
    // return <TextField {...field} {...props}  helperText={form.touched[field.name] && form.errors[field.name]} error={form.touched[field.name] && form.errors[field.name] && true}></TextField> 
    return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        
        {field.name === 'username' ? <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> : <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>}

        <TextField {...field} {...props}  helperText={form.touched[field.name] && form.errors[field.name]} error={form.touched[field.name] && form.errors[field.name] && true} />
    </Box>
    )

  };


const RegisterForm = () =>{
    return(
    <Formik 
    initialValues={{username: "", password: ""}} 
    validationSchema= {yup.object({
    username: yup.string()
        .min(2, 'Min 2 Char')
        .max(15, 'Max 15 Char')
        .required("Required"),
    password: yup.string()
        .min(2, 'Min 2 Char')
        .max(15, 'Max 15 Char')
        .required("Required")

    })} 
    onSubmit = {(values, {setSubmitting}) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }}
    >
{  (yupData) =>      
            <Form id="formulario-registrarse">
                    <div id="contenedor-username-login" className="contenedor-input">
                        <Field
                            name="username"
                            component={MyInput}
                            tpye="text"
                            id="outlined-basic"
                            label="Username" 
                            variant="standard"
                        >
                        </Field>
                    </div>
                    {/* <TextField name="username" tpye="text" id="outlined-basic"  helperText={yupData.errors.username} label="Outlined" variant="outlined"></TextField> */}


                <div id="contenedor-password-login" className="contenedor-input">
                    <Field
                        name="password"
                        component={MyInput}
                        tpye="password"
                        variant="standard"
                        id="pass1"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    >
                    </Field>
                </div>
                <Button type="submit" variant="contained">Logearse</Button>
            </Form>
}
    </Formik>
    )
}

export default RegisterForm