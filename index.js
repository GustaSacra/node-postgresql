//* procura um arquivo .env e carrega as configuracao da variaveis na memoria
require("dotenv").config();

const database = require("./database");

//* "process.env.PORT" processo que ta rodando o node, env e port das variaveis
const port = process.env.PORT;

const express =  require("express");

const app = express();

//* backend pronto para receber dados jSON 
app.use(express.json());

//* aplicacao node da funcao express
//* metodos HTTP 


//* rotas 

app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})

app.get("/funcionarios", async (req, res) => {
    const funcionarios = await database.selectEmployees();
    res.json(funcionarios);
})

app.post("/funcionarios", async (req, res) => {
    await database.insertEmployee(req.body);
    res.sendStatus(201);
})

app.patch("/funcionarios/:id", async (req, res) => {
    await database.updateEmployee(req.params.id, req.body);
    res.sendStatus(200);
})

app.listen(port);

console.log("Backend rodando");