import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BankSchema = new Schema({
    name: {
        type: String,
        required: 'Enter bank name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});