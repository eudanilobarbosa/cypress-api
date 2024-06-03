# Cypress@12.12.0 + Mark85 - Gerenciador de Tarefas

Repositório do projeto de testes End-to-end (E2E) feitos com **Cypress** :green_heart: para o web app de demonstração: *Mark85 - Gerenciador de Tarefas*.

## IDE utilizada nesse projeto

[VS Code](https://code.visualstudio.com/) versão `1.89.1`
   - Extensões
     - [One Dark Pro (Darker)](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
     - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
     - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
     - [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)
	
## Pré-requisitos

Você vai precisar dos seguintes sistemas instalados em seu computador:
- [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=pt-br&gl=BR)
- [Node.js](https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi) versão `v18.12.1`
  - NPM versão `8.19.2`
- [Git](https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe) versão `2.43.0.windows.1`

> [!NOTE]
> Durante a instalação do Node.js o NPM é automaticamente instalado.

> [!IMPORTANT]
> Para a instalação do Git garantir que as opções "Git Bash Here" e "(NEW!) Add a Git Bash Profile to Windows Terminal" estejam marcadas :white_check_mark:.

## Instalação
### Após clonar o repositório, instalar as dependências da web app que estão na pasta `/apps/mark85/`

1. Pasta **api** - API do gerenciador de tarefas, execute o comando
```
npm i
```

2. Colocar API em execução
```
npm run dev
```

3. Pasta **web** - Interface gráfica do gerenciador de tarefas, execute o comando
```
npm i
```

4. Colocar Interface gráfica em execução
```
npm run dev
```

5. Pasta **mail** - Serviço de envio de e-mails, execute o comando
```
npm i
```

6. Colocar serviço de envio de e-mails em execução
```
npm run dev
```
> [!IMPORTANT]
> Necessário criar conta no [CloudAMQP (RabbitMQ)](https://www.cloudamqp.com/) para configurar fila de mensageria, [MongoDB](https://www.mongodb.com/) para utilização do banco de dados, onde ambos serão configurados no arquivo 'dotenv' do projeto. É utilizado o [Ethereal](https://ethereal.email/) para serviço SMTP.

### Métodos HTTP
#### Requisições para a API REST

<details>
<summary> :yellow_circle: POST /Register a new user </summary>
	
```
curl --request POST \
  --url http://localhost:3333/users \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
	"name": "Steve Jobs",
	"email": "jobs@next.com",
	"password": "pwd123"
}'
```

</details>

<details>
<summary> :yellow_circle: POST /User session </summary>

```
curl --request POST \
  --url http://localhost:3333/sessions \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
	"email": "jobs@next.com",
	"password": "pwd123"
}'
```

</details>

<details>
<summary> :yellow_circle: POST /New task </summary>

```
curl --request POST \
  --url http://localhost:3333/tasks/ \
  --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjllMmI5YmUwOGFhMGQxMjlkYjg2ZiIsInVzZXIiOnsiX2lkIjoiNjVmOWUyYjliZTA4YWEwZDEyOWRiODZmIiwibmFtZSI6IlN0ZXZlIEpvYnMiLCJlbWFpbCI6ImpvYnNAbmV4dC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCRyaVZJNk8xcUlJVm40eDk2WlFpLktlcVZ2aTdTMWNWNmcuT2lRbHhMVDcwTTRiZUlFMmppeSJ9LCJpYXQiOjE3MTA5NTEwMzgsImV4cCI6MTcxMTgxNTAzOH0._fCQKSPTD1yl6rzsJr9ZVIIclRc6RcS2CCPpCTl_biM' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
	"name": "Definição técnica de arquitetura",
	"tags": [
		"x86",
		"unix"
	]
}'
```

</details>

<details>
<summary> :green_circle: GET /Get my tasks </summary>

```
curl --request GET \
  --url http://localhost:3333/tasks/ \
  --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjllMmI5YmUwOGFhMGQxMjlkYjg2ZiIsInVzZXIiOnsiX2lkIjoiNjVmOWUyYjliZTA4YWEwZDEyOWRiODZmIiwibmFtZSI6IlN0ZXZlIEpvYnMiLCJlbWFpbCI6ImpvYnNAbmV4dC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCRyaVZJNk8xcUlJVm40eDk2WlFpLktlcVZ2aTdTMWNWNmcuT2lRbHhMVDcwTTRiZUlFMmppeSJ9LCJpYXQiOjE3MTA5NTEwMzgsImV4cCI6MTcxMTgxNTAzOH0._fCQKSPTD1yl6rzsJr9ZVIIclRc6RcS2CCPpCTl_biM' \
  --header 'User-Agent: insomnia/8.6.1'
```

</details>

<details>
<summary> :green_circle: GET /Get unique task </summary>

```
curl --request GET \
  --url http://localhost:3333/tasks/65fb0bfe0b19f522d29bd234 \
  --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjllMmI5YmUwOGFhMGQxMjlkYjg2ZiIsInVzZXIiOnsiX2lkIjoiNjVmOWUyYjliZTA4YWEwZDEyOWRiODZmIiwibmFtZSI6IlN0ZXZlIEpvYnMiLCJlbWFpbCI6ImpvYnNAbmV4dC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCRyaVZJNk8xcUlJVm40eDk2WlFpLktlcVZ2aTdTMWNWNmcuT2lRbHhMVDcwTTRiZUlFMmppeSJ9LCJpYXQiOjE3MTA5NTEwMzgsImV4cCI6MTcxMTgxNTAzOH0._fCQKSPTD1yl6rzsJr9ZVIIclRc6RcS2CCPpCTl_biM' \
  --header 'User-Agent: insomnia/8.6.1'
```
  
</details>
 
<details>
<summary> :red_circle: DELETE /Remove task </summary>

```
curl --request DELETE \
  --url http://localhost:3333/tasks/65fb0bfe0b19f522d29bd234 \
  --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjllMmI5YmUwOGFhMGQxMjlkYjg2ZiIsInVzZXIiOnsiX2lkIjoiNjVmOWUyYjliZTA4YWEwZDEyOWRiODZmIiwibmFtZSI6IlN0ZXZlIEpvYnMiLCJlbWFpbCI6ImpvYnNAbmV4dC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCRyaVZJNk8xcUlJVm40eDk2WlFpLktlcVZ2aTdTMWNWNmcuT2lRbHhMVDcwTTRiZUlFMmppeSJ9LCJpYXQiOjE3MTA5NTEwMzgsImV4cCI6MTcxMTgxNTAzOH0._fCQKSPTD1yl6rzsJr9ZVIIclRc6RcS2CCPpCTl_biM' \
  --header 'User-Agent: insomnia/8.6.1'
```
  
</details>
 
<details>
<summary> :large_blue_circle: PUT /Finish task </summary>

```
curl --request PUT \
  --url http://localhost:3333/tasks/65fb0bfe0b19f522d29bd234/done \
  --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjllMmI5YmUwOGFhMGQxMjlkYjg2ZiIsInVzZXIiOnsiX2lkIjoiNjVmOWUyYjliZTA4YWEwZDEyOWRiODZmIiwibmFtZSI6IlN0ZXZlIEpvYnMiLCJlbWFpbCI6ImpvYnNAbmV4dC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCRyaVZJNk8xcUlJVm40eDk2WlFpLktlcVZ2aTdTMWNWNmcuT2lRbHhMVDcwTTRiZUlFMmppeSJ9LCJpYXQiOjE3MTA5NTEwMzgsImV4cCI6MTcxMTgxNTAzOH0._fCQKSPTD1yl6rzsJr9ZVIIclRc6RcS2CCPpCTl_biM' \
  --header 'User-Agent: insomnia/8.6.1'
```
  
</details>

<details>
<summary> :red_circle: DELETE /Purge messages - RabbitMQ </summary>

```
curl --request DELETE \
  --url https://porpoise.rmq.cloudamqp.com/api/queues/fsbjfytv/tasks/contents \
  --header 'Authorization: Basic ZnNiamZ5dHY6dHk2QTJublluMW1KeUZNWjJMMzBNNzZ1NWhFWFRnS2E=' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
	"vhost": "fsbjfytv",
	"name": "tasks",
	"mode": "purge"
}'
```
  
</details>

<details>
<summary> :yellow_circle: POST /Get message - RabbitMQ </summary>

```
curl --request POST \
  --url https://porpoise.rmq.cloudamqp.com/api/queues/fsbjfytv/tasks/get \
  --header 'Authorization: Basic ZnNiamZ5dHY6dHk2QTJublluMW1KeUZNWjJMMzBNNzZ1NWhFWFRnS2E=' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
	"vhost": "fsbjfytv",
	"name": "tasks",
	"truncate": "50000",
	"ackmode": "ack_requeue_true",
	"encoding": "auto",
	"count": "1"
}'
```
  
</details>

## Como executar
### Testes

Você pode executá-los tanto em modo interativo, como em modo _headless_.

1. Instalar as dependências do Cypress que estão na pasta raiz `/`, execute o comando
```
npm i
```

2. Para rodar todos os testes em **modo _headless_**, execute o comando
```
npx cypress run --env allure=true
```

3. O relatório de execução dos testes pode ser visualizado com [Allure Report](https://www.npmjs.com/package/@mmisty/cypress-allure-adapter), execute o comando
```
npx allure serve
```

> [!WARNING] 
> É necessário o [Java 8](https://www.oracle.com/java/technologies/downloads/#license-lightbox) para executar o binário do Allure Reports.

> [!TIP]
> Execute os testes através do Lauchpad, modo interativo do Cypress, com o comando `npx cypress open`.

## Funcionalidades Testadas
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

#### home

* [x] webapp deve estar online

#### tarefas > cadastro

* [x] deve cadastrar uma nova tarefa
* [x] não deve permitir tarefa duplicada
* [x] campo obrigatório

#### tarefas > atualização

* [x] deve concluir uma tarefa

#### tarefas > exclusão

* [x] deve remover uma tarefa

