import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from "../Loader/Loder"

function Product() {
    const [products, setProducts] = useState()
   const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        setProducts(res.data)
        // setResults(res.data)  
        setIsLoading(false) 
      }).catch((err)=>{
        console.log(err)
        setIsLoading(false)
        //isLoading(false) isloading is not a function
      })
    }, [])
    
  return (

  <>
  {
    isLoading?(<Loader/>) : ( <section className={classes.products_container}>
      {
          products?.map((singleProduct)=>{
            return  <ProductCard product={singleProduct} key={singleProduct.id}/>
                })
      }
     </section>)
  }
  </>

  )
}
 
export default Product