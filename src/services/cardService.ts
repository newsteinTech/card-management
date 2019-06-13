import { DbModel } from './../models/dbModel'
import { ResponseModel} from './../dataTransferModels/responseModel'
import { MongoErrorHandler } from './../helper/mongoErrorHandler'

export class CardService{

    public static async AddCard(req) {
        try {
            let newCard = new DbModel.cardModel(req.body);
            await newCard.save();
            return ResponseModel.getValidResponse(newCard)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async getAllCards(){
        try {
            let cards = await DbModel.cardModel.find()
            .populate({ path: 'bank', select: '_id name' })
            .populate({ path: 'user', select: '_id email mobile' })
            .exec();
            return ResponseModel.getValidResponse(cards)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async getCard(req){
        try {
            let card = await DbModel.cardModel.findById(req.params.cardId)
            .populate({ path: 'bank', select: '_id name' })
            .populate({ path: 'user', select: '_id email mobile' })
            .exec();

           
            return ResponseModel.getValidResponse(card)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async updateCard(req){
        try {
            let card = await DbModel.cardModel.findOneAndUpdate({ _id: req.params.cardId }, req.body, { new: true }).exec();
            return ResponseModel.getValidResponse(card)
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }

    public static async deleteCard(req){
        try {
            await DbModel.cardModel.remove({ _id: req.params.cardId }).exec();
            return ResponseModel.getValidResponse({ message: 'Successfully deleted card!'})
        } catch(err) {
            return MongoErrorHandler.handleError(err);
        }
    }   
}