import React,{Fragment,useState} from 'react'
import Style from './Product.module.css'


export default function Products({text,price,ProdImg}) {

  

  const qouck = () =>{
    var hide = document.getElementById('hide');
    hide.style.display = "block"

  }



  return (
    <Fragment>
      <div className={Style.card}>

      
        <div className={Style.shadow}>
          <div className={Style.cardImg} onFocus={qouck} style={{backgroundImage:`url(${ProdImg})`}}>
            <div className={Style.new}>
              <p>New</p>
            </div>
            <br />
           <div className={Style.Hide}  id='hide'>
           <div className={Style.Quick}>
                <p>QUICK VIEW</p>
            </div>
           </div>
          </div>
        </div>
        <p>{text}</p>
        <br />
        <p>{price}$</p>

      </div>
    </Fragment>
  )
}
