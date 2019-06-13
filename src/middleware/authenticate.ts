import { ModelHelper} from '../helper/modelHelper'
const jwt = require("jsonwebtoken");

export class Authenticate {
    public static authenticate(req, res, next) {
        let token = req.header("Authorization");
        if (!token) {
            return res.status(401).send("Access denied!");
        }
    
        try {
            let decoded = jwt.verify(token, ModelHelper.secretKey);
            req.user = decoded;
            next();
        } catch(ex) {
            console.log(ex);
            return res.status(401).send("Bad Request! Access denied!");
        }
    };
}