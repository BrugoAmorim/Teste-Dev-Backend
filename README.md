# Teste-Dev-Backend
Desenvolvimento de uma API para um processo seletivo

O projeto foi desenvolvido utilizando node-express e Mysql como banco de dados. Então é necessário você ter esses dois softwares instalados em sua máquina para poder testa-lo

## Rodar localmente

Infelizmente a API não cria o banco de dados para o projeto, apenas as tabelas que farão parte do database, portanto será necessário você ir manualmente ao Mysql e fazer este processo, após isso você pode entrar em um editor de código, navegar até o arquivo <ins>/Models/db.js</ins> e configura-lo para as expecificações de acesso ao banco de dados, substituindo as informacoes como <em>$BANCODEDADOS</em>, <em>$USUARIO</em> e <em>$SENHA</em> pelas respectivas informações que dão acesso ao Mysql.

![image](https://user-images.githubusercontent.com/87936511/194417309-ca4517f5-da6f-4c79-aa25-94555ebb1bd2.png)

<br>

Um adendo é que, os outros arquivos que guardam as informações referentes as tabelas estão dessa maneira, portanto, após você executar o projeto pela primeira vez é importante que você comente este trecho de código, para assim quando o projeto for executado novamente ele não recrie essas tabelas, evitando o risco de perder as informações já salvas. 

![image](https://user-images.githubusercontent.com/87936511/194419182-7eef8463-bbb2-4f83-9c49-0e119c340f00.png)
>O arquivo virá desta maneira, ele deve ficar assim apenas na 1° vez que o projeto for executado

<br>

![image](https://user-images.githubusercontent.com/87936511/194419236-39cb084b-f0be-4ec4-984a-adb695d0fce2.png)
>código comentado depois de ser executado pela 1° vez, evitando possiveis problemas

<br>

Feito isso você pode utilizar o terminal para navegar até a pasta do projeto e executar no terminal os seguintes comandos:


````
npm install
````
````
cd routes
````
````
node routes
````

