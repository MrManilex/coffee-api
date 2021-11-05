import { Coffee } from '../models/coffee.js'

function index(req, res){
  Coffee.find({})
    .then(coffees => {
      res.json(coffees)
    })
}

function show(req, res){
  Coffee.findById(req.params.id)
    .then(coffee => {
      res.json(coffee)
    })
}

function create(req, res){
  Coffee.create(req.body)
    .then(coffee => {
      res.json(coffee)
    })
}

function update(req, res){
  Coffee.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((coffee) => {
      res.json(coffee)
    })
}

export{
  index,
  show,
  create,
  update
}