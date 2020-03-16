import React from 'react';
import './css/rate.css'
import './css/mobrate.css'

const Rate = () => {
	return (
        <section id="rates">
        <h1>
            Rates
        </h1>
        <div className="rates">
            <div>
                <div>
                    <iframe title="." src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0"></iframe>
                </div>
            </div>
        </div>
        
    </section>                                		
	);
}

export default Rate;
