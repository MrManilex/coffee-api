import { Router } from 'express'
import * as coffeesCtrl from '../controller/coffees.js'
const router = Router()

/* GET users listing. */
router.get('/coffees', coffeesCtrl.index)

export {
  router
}
