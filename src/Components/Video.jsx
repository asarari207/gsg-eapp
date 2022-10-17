import React from 'react'
import Button from './Items/Button'
import Img from './Imges/V.png'

import Style from './Style/video.module.css'

export default function Video() {

  let data = [1,2,3]

  return (
    <div>
      <br />
      <h3>Recommended Videos</h3>
      <br />
        <div className={Style.container}>
          {data.map((item,index) => <>
            <div className={Style.card}>
              <img src={Img} alt="" />
              <p>Test</p>
            </div>
           
          </>)}
          </div>
          <br />
          <br />
        <Button text='Show more'></Button>
    </div>
  )
}
