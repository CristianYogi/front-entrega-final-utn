import React from "react";
import { Formik, Form, Field } from 'formik'
import TextField from '@mui/material/TextField';
import * as yup from "yup"
import Button from '@mui/material/Button';
import SuccesfulAlert from "../alerts/SuccesfulAlert";

const MyInput = ({ field, form, ...props }) => {
    
    return <TextField {...field} {...props}  helperText={form.touched[field.name] && form.errors[field.name]} error={form.touched[field.name] && form.errors[field.name] && true}></TextField> 

  };

const RegisterForm = () =>{
    const [registerOk, setRegisterOk] = React.useState({status: null, message: ""})
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return(
    <Formik 
    initialValues={{nombre:"", apellido:"", userName: "", email: "", password: "", password2: "", phoneNumber: ""}} 
    validationSchema= {yup.object({
    nombre: yup.string()
        .required("Required")
        .max(20, 'Max 20 Char'),
    apellido: yup.string()
        .required("Required")
        .max(20, 'Max 20 Char'),
    userName: yup.string()
        .min(2, 'Min 2 Char')
        .max(15, 'Max 20 Char')
        .required("Required"),
    email: yup.string()
        .email("Must be an Email")
        .required("Required"),
    password: yup.string()
        .min(8, 'Min 8 Char')
        .max(20, 'Max 20 Char')
        .required("Required"),
    password2: yup.string()
        .min(8, 'Min 8 Char')
        .max(20, 'Max 20 Char')
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
        const formData = new FormData()
        formData.append('image', values.file);
        
        const data = {
            nombre : values.nombre,
            apellido : values.apellido,
            email : values.email,
            userName: values.userName,
            password: values.password
        }

        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID 6b56cc4baa832b7",
                Accept: "application/json",
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                console.log(response.data.link);
                data.img = {
                    link: response.data.link,
                    deleteHash: response.data.deletehash,
                    id: response.data.id
                }
                console.log(data.img)
                if(data.img){
                    fetch("https://apideploy-final.herokuapp.com/users/register", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Accept" : "application/json",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res)
                        setRegisterOk({status: res.status, message: res.message})
                    })
                    .catch(err => console.log(err))
                    setSubmitting(false)
                }
            });
    }}
    >
{  ({setFieldValue}) =>      
            <Form id="formulario-registrarse" encType="multipart/form-data">
                    <div id="contenedor-nombre-apellido" className="contenedor-input">
                        <Field
                            name="nombre"
                            component={MyInput}
                            type="text"
                            label="Nombre" 
                            variant="outlined"
                        >
                        </Field>
                        <Field
                            name="apellido"
                            component={MyInput}
                            type="text"
                            label="Apellido" 
                            variant="outlined"
                        >
                        </Field>
                    </div>
                    <div id="contenedor-username-mail" className="contenedor-input">
                        <Field
                            name="userName"
                            component={MyInput}
                            type="text"
                            id="outlined-basic"
                            label="Username" 
                            variant="outlined"
                        >
                        </Field>


                        <Field
                            name="email"
                            component={MyInput}
                            type="email"
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
                        type="password"
                        variant="outlined"
                        id="pass1"
                        label="Password"
                        autoComplete="current-password"
                    >
                    </Field>
                    <Field
                        name="password2"
                        component={MyInput}
                        type="password"
                        variant="outlined"
                        id="pass2"
                        label="Repeat Password"
                        autoComplete="repeat-password"
                    >
                    </Field>
                </div>
                <div id="contenedor-fecha-numbero" className="contenedor-input">
                    <Field
                            name="phoneNumber"
                            component={MyInput}
                            type="text"
                            variant="outlined"
                            id="phoneNumber"
                            label="Telefono"
                            autoComplete="numero-telefono"
                        >
                        </Field>
                </div>
                <input className="form-group" type="file" name="file" onChange={(event) => {
                    setFieldValue('file', event.target.files[0])
                }}></input>
                <Button type="submit" variant="contained">Registrarse</Button>
                {registerOk.status !== null  ? <SuccesfulAlert message={registerOk.message} status={registerOk.status}></SuccesfulAlert> : null}

            </Form>
}           
    </Formik>
    )
}

export default RegisterForm