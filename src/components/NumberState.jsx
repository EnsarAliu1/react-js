import React from 'react'

function NumberState() {
    const [count, setCount] = React.useState(0)
  return (
      <div>
          <button onClick={() => setCount(count + 1)}>
      Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
          </button>
          {count}
    </div>
  )
}

export default NumberState