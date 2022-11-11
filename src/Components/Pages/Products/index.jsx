import React,{useState, useEffect} from 'react'
import Top from '../../Top'
import Header from '../../Header'
import Style from './style.module.css'
import Filterbar from './Sortbar/index'
import Filters from './Containers/Filters'
import Products from '../../Items/Products'
import axios from '../../Deps/axios'
import Footer from '../../Footer'

export default function Index() {
    const [data, setData] = useState([])
    const [Filter, setFilter] = useState("")
    const [FilterPrice, setFilterPrice] = useState(null)
    useEffect(() =>{
        axios.get('products').then(resp =>{
            setData(resp.data)
        }).catch(err => alert(err))

        
    },[])

  return (
    <div>
        <Top content="Free shipping for order above USD 150" />
        <Header logo="MATTER" />
        <div className={Style.hero}>

        </div>  
  
        <br />
        <Filterbar setFilterPrice={setFilterPrice} />
        <br />
        <hr />
        <div className={Style.BodyContainer}>
            <Filters setFilter={setFilter} />

            <div className={Style.ProductContainer}>
              {data.filter(a => FilterPrice ? parseInt(a.price) === parseInt(FilterPrice) :  a.category.includes(Filter) ).map(item => <Products text={item.title} price={item.price} ProdImg={item.image} />).slice(0, 9)}  
            </div>
        </div>
        <div className={Style.break}>

        </div>
        <hr />
        <Footer />
    </div>
  )
}
