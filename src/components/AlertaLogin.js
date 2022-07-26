import React, { Component } from 'react'

export default class AlertaLogin extends Component {
  render() {
    return (
        <div>
            <div className="alert alert-info text-center">
                <p>No tenés cuotas vencidas o a vencer este mes. Para informarte sobre vencimientos futuros comunicate por WhatsApp</p> 
            </div>
        </div>
    )
  }
}
