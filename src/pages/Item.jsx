import React from 'react'
import {useProductById} from '../hooks/useProductById'
import ItemDetailContainer from '../components/ItemDetailContainer'


const Item = () => {
  const {product} = useProductById()

  return (
    <ItemDetailContainer product={product} />
  )
}

export default Item