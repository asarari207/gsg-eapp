import React,{Fragment} from 'react'
import Style from './Style/hero.module.css'
import BG from './Imges/H1.png'

export default function Hero() {
  return (
    <Fragment>
    <div className={Style.hero} style={{backgroundImage:`url(${BG})`}}>
        <div className={Style.heroContent}>
            <p>Perfume Tips <p>
                Tricks
            </p></p>
            <br />
            <h6><a href='/Products'>Shop Now</a></h6>
            
            <p style={{backgroundColor:"#000",borderStartEndRadius:"50%",borderEndEndRadius:"50%",height:"70px",width:"60px",position:"absolute",left:"0px",opacity:"0.6"}}></p>
            <p style={{backgroundColor:"#000",borderEndStartRadius:"50%",borderStartStartRadius:"50%",height:"70px",width:"60px",position:"absolute",right:"0px",opacity:"0.6"}}></p>
        </div>
    </div>
    </Fragment>
  )
}
