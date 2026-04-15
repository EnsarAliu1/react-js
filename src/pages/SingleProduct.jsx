import React from 'react'
import { useParams } from 'react-router'

function SingleProduct() {
    const { id } = useParams();
  return (
      <div>
          Product with id: {id}
    </div>
  )
}

export default SingleProduct