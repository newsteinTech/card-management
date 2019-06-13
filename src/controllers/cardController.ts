import { Request, Response } from 'express';
import { CardService } from './../services/cardService'


export class CardController {

    public async addNewCard(req: Request, res: Response) {
        let response = await CardService.AddCard(req);
        return res.json(response);
    }

    public async getCards(req: Request, res: Response) {
        let response = await CardService.getAllCards();
        return res.json(response);
    }

    public async getCardWithID(req: Request, res: Response) {
        let response = await CardService.getCard(req);
        return res.json(response);
    }

    public async updateCard(req: Request, res: Response) {
        let response = await CardService.updateCard(req);
        return res.json(response);
    }

    public async deleteCard(req: Request, res: Response) {
        let response = await CardService.deleteCard(req);
        return res.json(response);
    }
}

