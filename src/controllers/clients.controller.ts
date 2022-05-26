import { Request, Response } from "express";

import Client, { IClient } from '../models/Client.model'

export const getClients = async (req: Request, res: Response) => {
    try {

        const response = await Client.find().exec()

        res.status(200).json({
            message: "Clients",
            registers: response.length,
            data: response
        })

    } catch (error) {
        console.log("Something went wrong ", error)

        throw error
    }
}

export const getClient = async (req: Request, res: Response) => {
    try {
        let clientId = req.params.id;

        const response = await Client.findById(clientId).exec()

        res.status(200).json({
            message: "Successfully",
            client: response
        })

    } catch (error) {
        console.log("Something went wrong ", error)
        throw error
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const client: IClient = new Client({
            businessName: req.body.businessName,
            ruc: req.body.ruc,
            address: req.body.address,
            active: req.body.active,
        })

        const response = await client.save();

        res.status(200).json({
            message: "Registered Successfully",
            id: response._id
        })
    } catch (error) {
        console.log("Something went wrong ", error)

        throw error
    }
}

export const update = async (req: Request, res: Response) => {
    try {

        let clientId = req.params.id;

        const client: IClient = new Client({
            _id: clientId,
            businessName: req.body.businessName,
            ruc: req.body.ruc,
            address: req.body.address,
            active: req.body.active
        })

        Client.findOneAndUpdate({ _id: clientId }, client, { new: true }, (err, response) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error in the request'
                });
            }

            if (!response) {
                return res.status(404).send({
                    status: 'error',
                    message: 'The client has not been updated'
                });
            }

            return res.status(200).send({
                status: 'success',
                client: response,
            })
        })

    } catch (error) {
        console.log("Something went wrong ", error)

        throw error
    }
}

export const remove = async (req: Request, res: Response) => {
    try {

        var clientId = req.params.id;

        Client.findOneAndDelete({ _id: clientId }, (err: any, response: any) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error in the request'
                });
            }

            if (!response) {
                return res.status(500).send({
                    status: 'error',
                    message: 'The client has not been removed'
                })
            }

            return res.status(200).send({
                status: 'success',
                client: response,
            });

        })

    } catch (error) {
        throw error
    }
}