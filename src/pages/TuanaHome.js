import imgCall from "../assets/img/call.png"
import imgTuana from "../assets/img/tuana.png"
import FormLogin2 from '../components/FormLogin2'

const TuanaHome = () => {

  return (
        <div className="container pt-4">  
            <main className="d-flex align-items-center">
                <div className="container">
                    <div className="card login-card">
                        <div className="row no-gutters">
                            <div className="col-md-5 d-none d-sm-block">  
                                <img src={imgCall} alt="imgCall" className=""/> 
                            </div>

                            <div className="col md-1 d-none d-sm-block"></div> 

                            <div className="col-md-6 col-sm-6">
                                <div className="row" style={{height: "25px"}}></div>  
                                <div className="card-body">
                                    <img src={imgTuana} alt="imgTuana" className="img-fluid"/> 
                                    <div className="row" style={{height: "60px"}}>
                                        <p className="login-card-description text-center font-weight-bold lead" style={{color:"#b0b3b5"}}>SISTEMA DE GESTION DE PAGOS </p> 
                                        
                                        <FormLogin2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default TuanaHome