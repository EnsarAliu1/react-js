import React, { useState } from 'react'

function ObjectList() {
    const [students, setStudents] = useState([
        {
            id: 1,
            firstName: "Ensar",
            lastName: "Aliu"
        },
        {
            id: 2,
            firstName: "filan",
            lastName: "Aliu"
        }, {
            id: 3,
            firstName: "fisteku",
            lastName: "Aliu"
        },

    ]);
    const [show, setShow] = useState(true);
    const [isLineThrough, setIsLineThrough] = useState(false);
    const handleLineThrough = () => {
        setIsLineThrough(!isLineThrough)
    }
    
  return (
      <div>
          <button onClick={()=>setShow(!show)}>{show?"hide":"show" }</button>
          <ul>
              { show &&
                  students.map((student,index) => (
                      <li key={index}
                          style={{ textDecoration: isLineThrough ? "line-through" : "none" }}
                          onClick={handleLineThrough}
                      >{student.firstName}</li>
                  ))
              }
          </ul>
    </div>
  )
}

export default ObjectList