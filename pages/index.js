import React from 'react';
import { useEffect, useState } from 'react';

function Home(){
    
    const [count, useCount] = useState(0);

    useEffect(
        () => console.log("Página Carregada")
    )

    return (
        <div>            
            <p>Hello World!</p>
            
            <button onClick={() => useCount(count+1)} >Add</button> =&gt; {count}
        </div>
    );
}

export default Home;
