import { Request, Response } from 'express';
import { BankService } from './../services/bankService'


export class BankController {

    public async addNewBank(req: Request, res: Response) {
        let response = await BankService.AddBank(req);
        return res.send(response);
    }

    public  async getBanks(req: Request, res: Response) {
       req.params.bankId = "5cd81193d3566653b0a49be4"
       req.body.name = "SBI"
       
        let response =   BankService.updateBank(req);
        console.log("1233");
        console.log(response);
        let data =   await BankService.getAllBanks();
        console.log("99");
        console.log(data)
        console.log(response)
        return res.json(data);
    }

    public async getBankWithID(req: Request, res: Response) {
        let response = await BankService.getBank(req);
        return res.json(response);
    }

    public async updateBank(req: Request, res: Response) {
        let response = await BankService.updateBank(req);
        return res.json(response);
    }

    public async deleteBank(req: Request, res: Response) {
        let response = await BankService.deleteBank(req);
        return res.json(response);
    }
}

