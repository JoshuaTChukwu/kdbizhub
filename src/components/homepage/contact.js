import React, {Component} from 'react';
import axios from 'axios';
import './css/contact.css'

class Contact extends Component {
    state={
        message_from:'',
        message_to:'Admin',
        message:'subscription',
        key: '1d4228f22fb41420639ca9084bacef85',
        response:''
      }
    
      handleChange=(e)=>{
        this.setState({
          [e.target.id]: e.target.value
        })
      }
    
      handleSubmit=(e)=>{
        this.setState({
            response: "Sending"
          })
        e.preventDefault();
        axios.post('https://kdbizhubpi.online/api/messages/create.php', this.state)
          .then(res=>{
            this.setState({
                response:res.data.message
              })
          })
      }

      render(){

	return (
        
        <section id="contact">
        <div>
            <div>
                <h1>
                    Trading is not the best thing. 
                    <br />
                    Its the only thing.
                </h1>
                <p>
                    L. Markon
                </p>
            </div>
    
            <div>
                <form onSubmit={this.handleSubmit} method="post">
                    <input type="email" name="email" id="message_from" placeholder="Email" onChange={this.handleChange} required/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"  onChange={this.handleChange} ></textarea>
                    <p>{this.state.response}</p>
                    <input type="submit" value="Send" onClick={this.handleButton}/>
                </form>
            </div>

        </div>
    </section>                                		
	);
}
}

export default Contact;
