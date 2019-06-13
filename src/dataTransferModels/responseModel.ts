

export class ResponseModel {
    isValid : Boolean;
    data : any;
    errors: any;

    constructor(isValid, data, errors) {
        this.isValid = isValid;
        this.data = data;
        this.errors = errors;
    }

    static getValidResponse(data) {
        return new ResponseModel(true, data, null);
    }

    static getInvalidResponse(errors) {
        return new ResponseModel(false, null, errors);
    }
}