import Ajv from "ajv";

const validateSchema = (schema: any, data: any): boolean => {
    const avj: Ajv = new Ajv();

    const validate = avj.compile(schema);

    return validate(data);
};

export default validateSchema;
