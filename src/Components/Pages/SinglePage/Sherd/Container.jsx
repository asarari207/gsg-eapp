import React from 'react'
import Style from '../Single.module.css'

export default function Container() {
  return (
    <div>
        <div className={Style.mainContainer}>
            <div className={Style.TopBar}>

            </div>

            <div className={Style.Body}>
                <div className={Style.Container}>
                    <p>Test1</p>
                    <p>Test2</p>
                    <p>Test3</p>
                </div>
            </div>
        </div>
    </div>
  )
}
