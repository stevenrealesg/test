const Router = require("express").Router;
const route = Router();
const ctrlPerson = require("../controllers/person.controller");


route.get('/', ctrlPerson.getAll )
route.post('/add', ctrlPerson.add )
route.put('/update/:id', ctrlPerson.update )
route.delete('/delete/:id', ctrlPerson.remove )

module.exports = route;