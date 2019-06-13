import { DbModel } from '../models/dbModel';
import { ResponseModel} from './../dataTransferModels/responseModel'
import { MongoErrorHandler } from './../helper/mongoErrorHandler'

export class UserService{

    public static async AddUser(req) {
        try {
            let newUser = new DbModel.userModel(req.body);
            await newUser.save();
            return ResponseModel.getValidResponse(newUser)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async getUserByEmail(req) {
        var data = await DbModel.userModel.findOne({email:req.body.email}).exec();
    }

    public static async getAll(){
        try {
            let users = await DbModel.userModel.find().exec();
            return ResponseModel.getValidResponse(users)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async get(req){
        try {
            let user = await DbModel.userModel.findById(req.params.userId).exec();
            return ResponseModel.getValidResponse(user)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async updateUser(req){
        try {
            let user = await DbModel.userModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }).exec();
            return ResponseModel.getValidResponse(user)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async deleteUser(req){
        try {
            await DbModel.userModel.remove({ _id: req.params.userId }).exec();
            return ResponseModel.getValidResponse({ message: 'Successfully deleted user!'})
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }
}