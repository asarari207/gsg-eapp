import React from 'react'
import SctionTitle from './Items/SctionTitle'
import IMG from './Imges/aso.png'

export default function Aso() {
  return (
    <div>
        <div className="container">
        <SctionTitle title='As Seen On' />
        <br />
        <center><img src={IMG} /></center>
        </div>
    </div>
  )
}
