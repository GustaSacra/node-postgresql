const express = require("express");

//* defini como um roteador
const router = express.Router()
const employeeController = require('../controllers/employeeController');
//* backend pronto para receber dados jSON 


//* aplicacao node da funcao express
//* metodos HTTP 
//* rotas 

router.get('/', employeeController.getAll);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.remove);


module.exports = router;