import React, { useState } from 'react'

const FormLogin2 = () => {

    const [user, setUser] =useState('');
    const [password, setPasword] =useState('')

    function handleChange(name, value){
        if(name === "username"){
            setUser(value)
        }else{
            setPasword(value)
        }
    }
    console.log(user);

    function handleSubmit(e){
        e.preventDefault();
        const account = { user , password }
        if(account){
            console.log('account', account);
        }
    }
 
  return (
    <form onSubmit={handleSubmit}> 
        <div className="form-group">
            <label htmlFor="username" className="text-info"></label><br/> 
            <input 
                type="text" 
                name="user" 
                id="user" 
                className="form-control" 
                placeholder="Usuario" 
                handleChange={handleChange}
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
                handleChange={handleChange}
            />

        </div>

        <div className="row" style={{height:"20px"}}></div> 

        <div className="form-group">
            <input 
                type="submit" 
                name="login"  
                className="btn btn-block btn-dark" 
                value="Ingresar billetera"
            />
        </div>

    </form>
  )
}

export default FormLogin2