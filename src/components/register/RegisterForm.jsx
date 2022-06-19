import React from "react";
import { Formik, Form, Field } from 'formik'
import TextField from '@mui/material/TextField';
import * as yup from "yup"
import Button from '@mui/material/Button';


const MyInput = ({ field, form, ...props }) => {
    
    return <TextField {...field} {...props}  helperText={form.touched[field.name] && form.errors[field.name]} error={form.touched[field.name] && form.errors[field.name] && true}></TextField> 

  };


const RegisterForm = () =>{
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return(
    <Formik 
    initialValues={{nombre:"", apellido:"", username: "", email: "", password: "", password2: "", phoneNumber: ""}} 
    validationSchema= {yup.object({
    nombre: yup.string()
        .required("Required")
        .max(20, 'Max 20 Char'),
    apellido: yup.string()
        .required("Required")
        .max(20, 'Max 20 Char'),
    username: yup.string()
        .min(2, 'Min 2 Char')
        .max(15, 'Max 15 Char')
        .required("Required"),
    email: yup.string()
        .email("Must be an Email")
        .required("Required"),
    password: yup.string()
        .min(2, 'Min 2 Char')
        .max(15, 'Max 15 Char')
        .required("Required"),
    password2: yup.string()
        .min(2, 'Min 2 Char')
        .max(15, 'Max 15 Char')
        .required("Required")
        .test("verfySamePass", "Ambas Contraseñas deben ser iguales",(value, ctx) => {
            
            if(value !== ctx.parent.password){
                return false
            }
            return true
        }),
    phoneNumber: yup.string()
        .matches(phoneRegExp, 'Numero No valido')

    })} 
    onSubmit = {(values, {setSubmitting}) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }}
    >
{  (yupData) =>      
            <Form id="formulario-registrarse">
                    <div id="contenedor-nombre-apellido" className="contenedor-input">
                        <Field
                            name="nombre"
                            component={MyInput}
                            tpye="text"
                            label="Nombre" 
                            variant="outlined"
                        >
                        </Field>
                        <Field
                            name="apellido"
                            component={MyInput}
                            tpye="text"
                            label="Apellido" 
                            variant="outlined"
                        >
                        </Field>
                    </div>
                    <div id="contenedor-username-mail" className="contenedor-input">
                        <Field
                            name="username"
                            component={MyInput}
                            tpye="text"
                            id="outlined-basic"
                            label="Username" 
                            variant="outlined"
                        >
                        </Field>


                        <Field
                            name="email"
                            component={MyInput}
                            tpye="email"
                            id="email-input"
                            label="Email" 
                            variant="outlined"
                        >
                        </Field>
                    </div>
                    {/* <TextField name="username" tpye="text" id="outlined-basic"  helperText={yupData.errors.username} label="Outlined" variant="outlined"></TextField> */}


                <div id="contenedor-password" className="contenedor-input">
                    <Field
                        name="password"
                        component={MyInput}
                        tpye="password"
                        variant="outlined"
                        id="pass1"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    >
                    </Field>
                    <Field
                        name="password2"
                        component={MyInput}
                        tpye="password"
                        variant="outlined"
                        id="pass2"
                        label="Repeat Password"
                        type="password"
                        autoComplete="repeat-password"
                    >
                    </Field>
                </div>
                <div id="contenedor-fecha-numbero" className="contenedor-input">
                    <Field
                            name="phoneNumber"
                            component={MyInput}
                            tpye="text"
                            variant="outlined"
                            id="phoneNumber"
                            label="Telefono"
                            type="text"
                            autoComplete="numero-telefono"
                        >
                        </Field>
                </div>
                <Button type="submit" variant="contained">Registrarse</Button>
            </Form>
}
    </Formik>
    )
}

export default RegisterForm