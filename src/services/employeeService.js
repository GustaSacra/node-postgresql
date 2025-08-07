const database = require("../Database/database");

exports.getAll = () => database.selectEmployees();
exports.create = (data) => database.insertEmployee(data);
exports.update = (id, data) => database.updateEmployee(id, data);
exports.remove = (id) => database.deleteEmployee(id);