import React, { Component } from 'react'

export class Success extends Component {
    back = () =>{
        this.props.history.push('/products')
    }
    render() {
        return (
                <section id="products_item">
                    <div className="card transful">
                        <img src={require("./images/done.png")} alt="done" />
                        <h4>Transaction Successful</h4>
                        <p>Processing could take up to 48 hours, we shall get back to you as soon as possible</p>
                   <button onClick={this.back}>  Back </button>
                    </div>
                </section>
        )
    }
}

export default Success
