import * as mongoose from 'mongoose';
import { Collections } from './collection'

const Schema = mongoose.Schema;

export const CardSchema = new Schema({
    name: {
        type: String,
        required: 'Enter card name'
    },
    type:{type: String, enum: ['credit', 'debit']},
    Cardbank: { type: Schema.Types.ObjectId, required: true, ref: 'bank' },
    Carduser: { type: Schema.Types.ObjectId, required: true, ref:'user'},
    created_date: {
        type: Date,
        default: Date.now
    }
});