import React from 'react'

let x=21;
let y=20;

export default function Task2() {
  return (
    <div>
      <h1>Evaluating Expression</h1>
      <h3>
        {x}{">"}{y} : {x>y? "True":"False"}
      </h3>

    </div>
  )
}
