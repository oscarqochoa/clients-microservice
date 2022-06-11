import mongoose from 'mongoose';
import { environment } from '../../presentation/configuration/environment';

// Schemas
import { ClientSchema } from './schemas/clients/Client.schema';

export class Mongo {
    connect() {
        mongoose.connect(environment.mongo_uri || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => console.log('Connected to mongo'))
            .catch(reason => console.error(reason));
    }

    // Schemas
    static client = ClientSchema;

}