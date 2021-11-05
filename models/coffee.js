import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coffeeSchema = new Schema({
  signature: {type: String, required: true},
  temperature: {type: String, enum: ['hot', 'cold'], required: true},
  espressoShots: {type: Number, min: 1, required: true},
  type: {type: String, enum: ['Latte', 'Americano', 'Macchiato'], required: true},
  flavor: {type: String}
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

export{
  Coffee
}