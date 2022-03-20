export default class InvalidParameterException {
    private message: string;

    constructor(param: any) {
        this.message = `Invalid parameter: ${param}`;
    }

    toString() {
        return this.message;
    }
}
