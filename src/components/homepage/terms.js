import React from 'react';
import './css/terms.css'
import cert from './images/cert.pdf'

const Terms = () => {

    const style={
        color:"black",
        fontWeight:"bold"
    }
	return (
        <section id="terms">
            <h1>Terms</h1>
                <ul>
                    <li>
                        <p> Kd Biz Hub is registered under Nigeria Corporate Affairs Commission.  
                        <a href={cert}  style={style}> See CAC certificate</a>
                        </p>
                    </li>
                    <li>
                        <p> Time for delivery of card could take maximum of 48hrs</p>
                    </li>
                    <li>
                        <p> If Card is not available, you have the option of refund or to continue</p>
                    </li>
                    <li>
                        <p> No fraudulent cards should be used for transacting with us</p>
                    </li>
                    <li>
                        <p> We take our clients privacy seriously.</p>
                    </li>
                </ul>
        </section>
	);
}

export default Terms;
