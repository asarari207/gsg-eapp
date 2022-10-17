import React from 'react'
import Style from './Style/matter.module.css'
import IMG from './Imges/EXpbag.png'
import IMGT from './Imges/EXpbag.png'
import E1 from './Imges/e1.png'
import Button from './Items/Button'

export default function Matter({children}) {
    return (
        <>
            <section style={{ marginTop: '120px' }}>
                <h3>Explore</h3>
                <br />
                <div className={Style.expContainer}>
              
                    <div className={Style.expCard}>
                        <p className="secondry">FIELDTESTED, JANUARY 19, 2017</p>
                        <h1>Connected Clothing: Raye Padit</h1>
                        <br />
                        <p>As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. </p>
                    </div>
                    <div className={Style.expCard}>
                        <p className="secondry">FIELDTESTED, JANUARY 19, 2017</p>
                        <h1>Kérastase: A Collaboration</h1>
                        <br />
                        <img src={IMG} alt="" />
                    </div>
                    <div className={Style.expCard}>
                        <p className="secondry">FIELDTESTED, JANUARY 19, 2017</p>
                        <h1>Jaclynn Seah</h1>
                        <br />
                        <p>
                            Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.
                        </p>
                    </div>
                    <div className={Style.expCard}>
                        <img src={IMGT} alt="" />
                    </div>
                    <div className={Style.expCard}>
                        <p className="secondry">FIELDTESTED, JANUARY 19, 2017</p>
                        <h1>Remarkable Resilience: Grace Kim</h1>
                        <br />
                        <p>A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.</p>
                    </div>
                    <div className={Style.expCard}>
                        <p className="secondry">FIELDTESTED, JANUARY 19, 2017</p>
                        <h1>How To Wear The Lounge Lunghi</h1>
                        <br />
                        <img src={E1} alt="" />
                    </div>
                    
                </div>
                <br />
              <Button text='See the journal'></Button>
            </section>
        </>
    )
}
