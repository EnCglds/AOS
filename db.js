const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

//conectar com o Mongo Atlas
async function main(){
    //async atualiza sem precisar recarregar a pg 
    await mongoose.connect('mongodb+srv://mario:<mario>@cluster0.4oaczzg.mongodb.net/?retryWrites=true&w=majority')//'await' espera a conexao com mongobd
    console.log('conectado ao MongoDB!')
}

// executa o main() e caso der erro exibe no console
main().catch((err) => console.log(err))

//Exporta o Modulo para ser usado em outro arquivo
module.exports = main

//!!!!!!so funciona se for exportado!!!!!!!