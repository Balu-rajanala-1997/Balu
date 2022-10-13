import React from 'react'
import {useParams} from "react-router-dom";

function HOC(OriginalValue){
    
     function Hoc1() {
    const params = useParams()
      return <OriginalValue MyParam={params.id} />
    }
return Hoc1;
    
}
export default HOC;