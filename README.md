<h1 align="center"> Criar app Next.js </h1>
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

npm init -y => vai criar o package.json aceitando todas as opções padrão
npm install next => instala as dependências do next
npm install react => instala as dependências do react
npm install react-dom => instala as dependências do react DOM

No arquivo package.json , alterar na propriedade "script" : {} o comando a ser utilizado para rodar o app. Ex:

"script" : {
     "dev": "next dev"
}

Criar um arquivo index.js e adicionar o seguinte código de exemplo:

import React from 'react';

function Home(){
    
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}

Para rodar o app é preciso executar no terminal o comando: npm run dev

