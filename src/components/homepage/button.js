import React from 'react';
import './css/button.css'

const Button = () => {

	return (
        <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=2348141184662&text=Hello, I visited your website and I have an enquiry" className="asidebutton" target="_blank">
            <img src={require("./images/whatsapp.png")} alt="whatsapp" />
        </a>                               		
	);
}

export default Button;


            