import React,{useState,useRef} from 'react'
import Style from './style.module.css'

export default function MainComp({Title, SubComp, View}) {

    const [views, setView] = useState(View)
    const [more, setMore] = useState(1)
    const [height, setHeight] = useState(170)
    const byclick = useRef(0)

    const handleView = () =>{
        setView(!views)
    }

    const showmore = () =>{
        byclick.current = byclick.current + 1
        setMore(more + 1)
        if (byclick.current < SubComp.filter(a => a.category === Title).length){
            return  setHeight(height + 100)
        }

       
    }



  return (
    <div>
        <h1 onClick={(e) => handleView(e)}>{Title}</h1>
                {views &&  <div class={Style.dropdown} style={{height:height}}>
                    
                    <div class={Style.dropdownContent}>
                        {SubComp.filter(a => a.category === Title).slice(0, more).map((item => <>
                           
                           <div className={Style.Flex}>
                            <input type="checkbox"  id="" />
                             <p>{item.title}</p>
                             
                           </div>
                           
                        </>))}
                        <p onClick={() => showmore()}>SHOW MORE</p>
                    </div>
                </div>}
    </div>
  )
}
