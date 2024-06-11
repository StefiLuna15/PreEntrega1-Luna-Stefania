import React from 'react'
import {getProductById} from '../services/products'

export const useProductById = () => {
  const [product, setProduct] = React.useState({})

  React.useEffect(() => {
    getProductById(id).then((response) => {
        setProduct(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
  }, [])

  return {product}
}

