import express, { Router } from 'express';
import { ClientsController } from '../../controllers/clients/clients.controller';

const router: Router = express.Router();
const clientsController = new ClientsController();

router.get('/get', clientsController.getClients);
router.get('/get-one/:id', clientsController.getClient);
router.post('/register', clientsController.registerClient);
router.put('/update/:id', clientsController.updateClient);
router.delete('/delete/:id', clientsController.deleteClient);



export default router;