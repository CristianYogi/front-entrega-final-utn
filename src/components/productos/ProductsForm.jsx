import React from "react";
import { Formik, Form, Field } from 'formik'
import TextField from '@mui/material/TextField';
import * as yup from "yup"
import Button from '@mui/material/Button';
import SuccesfulAlert from "../alerts/SuccesfulAlert";
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const MyInput = ({ field, form, ...props }) => {
    
    return <TextField {...field} {...props}  helperText={form.touched[field.name] && form.errors[field.name]} error={form.touched[field.name] && form.errors[field.name] && true}></TextField> 

  };

  const MySelectInput = ({ field, form, ...props }) => {
    const categorias = ["Electrodomesticos","Limpieza", "Juegos", "Perisfericos", "Ropa", "Muebles"]
    return <TextField {...field} {...props}  helperText={form.touched[field.name] && form.errors[field.name]} error={form.touched[field.name] && form.errors[field.name] && true}>

        {categorias.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}

    </TextField> 

  };

const ProductsForm = () =>{
    const [registerOk, setRegisterOk] = React.useState({status: null, message: ""})
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return(
    <Formik 
    initialValues={{title:"", body:"", categoria: "", precio: ""}} 
    validationSchema= {yup.object({
        title: yup.string()
        .required("Required")
        .max(40, 'Max 40 Char'),
        body: yup.string()
        .required("Required"),
        categoria: yup.string()
        .required("Required"),
        precio: yup.number()
        .required("Required")
        .min(30, 'Precio Minimo 30$')
        .positive("Debe de ser mayor que 0")
        .integer("Debe de ser un numero.")
    })} 
    onSubmit = {(values, {setSubmitting}) => {
        const formData = new FormData()
        formData.append('image', values.file);
        const data = {
            title : values.title,
            body : values.body,
            categoria : values.categoria,
            precio: values.precio,
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
                if(data.img){
                    fetch("https://apideploy-final.herokuapp.com/productos", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Accept" : "application/json",
                            "Authorization" : getCookie('access_token'),
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
                    <Field
                        name="title"
                        component={MyInput}
                        tpye="text"
                        label="Titulo" 
                        variant="outlined"
                    >
                    </Field>

                    <Field
                            name="body"
                            component={MyInput}
                            type="text"
                            id="descripcion"
                            multiline
                            label="Descripcion" 
                            maxRows={10}
                            variant="outlined"
                        >
                        </Field>
                    <div id="contenedor-username-mail" className="contenedor-input">
                        <Field
                            name="categoria"
                            select
                            component={MySelectInput}
                            onChange={(event) => {
                                setFieldValue('categoria', event.target.value)
                            }}

                            type="text"
                            id="outlined-basic"
                            label="Categoria" 
                            variant="outlined"
                        >
                        </Field>
                        <Field
                            name="precio"
                            component={MyInput}
                            type="number"
                            
                            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            InputProps={{
                                startAdornment:
                                <InputAdornment position="start">$</InputAdornment>,
                                }}

                            id="precio"
                            label="Precio" 
                            variant="outlined"
                        >
                        </Field>
                    </div>

                <input className="form-group" type="file" name="file" onChange={(event) => {
                    setFieldValue('file', event.target.files[0])
                }}></input>
                <Button type="submit" variant="contained">Cargar Producto</Button>
                
                {registerOk.status !== null  ? <SuccesfulAlert message={registerOk.message} status={registerOk.status}></SuccesfulAlert> : null}

            </Form>
}           
    </Formik>
    )
}

export default ProductsForm