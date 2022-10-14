import React from 'react'
import Style from './Style/Top.module.css'

export default function Top({content}) {
  return (
    <div>
            <nav className={Style.nav} style={{fontFamily:'ProximaNova-Regular'}}>{content}</nav>
    </div>
  )
}
