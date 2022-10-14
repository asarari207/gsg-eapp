import React,{Fragment} from 'react'
import Style from './Style/header.module.css'

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
            <li className={Style.listItems}>i</li>
            <li className={Style.listItems}>i</li>
            <li className={Style.listItems}>i</li>
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
