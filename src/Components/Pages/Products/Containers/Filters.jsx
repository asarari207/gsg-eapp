import React,{useState, useEffect} from 'react'
import MainComp from './MainComp'
import Style from './style.module.css'
import axios from '../../../Deps/axios'

export default function Filters({setFilter}) {
    const [data, setData] = useState([])
    const [maindata, setMainData] = useState([])

    var items = [
        {title:"Hello world"},
        {title:"Test"}
    ]



    useEffect(() =>{
        axios.get('products').then(resp =>{
            setData(resp.data)
        }).catch(err => alert(err))

        setMainData([data])
    },[])

    console.log(data);
    console.log("main", maindata);

    return (
        <div>
            <br />
            <div className={Style.Col}>
                <p>Filter</p>
               
                {data.filter( (ele, ind) => ind === data.findIndex( elem => elem.category === ele.category)).map((item,index) =>  <>
                <br />
                        <div onClick={() => setFilter(item.category)}>
                        <MainComp key={item.id} Title={item.category}  SubComp={data} View={false} setFilter={setFilter} />
                        </div>
                </>)}
             
             
               
            </div>
        </div>
    )
}
