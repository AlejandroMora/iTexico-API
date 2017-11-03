var express = require(`express`);
var router  = express.Router();

var TaskController = require(`../../controller/todo.controller`);

router.get(`/`, TaskController.getTasks);
router.post(`/`, TaskController.createTask);
router.put(`/`, TaskController.updateTask);
router.delete(`/:_id`, TaskController.deleteTask);

module.exports = router;