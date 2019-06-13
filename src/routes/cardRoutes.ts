import { Request, Response, Router } from "express";
import { CardController} from './../controllers/cardController'

const cardController: CardController = new CardController();

export const cardRoutes: Router = Router();
cardRoutes.post('/create',cardController.addNewCard);
cardRoutes.get('/',cardController.getCards);
cardRoutes.get('/:cardId',cardController.getCardWithID);
cardRoutes.put('/:cardId',cardController.updateCard);
cardRoutes.delete('/:cardId',cardController.deleteCard); 