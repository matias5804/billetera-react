import React from 'react'
import { ImWhatsapp } from "react-icons/im";

const WhatsApp = () => {
  return (
    <div className="col-md-8 text-center whats"> 
        <div className="btn btn-white border border-success">
            <ImWhatsapp className='iconWhats' />
            <a href="https://wa.me/5491159040115" className="whats">
                5491159040115
            </a>
        </div>                  
    </div>
  )
}

export default WhatsApp