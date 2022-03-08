<h1 align="center"> Criar app Next.js </h1>

<table>
     <thead>
          <tr>
               <td>Comando</td>
               <td>Resultado</td>
          </tr>
     </thead>
     <tbody>
          <tr>
               <td>npm init -y</td>
               <td>vai criar o package.json aceitando todas as opções padrão</td>
          </tr>
          <tr>
               <td>npm install next</td>
               <td>instala as dependências do next</td>
          </tr>
          <tr>
               <td>npm install react</td>
               <td>instala as dependências do react</td>
          </tr>
          <tr>
               <td>npm install react-dom</td>
               <td>instala as dependências do react DOM</td>
          </tr>
          <tr>
               <td>npm run dev</td>
               <td>executa o app</td>
          </tr>
     </tbody>
</table>

<div>
     <p>No arquivo package.json , alterar na propriedade "script" como abaixo:</p>

  "script" : {
     "dev": "next dev"
  }
</div>



<div>
     <p>Criar um arquivo index.js e adicionar o seguinte código de exemplo:</p>
     
     import React from 'react';
     function Home( ){

         return (
             <div>
                 <h1>Hello World!</h1>
             </div>
         );
     }
     export default Home;     
</div>
     


