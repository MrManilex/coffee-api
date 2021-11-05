import { Coffee } from '../models/coffee.js'

function index(req, res){
  Coffee.find({})
    .then(coffees => {
      res.json(coffees)
    })
}

export{
  index
}