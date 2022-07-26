import React from 'react'
import AlertaLogin from '../components/AlertaLogin';
import { useState } from 'react';
import logoPasion from "../assets/img/pasion.png"
//import "../components/styles/credifacil.css"
import WhatsApp from "../components/WhatsApp"
//import axios from axios;


const Pasion = () => {

    const [body,setBody] = useState({documento:''})
    
    const inputChange =({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]:value
        })
    }

    const onSubmit = () => {
        window.location.href = "./consulta"
    }

    return (
        <>
            <div class="row" style={{height: "30px"}}></div>
            <div className="row"style={{height:"110px"}}> 
                <img src={logoPasion} alt='logo' />   
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
                                <input type="text" className="form-control" name="documento" placeholder="Ingresa aquí tu documento"
                                onChange={inputChange}
                                />
                                <input type="hidden" className="form-control" name="financiera" value="ONIX"/>  
                            </div>
                            <button className="btn btn-danger btn-block" style={{width:"100%"}} onClick={onSubmit}
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

                <AlertaLogin/>

                <div className="col-md-2"></div>  
            </div>

            <WhatsApp/>

        </>
    )
}
export default Pasion