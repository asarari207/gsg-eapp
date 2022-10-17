import React from 'react'
import Style from './Style/shop.module.css'
import ProImg from './Imges/pro2.png'
import Button from './Items/Button'
import SctionTitle from './Items/SctionTitle'

export default function Shop() {
    let data = [1, 2, 3, 5]
    return (
      <>
      <br />
      <SctionTitle title='Shop' />
 
       <br />
          <div className={Style.container}>
            {data.map((item, index) => <>
                <div className={Style.card} style={{ backgroundImage: `url(${ProImg})` }}>

                    <div className={Style.CardContent}>Test</div>
                </div>
            </>)}

        </div>
        <br />
       
      </>
    )
}
