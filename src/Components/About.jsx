import React from 'react'
import SctionTitle from './Items/SctionTitle'
import Style from './Style/about.module.css'
import IMG from "./Imges/h2.png"

export default function About() {
  return (
    <div>
      <div className={Style.materSection}>
      <SctionTitle title="About Matter" />
        <div className={Style.mater}>
          <img src={IMG} style={{ width: '555px', height: '430px' }} alt="" />
          <div className={Style.materContent}>
            <b>            <p style={{ opacity: 1, color: 'rgba(3,3,3,1)', fontFamily: 'ProximaNova-Light', fontSize: '18px', fontWeight: 300, fontStyle: 'normal', letterSpacing: '0px', textAlign: 'left', lineHeight: '30px' }}>Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. </p>
            </b>
            <p className="secondry">Artisan Employment Days Created</p>
            <p>123456</p>
            <p className="secondry">
              Countries Involved To Date</p>
            <pre>India{"\n"}China {"\n"}Sri Lanka{"\n"}{"            "}</pre>
            <p className="secondry">#MatterTribe</p>
            <p>12 designers</p>
            <p> 12 Factories</p>
          </div>
        </div>
      </div>
    </div>
  )
}
