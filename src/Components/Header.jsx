import React,{Fragment} from 'react'
import Style from './Style/header.module.css'
import ICONE from './icons/search.svg'
import ICTOW from './icons/heart.svg'
import ICTHREE from './icons/Shape.svg'

export default function Header({logo}) {
  return (
    <Fragment>
          <header className={Style.myHeader}>
        <div>
          <ul className={Style.list}>
            <h2>{logo}</h2>
            <li className={Style.listItems}>SHOP</li>
            <li className={Style.listItems}>FABRIC</li>
            <li className={Style.listItems}>Journal</li>
            <li className={Style.listItems}>About</li>
          </ul>
        </div>
        <div>
          <ul className={Style.list}>
            <li className={Style.listItems}>LOGIN</li>
            <li className={Style.listItems}><img src={ICONE} width='15px' /></li>
            <li className={Style.listItems}><img src={ICTOW} width='15px'  /></li>
            <li className={Style.listItems}><img src={ICTHREE} width='15px'  /></li>
          </ul>
        </div>

      <div className={Style.mobileNav}>
        <p>X</p>
        <ul className={Style.mobileList}>
           <h2>{logo}</h2>
            <li>SHOP</li>
            <li>FABRIC</li>
            <li>Journal</li>
            <li>About</li>
        </ul>
      </div>

      </header>
    </Fragment>
  )
}
