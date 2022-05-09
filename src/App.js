import './App.css';
import Product from './Homework/product';
import Sorts from './Homework/sort';
import Loader from './components/loader';
import { useState, useEffect } from 'react'
function App() {
   const api = 'https://fakestoreapi.com/products'
   const [data, setData] = useState([])
   const [dataRender, setDataRender] = useState([])
    useEffect(()=> {
        fetch(api)
                .then(res => res.json())
                .then(products => setData(products) || setDataRender(products))
    }, [])
    const handleOnClick = (e) => {
       switch(e.target.innerText) {
          case 'All':
            setDataRender(data)
            break;
          case 'Price':
            setDataRender(data.filter(e => e.price > 60))
            break;
          case 'Rate':
            setDataRender(data.filter(e => e.rating.rate < 4))
            break;
          case 'Jewelery':
            setDataRender(data.filter(e => e.category === "jewelery"))
            break;
       }
    }
  return (
     <div id='app-container'>
         <Sorts onClick ={handleOnClick}/>
         {
            dataRender.length > 0 
               ? <Product data={dataRender}/> 
               : <Loader />
         }
     </div>
     
  )
}

export default App;
