import React from 'react'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'

//import PagarPorCuentaBancaria from '../../components/PagarPorCuentaBancaria'

const Pagos = () => {

  const[isOpenModalPago, openModalPago, closeModalPago] = useModal(false)

  return (

    <div>
        <div className="row" style={{height: "120px"}}></div>
        
        <div className="row"> 
            <div className="col-md-4 col-sm-2"></div>
            <div className="col-md-4 col-sm-8 align-self-center text-center"> 
                <a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=541792522-26c97218-3f7a-4706-9b29-755a2676c3d7" className=" btn btn-primary">PAGAR CON MERCADO PAGO</a> 
            </div>
            <div className="col-md-4 col-sm-2"></div>
        </div>

        <div className="row" style={{height: "40px"}}></div>

        <div className="row"> 
          <div className="col-md-4 col-sm-2"></div> 
          <div className="col-md-4 col-sm-8 align-self-center text-center">
            <div className="contenedor-modal">
                <div className="col-md-4 col-sm-2"></div>  

                <button onClick={openModalPago} type="button" className="btn btn-primary" data-toggle="modal" data-target="#miModal">PAGAR POR CUENTA BANCARIA</button>
            </div>
          </div>
        </div>

        <Modal isOpen={isOpenModalPago} closeModal={closeModalPago}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                  <button onClick={closeModalPago} type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
                  <h6 className="modal-title" id="myModalLabel">PAGA EL MONTO TOTAL POR TRANSFERENCIA O DEPOSITO BANCARIO A CUALQUIERA DE LAS SIGUIENTES CUENTAS:</h6>
              </div>

              <div className="modal-body">                           
                  <p className="text-center bg-active">CUENTAS BANCARIAS DE TUANA COBRANZAS</p>
                  <p className="text-center bg-active"> CUIT: 30-71129012-1</p>
                  <table className="table table-striped table-hover table-bordered table-sm bg-active"> 
                      <thead className="">
                          <tr className="">
                          <td className="font-weight-bold">Banco</td> 
                          <td className="font-weight-bold">cbu</td>
                          <td className="font-weight-bold">Nr de cuenta</td>
                          <td className="font-weight-bold">Tipo de cuenta</td>
                          </tr>
                      </thead> 

                      <tbody>
                          <tr className="">
                          <td>Santander Rio</td> 
                          <td>0720109320000001457090</td>
                          <td>109-014570/9</td>
                          <td>Cta Cte en pesos</td>  
                          </tr>
                      </tbody>
                      
                      <tbody>
                          <tr className="bg=white">
                          <td>Itaú</td> 
                          <td>2590051610033321410064</td>
                          <td>0333214-100/6</td>
                          <td>Cta. Cte. en pesos</td> 
                          </tr>
                      </tbody>
                  </table>
                  <h6 className="text-center bg-active">SACALE UNA FOTO AL COMPROBANTE Y ENVIALA JUNTO CON TU DNI POR WHATSAPP A CUALQUIERA DE NUESTROS TELEFONOS ASI TE ACREDITAMOS EL PAGO</h6>
              </div>
            </div>
          </div> 
        </Modal>

        <div className="row" style={{height: "100px"}}></div>
      
        <h6 className="text-center font-weight-bold lead" style={{color:"#9fa2a4"}}>IMPORTANTE: TENES 48 hs PARA CONCRETAR EL PAGO POR EL MONTO ACORDADO.</h6>

        <div className="row" style={{height: "100px"}}></div>

        
    </div>

  )
}

export default Pagos