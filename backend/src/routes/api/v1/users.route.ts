import { Router } from 'express';
import auth from '../auth';

const router = Router();
const createError = require('http-errors');

router.get('/users', auth.optional, async (req, res, next) => {
    try {
        return res.status(200).json({
            data: [
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
            ]
        });
    } catch (err) {
        return next(createError(500, err));
    }
});

export default router;
