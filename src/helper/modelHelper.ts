export class ModelHelper {
    static emailValidator(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    static get invalidEmailMsg() {
        return '{VALUE} is not a valid email id!';
    }

    static mobileNumberValidator(mobile) {
        return /^\d{10}$/.test(mobile);
    }

    static get invalidMobileNumberMsg() {
        return '{VALUE} is not a valid mobile number!';
    }

    static get secretKey() {
        return "secret key";
    }

    static updateFields(source, destination) {
        for (var prop in destination) {
            if (prop == "_id" || prop == "__v" || prop == "createdAt" || prop == "seqCode") {
                continue;
            }

            if (destination.hasOwnProperty(prop)) {
                source[prop] = destination[prop];
            }
        }

        return source;
    }
}