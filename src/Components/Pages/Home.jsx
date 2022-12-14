import React,{Fragment} from 'react'
import Top from '../Top'
import Header from '../Header'
import Hero from '../Hero'
import Products from '../Products'
import About from '../About'
import Matter from '../Matter'
import Shop from '../Shop'
import Video from '../Video'
import Aso from '../Aso'
import Footer from '../Footer'

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
        <Video />
        <Aso />
        <Footer />
    </Fragment>
  )
}
