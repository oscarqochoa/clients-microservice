import { IClient } from '../../../domain/interfaces/clients/i.client';
import { IClientsRepository } from '../../../domain/interfaces/clients/i.clients.repository';

import { Mongo } from '../../database/connection';
import { ValidateParams } from '../../helpers/validate-params.helper';

export class ClientsRepository implements IClientsRepository {

    public async get(params: any): Promise<Object> {
        try {

            let page = ValidateParams.page(params.page);
            let perPage = ValidateParams.perPage(params.perPage);

            const totalDocuments = await Mongo.client.countDocuments();
            const response: Array<IClient> = await Mongo.client.find({})
                .limit(perPage)
                .skip(perPage * page)
                .sort({
                    created_at: 'desc',
                })
                .populate([])

            return {
                per_page: perPage,
                page: page,
                total: totalDocuments,
                data: response,
            }

        } catch (error) {
            throw error
        }
    }

    public async getById(id: string): Promise<IClient | null> {
        try {
            const client = await Mongo.client.findById(id).exec()
            return client;
        } catch (error) {
            throw error
        }
    }

    public async register(client: IClient): Promise<Object> {
        try {
            const newClient: IClient = new Mongo.client({
                businessName: client.businessName,
                ruc: client.ruc,
                address: client.address,
                active: client.active,
            })

            const response = await newClient.save();

            return {
                data: response
            };
        } catch (error) {
            throw error
        }
    }

    public async update(id: String, client: IClient): Promise<Object> {
        try {

            const data: IClient = new Mongo.client({
                _id: id,
                businessName: client.businessName,
                ruc: client.ruc,
                address: client.address,
                active: client.active
            })

            const response = await Mongo.client.findOneAndUpdate({ _id: id }, data, { new: true });

            return {
                data: response
            }

        } catch (error) {
            throw error
        }
    }

    public async delete(id: String): Promise<Object> {
        try {

            const response = await Mongo.client.findOneAndDelete({ _id: id });

            return {
                data: response
            }

        } catch (error) {
            throw error
        }
    }

}