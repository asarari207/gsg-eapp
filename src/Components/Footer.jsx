import React from 'react'
import FooterTitle from './Items/FooterTitle'
import Style from './Style/footer.module.css'

export default function Footer() {
  return (
    <div className={Style.footer}>
        <div className={Style.container}>
           <div className={Style.card}>
                <p>Categories</p>
                <br />
                <h6>
                About us
                Testimonials
                Contact 
                Journal 
                Privacy Policy 
                </h6>
           </div>

           <div className={Style.card}>
                <p>Categories</p>
                <br />
                <h6>
                About us
                Testimonials
                Contact 
                Journal 
                Privacy Policy 
                </h6>
           </div>


           <div className={Style.card}>
                <p>Categories</p>
                <br />
                <h6>
                About us
                Testimonials
                Contact 
                Journal 
                Privacy Policy 
                </h6>
           </div>

           <div className={Style.card}>
                <p>Categories</p>
                <br />
               <input type="text" placeholder='ENTER YOUR EMAIL' />
           </div>
        </div>
        <br />
        <p>© Copyright Matter PTE LTD  2017</p>
    </div>
  )
}
