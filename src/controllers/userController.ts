import { Request, Response } from 'express';
import { UserService } from './../services/userService'
import * as bcrypt from 'bcrypt-nodejs'
import { MongoErrorHandler } from './../helper/mongoErrorHandler'
import { ResponseModel} from './../dataTransferModels/responseModel'
import * as jwt from 'jsonwebtoken'
import { ModelHelper } from './../helper/modelHelper'

export class UserController {

    public async register(req: Request, res: Response) {
       
        return bcrypt.hash(req.body.password, null, null,(err, hash) => {
            if(err){
                return res.json(MongoErrorHandler.handleError(err));
            }else{
                req.body.password = hash;
                return UserService.AddUser(req).then((user) => {
                    return res.json(user);
                }).catch((err)=> {
                    return res.json(err);
                });
            }
        });
    }

    public async login(req: Request, res: Response) {
        let user = await UserService.getUserByEmail(req);
        if(user == null){
            return res.json(ResponseModel.getInvalidResponse({'message':"Email not found"})); 
        }else{
            return bcrypt.compare(req.body.password, "", (err, result) => {
                if(err){
                    return res.json(ResponseModel.getInvalidResponse({message:"Incorrect Password"}));
                }else
                {
                    if(result){
                        const token = jwt.sign(
                            {
                                email: "",
                                userId:""
                            },
                            ModelHelper.secretKey,
                            {
                                expiresIn: "365d"
                            }
                        );
                        return res.json(ResponseModel.getValidResponse({'token':token}));
                    }
                    return res.json(ResponseModel.getInvalidResponse({ message: "Email or Password is incorrect"}));
                }
            });
        }
    }

    public async getUser(req: Request, res: Response) {
        let response = await UserService.getAll();
        return res.json(response);
    }

    public async getUserWithID(req: Request, res: Response) {
        let response = await UserService.get(req);
        return res.json(response);
    }

    public async updateUser(req: Request, res: Response) {
        let response = await UserService.updateUser(req);
        return res.json(response);
    }

    public async deleteUser(req: Request, res: Response) {
        let response = await UserService.deleteUser(req);
        return res.json(response);
    }
}

