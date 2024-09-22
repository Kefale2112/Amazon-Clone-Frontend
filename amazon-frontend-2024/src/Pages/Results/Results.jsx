import React, { useEffect, useState } from 'react'
// import React from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import axios  from 'axios' 
import {useParams} from 'react-router-dom'
import { productUrl } from '../../Api/endPoints'
// import ProductCard from '../../Components/Product/ProductCard' 
// import Loader from "../../Components/Loader/Loder"
function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} =useParams()
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
       setResults(res.data)
      //  console.log(res.data)
    }).catch((err)=>{
      console.log(err)
      // setIsLoading(true);
    })
  }, [])
  
  return (
    <LayOut> 
 <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {/* {isloading ?(
          <Loader/> */}
        ):(
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}                   
                //  renderDesc={false}
                // renderAdd={true} 
              />
            ))}
          </div>
          )
      </section>
    </LayOut>
  )
}

export default Results