import React from 'react';
import { useState } from 'react';

function Home(){
    
    return (
        <div>
            <h1>React.js Versel</h1>
            <Count />
        </div>
    );
}

function Count(){
    const [count, setCount] = useState(1);

    
    function addCount(){
        setCount(count + 1)
    }
    
    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>Adiciona</button>
        </div>
    );
}


export default Home;