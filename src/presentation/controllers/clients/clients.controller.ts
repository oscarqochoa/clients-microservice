import { Request, Response, NextFunction } from 'express';
import { ClientsRepository } from '../../../infrastructure/repositories/clients/clients.repository';

const clientsRepository = new ClientsRepository();

export class ClientsController {

    public async getClients(req: Request, res: Response, next: NextFunction) {
        try {

            const response = await clientsRepository.get(req.query);
            res.json(response);

        } catch (error) {
            next(error)
        }
    }

    public async getClient(req: Request, res: Response, next: NextFunction) {
        try {

            const response = await clientsRepository.getById(req.params.id);
            res.json(response)

        } catch (error) {
            next(error)
        }
    }

    public async registerClient(req: Request, res: Response, next: NextFunction) {
        try {

            const response = await clientsRepository.register(req.body);
            res.json(response);

        } catch (error) {
            next(error)
        }
    }

    public async updateClient(req: Request, res: Response, next: NextFunction) {
        try {

            const response = await clientsRepository.update(req.params.id, req.body);
            res.json(response);

        } catch (error) {
            next(error)
        }
    }

    public async deleteClient(req: Request, res: Response, next: NextFunction) {
        try {

            const response = await clientsRepository.delete(req.params.id);
            res.json(response)

        } catch (error) {
            next(error)
        }
    }

}
