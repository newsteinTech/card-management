import * as mongoose from 'mongoose';
import { ModelHelper } from './../helper/modelHelper'
import { CardSchema } from './cardModel'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email:        
    { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: ModelHelper.emailValidator,
            message: '{VALUE} is not a valid email id!'
        }
    },
    password: {
        type: String            
    },
    mobile:   
    {
        type: String, 
        required: true,
        unique: true,
        validate: {
           validator: ModelHelper.mobileNumberValidator,
            message: '{VALUE} is not a valid phone number!'
        }
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    isActive: { type: Boolean, default: false }
});