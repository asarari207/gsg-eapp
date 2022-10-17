import React,{Fragment} from 'react'
import Top from '../Top'
import Header from '../Header'
import Hero from '../Hero'
import Products from '../Products'
import About from '../About'
import Matter from '../Matter'
import Shop from '../Shop'

export default function Home() {

 

  return (
    <Fragment>
        <Top content="Free shipping for order above USD 150" />
        <Header logo="MATTER" />
        <Hero />
        <Products />
        <About />
        <Matter  />
        <Shop />
    </Fragment>
  )
}
