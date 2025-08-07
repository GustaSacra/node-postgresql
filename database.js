async function connect(){

    if(global.connection)
        return global.connection.connect();
    
    const { Pool } = require("pg");
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    //* estabelece a conexao entre programa e o banco de dados
    const client = await pool.connect();
    //* teste para ver se esta funcionando
    console.log("Criou o pool de conexao");

    //* pegar a hora do banco de dados "select now"
    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();

}

connect();

async function selectEmployees() {
    const client = await connect();    
    const res = await client.query("SELECT * FROM funcionarios");
    return res.rows;
}

async function insertEmployee(employee) {
    const client = await connect(); 
    const sql = "INSERT INTO funcionarios(nome, cargo, salario) VALUE ($1, $2, $3)";   
    const values = [employee.name, employee.cargo, employee.salario];
    await client.query(sql, values);
    
}

async function updateEmployee(id, employee) {
    const client = await connect(); 
    const sql = "UPDATE funcionarios SET nome=$1, cargo=$2, salario=$3 WHERE id=$4";   
    const values = [employee.name, employee.cargo, employee.salario, id];
    await client.query(sql, values);
    
}

module.exports = {
    selectEmployees,
    insertEmployee,
    updateEmployee
};