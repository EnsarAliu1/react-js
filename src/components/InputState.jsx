import React, { useState } from 'react'

function InputState() {
    const [name, setName] = useState("");
    
  return (
      <div>
          <input type="text"
              onChange={(event) => { setName(event.target.value) }}
              value={name}
          />
          <p>{name }</p>
    </div>
  )
}

export default InputState