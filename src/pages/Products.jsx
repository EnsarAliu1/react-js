import React from 'react'
import { Link } from 'react-router'

function Products() {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 10.99
        },
        {
            id: 2,
            name: "Product 2",
            price: 19.99
        },
        {
            id: 3,
            name: "Product 3",
            price: 5.99
        }
    ]
  return (
      <div>
          {
              products.map((product) => (
                  <Link to={`/products/${product.id}`}>
                      <h2>{product.name}</h2>
                      <p>Price: ${product.price.toFixed(2)}</p>
                  </Link>
              ))
          }
    </div>
  )
}

export default Products