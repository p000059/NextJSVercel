<h1 align="center"> Criar app Next.js </h1>
<h3 align="left">Tabela de comandos</h3>
<table>
     <thead>
          <tr>
               <td>Comando</td>
               <td>Resultado</td>
          </tr>
     </thead>
     <tbody>
          <tr>
               <td>1 - npm init -y</td>
               <td>vai criar o package.json aceitando todas as opções padrão</td>
          </tr>
          <tr>
               <td>2 - npm install next</td>
               <td>instala as dependências do next</td>
          </tr>
          <tr>
               <td>3 - npm install react</td>
               <td>instala as dependências do react</td>
          </tr>
          <tr>
               <td>4 - npm install react-dom</td>
               <td>instala as dependências do react DOM</td>
          </tr>
          <tr>
               <td>5 - npm run dev</td>
               <td>executa o app</td>
          </tr>
     </tbody>
</table>

</div>
<div>    
     <hr>
     <h3 align="left"> Editar arquivo package </h3>
     <p>No arquivo package.json , alterar na propriedade "script" como abaixo:</p>

<div>
 "script" : {
     "dev": "next dev"
 }
 </div>
     
</div>

<div>
<hr>
<h3 align="left"> Sequencia de execução </h3>
<ul>
     <li> Criar uma pasta na raiz do projeto com o nome Page.</li>
     <li> Criar um arquivo index.js e adicionar o código de exemplo abaixo.</li>
     <li> Salvar arquivo index.js e executar o comando 5 da tabela de comandos.</li>
</ul>
</div>

<div>
<hr>
<h3 align="left"> Criar arquivo index </h3>
<div>
     
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
</div>     


