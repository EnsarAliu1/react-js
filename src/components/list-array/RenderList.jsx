import React from 'react'

function RenderList() {
    const sports = ["football", "basketball", "golf"];
    const scores = [1, 2, 3, 4, 5, 6, 7];
  return (
      <div>
          <ul>
              {
                  sports.map((sport, index) => (
                      <li key={index}>
                          {sport}
                      </li>
                  ))
              }
          </ul>
          <ul>
              {
                  scores.map((score,index) => (
                      <li key={index}>
                          {score}
                      </li>
                  ))
              }
          </ul>
    </div>
  )
}

export default RenderList