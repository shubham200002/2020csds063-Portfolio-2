import React from 'react'
let x=[{name:"Shubham",Branch:"Cs-Ds",Id:"1"},{name:"Mukul",Branch:"Cs-Ds",Id:"2"},{name:"Vishal",Branch:"CSE",Id:"3"}]
export default function Demo22() {
  return (
    <div>{
      x.map(
        (obj)=>{
        return(
            <p>Your Name is {obj.name} and the branch is {obj.Branch}and Id is {obj.Id}</p>
        );
      }
      )
    }
    </div>
  )
    }

