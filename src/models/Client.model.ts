import { Schema, model, Document } from 'mongoose'

export interface IClient extends Document {
    businessName: string;
    ruc: string;
    address: string;
    active: boolean;
    status: boolean;
    created_at: Date;
}

const clientSchema = new Schema({
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

export default model<IClient>('Client', clientSchema);
