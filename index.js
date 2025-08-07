//* procura um arquivo .env e carrega as configuracao da variaveis na memoria
require('./src/Config/dotenv');
const express =  require("express");
const app = express();
//* "process.env.PORT" processo que ta rodando o node, env e port das variaveis
const port = process.env.PORT;
app.use(express.json());



//* acesso a variavel router (rotas)
const employeeRoute = require('./src/Routes/employees')
app.use("/employees", employeeRoute);



app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})


app.listen(port);

console.log("Backend rodando");