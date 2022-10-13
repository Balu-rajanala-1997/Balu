import React from 'react'
import Demo3 from './Demo3'

function Demo1() {
  const user={
    names:'Balu Rajanala',
    place: 'Hyderabad', 
    job: 'Ui Full Stack Developer'
  }
  return (
    <div> 
      <Demo3 name={user}/>
    </div>
  )
}

export default Demo1
