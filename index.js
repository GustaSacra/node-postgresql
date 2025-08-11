//* procura um arquivo .env e carrega as configuracao da variaveis na memoria
require('./src/Config/dotenv');
const express =  require("express");
const app = express();
//* "process.env.PORT" processo que ta rodando o node, env e port das variaveis
const port = process.env.PORT;
//* Middleware para entender JSON
app.use(express.json());



//* acesso a variavel router (rotas)
const employeeRoute = require('./src/Routes/employees')
app.use("/employees", employeeRoute);


//* Rota simples de teste na raiz. Ping para ver se esta no AR
app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
});

//* Aqui o servidor Express começa a "escutar" conexões HTTP na porta definida no .env
app.listen(port);

//*  indicar que o servidor foi iniciado.
console.log("Backend rodando");


//* resumo: 
//* Carrega variáveis do .env

//* Inicia o servidor Express

//* Configura JSON e rotas (/employees)

//* Cria uma rota raiz de teste

//* Inicia o servidor na porta definida