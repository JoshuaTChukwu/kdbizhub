import React from 'react';
import {Link} from 'react-router-dom';
import './css/about.css'

const About = () => {

	return (
		<section id="about">
            <div>
                <h3>
                    Do More with Kd biz hub
                </h3>
                <p>
                    Speed is Guaranteed
                </p>
                <Link to="/signup">Trade now</Link>
            </div>
            <div>
                <div>    
                    <div>
                        <img src={require("./images/Group 123.png")} alt="" />
                        <h5>Easy to Use</h5>
                        <p>
                            New? not a worry. 
                            <br />
                            User experience is at best
                        </p>
                    </div>
                    <div>
                        <img src={require("./images/Group 187.png")} alt="" />
                        <h5>Fast</h5>
                        <p>
                            Speed is Guaranteed
                            <br />
                            Make Payments in real time.
                        </p>
                    </div>
                </div>
                
                <div>    
                    <div>
                        <img src={require("./images/Group 188.png")} alt="" />
                    
                        <p>
                            New? not a worry. 
                            <br />
                            Make secure transactions without a flinch
                        </p>
                    </div>
                    <div>
                        <img src={require("./images/Group 190.png")} alt="" />
                        <p>
                            Exclusive Privacy terms.
                            <br />
                            Enjoy the best privacy terms.
                        </p>
                    </div>
                </div>
            </div>
        </section>                                		
	);
}

export default About;
