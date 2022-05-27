import Joi from 'joi';

export type UserSchema = {
    id?: string;
    username?: string;
    password: string;
};

export const userSchemaValidator = async (dataValues: any) => {
    const schema = Joi.object().keys({
        id: Joi.string(),
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    return schema.validate(dataValues, {
        abortEarly: false,
        allowUnknown: true,
    });
};
