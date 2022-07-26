import React from 'react'
import FormularioPago from '../components/FormularioPago'
//import '../components/styles/cuotas.css'

const Consulta = () => {
  return (
    <div className='row'>
      <div className='col-md-3 col-sm-0 col-xs-0 textDetalle'>
        <div className="row" style={{height:"40px"}}></div>
          <p className='text-center font-weight-bold lead '>
              DETALLE DE LAS CUOTAS A PAGAR DE: `${}`
          </p>
      </div>

      <FormularioPago/>
      <div className="row" style={{height:"40px"}}></div>
    </div>
  )
}

export default Consulta