import mongoose, { Schema } from "mongoose";
import { IClient } from '../../../../domain/interfaces/clients/i.client';

export const schema = new Schema({
    businessName: {
        type: String,
        min: 3,
        required: true
    },
    ruc: {
        type: String,
        min: 7,
        required: true,
    },
    address: {
        type: String
    },
    active: {
        type: Boolean,
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export const ClientSchema = mongoose.model<IClient>('Client', schema);