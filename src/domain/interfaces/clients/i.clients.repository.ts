import { IClient } from "./i.client";

export interface IClientsRepository {
    get(params: any): Promise<Object>;
    getById(id: string): Promise<IClient | null>;
    register(client: IClient): Promise<Object>;
    update(id: String, client: IClient): Promise<Object>;
    delete(id: String): Promise<Object>;
}