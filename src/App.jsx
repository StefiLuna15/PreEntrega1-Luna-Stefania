import React from 'react'

import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenid@s a la tienda de regalos Fontana de Luna"/>
    </>
  )
}

export default App


