import * as mongoose from 'mongoose';
import { Collections } from './../models/collection'
import { UserSchema } from './../models/userModel'
import { CardSchema } from './../models/cardModel'
import { BankSchema } from './../models/bankModel'

export class DbModel {
    public static cardModel = mongoose.model(Collections.CardCollectionName, CardSchema);
    public static bankModel = mongoose.model(Collections.BankCollectionName, BankSchema);
    public static userModel = mongoose.model(Collections.UserCollectionName, UserSchema);
}