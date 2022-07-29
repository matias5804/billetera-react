import React, { useState } from 'react'
import axios from 'axios';

const baseUrl="http://localhost:3050/usuarios"

const FormLogin = () => {

    const [dataLogin, setDataLogin] = useState({
        username : '',
        password :''
    });

    function handleChange(e){ 
        setDataLogin(
            {
                ...dataLogin,
                [e.target.name]: e.target.value
            }
        )
    }

    const iniciarSesion  = async (e) => {
        e.preventDefault();

        await axios.get(baseUrl ,{params:{

            username:dataLogin.username, 
            password:dataLogin.password

        }})
        .then(response=> {
            return response.data;
        })
        .then(response =>{
            console.log(response)

            if (response.length>0){

                alert(`¡Bienvenido ${response[0].nombre} ${response[0].apellido}!`)

                if (response[0].financiera === "onix"){
                    window.location.href = "./onix"
                }
                if (response[0].financiera === "credifacil"){
                    window.location.href = "./credifacil"
                }
                if (response[0].financiera === "pasion"){
                    window.location.href = "./pasion"
                }
                if (response[0].financiera === "aiv"){
                    window.location.href = "./aiv"
                }
                if (response[0].financiera === "ficred"){
                    window.location.href = "./ficred"
                }

            }else{
                alert('el usuario o la conrtaseña no son correctos')
            }

        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <form > 
        <div className="form-group">
            <label htmlFor="username" className="text-info"></label><br/> 
            <input 
                type="text" 
                name="username" 
                id="username" 
                className="form-control" 
                placeholder="Usuario" 
                onChange={(e)=>handleChange(e)}
                value={dataLogin.username}
            />
        </div>

        <div className="form-group">
            <label htmlFor="contraseña" className="text-info"></label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                className="form-control" 
                placeholder="Contraseña" 
                onChange={(e)=>handleChange(e)}
                value={dataLogin.password}
            />

        </div>

        <div className="row" style={{height:"20px"}}></div> 

        <div className="form-group">
            <input 
                type="submit" 
                name="login"  
                className="btn btn-block btn-dark" 
                value="Ingresar billetera"
                onClick={iniciarSesion}
            />
        </div>

    </form>
  )
}

export default FormLogin