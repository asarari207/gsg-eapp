import React from 'react'
import Style from './Single.module.css'
import IMG from '../../Imges/pro2.png'

export default function SingleProduct({view,setview}) {

  let data = [1,2,3,4]

  

  const handleview = () =>{
    setview(!view)

  }

  return (
    <>

      <div className={Style.FullContainer}>
        <div className={Style.mainContainer}>
            <div className={Style.TopBar}>
              <p>The Sideswept Dhoti</p>
              <button onClick={handleview}>X</button>
            </div>
            <hr />
            <div className={Style.Body}>
                <div className={Style.Container}>
                {data.map((item,index) => <>
                  <img key={index} src={IMG} alt="" />
                   <br />
                </>)}
                   
                </div>

                <div className={Style.Container}>
                    <img src={IMG} />
                </div>

                <div className={Style.Container}>
                  <div className={Style.TSection}>
                  <h3>The Sideswept Dhoti + Bottom Line Grey (Silk)</h3>
                   <h4>SGD 139.90 </h4>
                    <hr />
                    <h6>Description</h6>
                    <p>Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… </p>
                  </div>
                </div>
            </div>
        </div>
    </div>

   
    </>
  )
}
