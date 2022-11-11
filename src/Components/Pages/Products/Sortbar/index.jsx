import React from 'react'
import Style from './style.module.css'

export default function index({setFilterPrice}) {
  return (
    <div>
        <div className={Style.container}>
            <h1>Women</h1>

            <div className={Style.flex}>
                <h1>Sort by</h1>
                <input type="number" placeholder='Price' onChange={(e) => setFilterPrice(e.target.value)} />
            </div>
        </div>
    </div>
  )
}
