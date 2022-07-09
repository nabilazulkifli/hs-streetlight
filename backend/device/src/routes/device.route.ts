import {Router} from "express";

export const router = Router();

/**
 * post data
 */
router.post("/", async (req, res, next) => {
    res.json("ok");
})