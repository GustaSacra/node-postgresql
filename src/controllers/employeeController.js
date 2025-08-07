const employeeService = require('../services/employeeService');

exports.getAll = async (req, res) => {
  const employees = await employeeService.getAll();
  res.json(employees);
};

exports.create = async (req, res) => {
  await employeeService.create(req.body);
  res.status(201).send("Funcionário criado");
};

exports.update = async (req, res) => {
  await employeeService.update(req.params.id, req.body);
  res.send("Funcionário atualizado");
};

exports.remove = async (req, res) => {
  await employeeService.remove(req.params.id);
  res.send("Funcionário removido");
};