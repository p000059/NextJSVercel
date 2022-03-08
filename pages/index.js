import React from 'react';
import { useEffect, useState } from 'react';

function Home(){
    
    const [count, useCount] = useState(0);

    useEffect(
        () => console.log("Página Carregada")
    )

    return (
        <div>            
            <p>Contagem:{count}</p>
            <button onClick={() => useCount(count+1)} >Add</button>
        </div>
    );
}

export default Home;