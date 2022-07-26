import React from 'react'

const FormularioPago = () => {

  const onSubmitPagar = () => {
    console.log("aca");
  }

  return (
    <form id="formulario" method="POST" action="/pago">  
      <div className="row center-block">
        <div className="col-md-3 col-sm-3 col-xs-0"></div>  
        <div className="col-md-6 col-sm-6 col-xs-12 table-responsive">
          <table className="table table-striped table-hover table-bordered bg-white"> 
            <thead>
              <tr className="bg-white">
              <td className="font-weight-bold">Comercio</td>  
              <td className="font-weight-bold">Cuota</td>
              <td className="font-weight-bold">Vencimiento</td>
              <td className="font-weight-bold">Monto</td>
              <td className="font-weight-bold">Elegir Cuota</td>
            </tr>
          </thead> 
          <tbody id="bodyCreditos"> 
            
            <tr>
              <td>J J DEPORTES  * QUILMES</td> 
              <td>1</td>  
              <td>10/08/2022</td>
              <td>9890</td>
              <td>
                <input type="checkbox" id="cuota" name="cuota" data-fecha="10/08/2022" data-dni="34438263" data-solicitud="261904211" data-persona="583451" data-ncuota="1" data-ncredito="60433144" data-financiera="ONIX" data-idcuota="274326348" data-totalcuota="9890" data-m="9890"/>  
              </td>
            </tr>
            
          </tbody>
        </table>
        </div>
       <div className="col-md-3 col-sm-3 col-xs-0"></div> 
     </div>

    <div className="row"> 
      <div className="col-md-4"></div>
      <div className="col-md-4 align-self-center text-center">
        <h3 className=" text-info text-center">TOTAL A PAGAR: $ <span id="total"> 9890 </span></h3>   
      </div>
      <div className="col-md-4"></div> 
    </div>

    <div className="row">
      <div className="col-sm-3 col-md-3 col-lg-5"></div>
      <div className="col-sm-6 col-md-6 col-lg-2  align-self-center text-center">
            <input type="hidden" id="datos" name="datos" value=""/>    
            <button type="submit" id="pagar" nombre="pagar" className="btn btn-primary btn-block btn-pagar" onClick={onSubmitPagar}>  
            PAGAR 
            </button> 
      </div>
      <div className="col-sm-3 col-md-3 col-lg-5"></div>       
    </div>
    </form>

  )
}

export default FormularioPago