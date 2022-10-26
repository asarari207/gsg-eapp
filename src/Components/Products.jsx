import React,{useState} from 'react'
import Products from './Items/Products'
import Style from './Style/products.module.css'
import SctionTitle from './Items/SctionTitle'
import SingleProduct from './Pages/SinglePage/SingleProduct'

export default function Productslist() {
  const [view, setView] = useState(false)
  let data = [1,2,3,4,5,6,7,8]

  const handleClick = () =>{
    setView(!view)
  }

  return (
    <div className={Style.Product} >
      {view ? <div className={Style.Singleview}>
        <SingleProduct view={view} setview={setView} />
      </div> : <>
      <SctionTitle title="Featured" />
          <br />
        <div className={Style.container}>
           {data.map((dt,index) =>  <div key={index} onClick={() => handleClick()}><Products text='Pueraria Mirifica And Study Phyto Estrogens'  /> </div>
           )}
        </div>
      </>}
          
    </div>
  )
}
