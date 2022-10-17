import React from 'react'
import Products from './Items/Products'
import Style from './Style/products.module.css'


export default function Productslist() {

  let data = [1,2,3,4,5,6,7,8]

  return (
    <div className={Style.Product}>
          <SctionTitle title="Featured" />
          <br />
        <div className={Style.container}>
           {data.map(dt =>  <Products text='Pueraria Mirifica And Study Phyto Estrogens' />)}
        </div>
    </div>
  )
}
