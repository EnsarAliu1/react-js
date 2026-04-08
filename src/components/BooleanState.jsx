import React, { useState } from 'react'

function BooleanState() {
    const [show, setShow] = useState(false);
  return (
      <div>
          <button onClick={()=>{setShow(!show)}}>
              {show? "Hide" : "Show"}
          </button>
          {show && <p>hide this content</p>}
    </div>
  )
}

export default BooleanState