import {Router} from 'express';
import auth from '../auth';
import {userSchemaValidator} from "../../../models/schema/users";

const router = Router();
const createError = require('http-errors');

router.get('/users', auth.optional, async (req, res, next) => {
    try {
        return res.status(200).json([
            {
                username: "user1",
                password: "password",
                mobileNo: "001"
            },
            {
                username: "user2",
                password: "password",
                mobileNo: "002"
            },
            {
                username: "user3",
                password: "password",
                mobileNo: "003"
            },
            {
                username: "user4",
                password: "password",
                mobileNo: "004"
            },
            {
                username: "user5",
                password: "password",
                mobileNo: "005"
            }
        ]);
    } catch (err) {
        return next(createError(500, err));
    }
});

router.post('/users', auth.optional, async (req, res, next) => {
    try {
        const {body} = req;

        const validator = await userSchemaValidator(body);
        if (validator.error) {
            return res.status(400).json({
                message: validator.error.details[0].message
            });
        }

        return res.status(200).json({
            message: "success"
        })

    } catch (err) {
        return next(createError(400, err));
    }
});

export default router;
