const Todos = require('../models/Todos')

class Todos {
    static viewAll(){
        Todos.find()
    }
}