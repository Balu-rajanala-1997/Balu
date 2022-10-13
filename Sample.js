import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function Sample() {
    const balu = () => {
        var x = prompt("How old are you?");
        if ( x > 10 | x < 25) {
           return( 
               document.getElementById("sample").innerHTML = `your age is below 25 years` 
           )
        }else if( x >= 25){
            document.getElementById("sample").innerHTML = ` your age is ${x}`;
        }
    };
  
   setTimeout(changeTimer, 3000);
   function changeTimer() {
        alert("Timer is changed");
    }

    return (
        <div className="container-fluid ms-5 mt-5">
            <h3>Sample Data</h3>
            <button onClick={changeTimer} className="btn btn-success me-4">Time</button>
            <button className="btn btn-primary" onClick={balu}>Balu</button>
            <h2 id="sample"></h2>
        </div>
    )
}
