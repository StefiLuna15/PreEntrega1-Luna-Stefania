import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
    const customStyles = {
        color: "white",
        fontSize: "2rem",
        margin: "auto",
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

  return (
    <div style={customStyles}>{greeting}</div>
  )
}

export default ItemListContainerComponent