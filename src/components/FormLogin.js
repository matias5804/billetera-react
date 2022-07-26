import React, { useState } from 'react'

const FormLogin = () => {

    const [user, setUser] =useState('');
    const [password, setPasword] =useState('')

    function handleChange(name, value){
        if(name === "username"){
            setUser(value)
        }else{
            setPasword(value)
        }
    }

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
            <label for="username" class="text-info"></label><br/> 
            <input 
                type="text" 
                name="username" 
                id="username" 
                className="form-control" 
                placeholder="Usuario" 
                handleChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label for="contraseña" class="text-info"></label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                className="form-control" 
                placeholder="Contraseña" 
                handleChange={handleChange}
            />

        </div>

        <input 
            type="submit" 
            name="login"  
            className="btn btn-block btn-dark" 
            value="Ingresar billetera"
        />

    </form>
  )
}

export default FormLogin