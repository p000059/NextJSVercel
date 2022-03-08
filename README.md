<h1 align="center"> Criar app Next.js </h1>

<div>
     <h3 align="left">Pré-requisitos</h3>
     <ul>
          <li>Ter instalado o Node.js no computador.</li>
          <li>Ter um editor de código ou uma IDE para criar o código.</li>
          <li><a href="https://nodejs.org/en/download/">Download Noje.js</a></li>
          <li><a href="https://code.visualstudio.com/">Download Visual Studio Code</a></li>
     </ul>
</div>

<div>
<hr>
<h3 align="left">Tabela de comandos</h3>
<table>
     <thead>
          <tr>
               <td></td>
               <td>Comando</td>
               <td>Ação</td>
          </tr>
     </thead>
     <tbody>
           <tr>
               <td>1</td>
               <td>node --version</td>
               <td>Verifica se o Node.js está instalado no computador</td>
          </tr>
           <tr>
               <td>2</td>
               <td>npm -version</td>
               <td>Verifica a versão do npm que está instalada no computador</td>
          </tr>
          <tr>
               <td>3</td>
               <td>npm init -y</td>
               <td>vai criar o package.json aceitando todas as opções padrão</td>
          </tr>
          <tr>
               <td>4</td>
               <td>npm install next</td>
               <td>instala as dependências do next</td>
          </tr>
          <tr>
               <td>5</td>
               <td>npm install react</td>
               <td>instala as dependências do react</td>
          </tr>
          <tr>
               <td>6</td>
               <td>npm install react-dom</td>
               <td>instala as dependências do react DOM</td>
          </tr>
          <tr>
               <td>7</td>
               <td>npm run dev</td>
               <td>executa o app</td>
          </tr>
     </tbody>
</table>
</div>

<div>
<hr>
<h3 align="left"> Sequência de execução </h3>
<ul>
     <li>Criar uma pasta com o nome do projeto.</li>
     <li>Acessar a pasta e executar os comandos de 3 a 6 da tabela de comandos.</li>
     <li>Editar o arquivo package.json, na parte de script e escrever do seguinte modo => "script" : {"dev": "next dev"}</li>
     <li> Criar uma pasta na raiz do projeto com o nome Page.</li>
     <li> Criar um arquivo index.js e adicionar o código de exemplo abaixo.</li>
     <li> Salvar arquivo index.js e executar o comando 7 da tabela de comandos.</li>
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


