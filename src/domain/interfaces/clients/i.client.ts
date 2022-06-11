import { Document } from 'mongoose';
import { Client } from '../../models/clients/Client.model';

export interface IClient extends Client, Document {

}