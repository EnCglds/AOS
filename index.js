// Comandos de terminal:

//Criar package.json:
//npm init -y

//Dependencias:
//npm install express nodemon cors mongoose

//Para parar um terminal (recomendado abrir outro)
//Ctrl + c

// ---------- // ----------

const cors = require('cors')//cors ujada na segurança limitando o acesso
const express = require('express')//express facilita nos codigos 
const app = express()
const PORT = 3000
require('./db')//ele tras a conexao do bd para o index
const postsController = require('./controllers/PostsController')

app.use(cors()) 
app.use(express.json()) 

app.post('/posts',postsController.cadastrarPost)

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})



//Comandos de Git:

//Iniciar projeto GIT
// git init

//Adiciona todos os arquivos para enviar ao GitHub
//git add .

// Adiciona um comentário a atualização a ser enviada 
//git commit -m "[Comentário]"

//Envia os arquivos ao repositório
//git push https://<GITHUB_TOKEN>@github.com/<GITHUB_USUARIO>/<REPOSITORIO_NOME>.git

// ---------- // ----------