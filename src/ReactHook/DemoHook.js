import React, { useState } from 'react';

export default function (props){
    const [count ,setCount]= useState(0);

    return (
        <div>
            <h2>Hello {props.text}</h2>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count +1)}>Click up</button>
        </div>
    )
}
