import { DbModel } from './../models/dbModel'
import { ResponseModel} from './../dataTransferModels/responseModel'
import { MongoErrorHandler } from './../helper/mongoErrorHandler'

export class BankService{

    public static async AddBank(req) {
        try {
            let newBank = new DbModel.bankModel(req.body);
            await newBank.save();
            return ResponseModel.getValidResponse(newBank)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async printData(){
        for(let i=0;i<1000000000;i++){
            if(i==99999999){
                console.log("couting DOne")
            }
        }
    }

    public static async getAllBanks(){
        try {
            let banks =  await DbModel.bankModel.find().exec();
            console.log("13");
            return ResponseModel.getValidResponse(banks)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async getBank(req){
        try {
            let bank = await DbModel.bankModel.findById(req.params.bankId).exec();
            return ResponseModel.getValidResponse(bank)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async updateBank(req){
        try {
            let bank=null;
            setTimeout(function(){
                 bank =  DbModel.bankModel.findOneAndUpdate({ _id: req.params.bankId }, req.body, { new: true }).exec();
            return ResponseModel.getValidResponse(bank)
            },3000);
            
            
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async deleteBank(req){
        try {
            await DbModel.bankModel.remove({ _id: req.params.bankId }).exec();
            return ResponseModel.getValidResponse({ message: 'Successfully deleted bank!'})
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }
}

