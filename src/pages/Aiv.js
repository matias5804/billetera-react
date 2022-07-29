import React from 'react'
import { useState } from 'react';
import logoAiv from "../assets/img/aiv.png"
import '../components/styles/login.css'
import '../components/styles/login.css'
import axios from 'axios';
import AlertaLogin from '../components/AlertaLogin'

const baseUrl="http://localhost:3050/usuarios"

const Aiv = () => {

    const [documento, setDocumento] = useState({dni:''});    
    const [sinCuota, setSinCuota] = useState(false)
    
    const inputChange =({target}) => {
        const {name, value} = target

        setDocumento({
            [name]:value
        })
        console.log(documento);

        setSinCuota(false)
    }

    const onSubmit = async(e) => {

        e.preventDefault();

        await axios.get(baseUrl, 
           {params:{dni: documento.dni}}
        )

        .then(response=>{   
            return response.data
        })

        .then(response => {

            console.log(response);
            
            if ( (response.length > 0) && (response[0].financiera === "aiv") ) {

                alert(`¡Bienvenido ${response[0].nombre} ${response[0].apellido}!`)
                window.location.href = "./consulta"

            }else{
                setSinCuota(true)
            }

        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        <>
            <div className="row" style={{height: "30px"}}></div>
            <div className="row"style={{height:"110px"}}> 
                <img src={logoAiv} alt='logo' />   
            </div>
            <div className="row" style={{height:"120px"}}></div> 
            <div className="row" style={{height:"60px"}}>  
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <p className=" text-dark text-load  text-center"> INGRESA TU DNI Y TE EXPLICAMOS COMO PODES PAGAR TUS CUOTAS </p> 
                </div>
                <div className="col-md-4 "></div> 
            </div>

            <div className="row">  
                <div className="col-md-4 "></div>       
                <div className="col-md-4 ">
                    <div className="card card-body">
                        <form action="/consulta" method="GET">
                        <div className="form-group" style={{marginBottom:"1rem"}}>
                                <input 
                                    type="num" 
                                    className="form-control" 
                                    name="dni" 
                                    placeholder="Ingresa aquí tu documento"
                                    onChange={inputChange}
                                    params={sinCuota}
                                /> 
                            </div>

                            <button 
                                className="btn btn-danger btn-block" 
                                style={{width:"100%"}} 
                                onClick={onSubmit}
                                > 
                                Consultar Cuotas 
                            </button>       
                        </form>
                    </div>
                </div>  
                <div className="col-md-4"></div> 
            </div> 

            <div className="row" style={{height:"60px"}}></div> 


            <div className="row">
                <div className="col-md-2"></div>

            
                {sinCuota && <AlertaLogin/>}



                <div className="col-md-2"></div>  
            </div>


        </>
    )
}
export default Aiv