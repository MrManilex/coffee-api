import { Router } from 'express'
import * as coffeesCtrl from '../controller/coffees.js'
const router = Router()

/* GET users listing. */
router.get('/coffees', coffeesCtrl.index)

router.get('/coffees/:id', coffeesCtrl.show)

router.post('/coffees', coffeesCtrl.create)

router.put('/coffees/:id', coffeesCtrl.update)

router.delete('/coffees/:id', coffeesCtrl.delete)

export {
  router
}
