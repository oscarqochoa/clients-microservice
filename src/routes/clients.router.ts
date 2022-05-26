import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken';

const router: Router = Router();

// Controllers
import { getClients, getClient, register, update, remove } from '../controllers/clients.controller';

router.get('/get', getClients)
router.get('/get-one/:id', getClient)
router.post('/register', register)
router.put('/update/:id', update)
router.delete('/delete/:id', remove)

export default router;