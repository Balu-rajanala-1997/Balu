import React from 'react'
import Greet from './Greet'

function Demo3(props) {
  return (
    <div>
      <Greet guest={props.name} />
     
    </div>
  )
}

export default Demo3
