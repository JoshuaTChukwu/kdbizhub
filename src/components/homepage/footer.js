import React from 'react';
import {Link} from 'react-router-dom';
import './css/footer.css'

const Footer = () => {
	return (
        <footer>
            <div>
                <img src={require("./images/Logo.png")} alt="" />
                <p>All rights reserved &copy; 2020</p>
            </div>
            <div>
                <ul>
                    <li>
                        Company
                    </li>
                    <li><Link to="/terms">Terms & Conditions </Link></li>
                </ul>
                <ul>
                    <li>
                        Socials
                    </li>
                    <li>Telephone :<a href="tel:+2348068054621">+23480 6805 4621</a> </li>
                    <li>Instagram : <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/kd_biz_hub">@kd_biz_hub</a></li>
                    <li>Whatsapp : <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=2348141184662&text=Hello, I visited your website and I have an enquiry" target="_blank"> +23481 4118 4662</a></li>
                </ul>

            </div>
        </footer> 		
	);
}

export default Footer;
