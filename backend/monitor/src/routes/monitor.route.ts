import {Router} from "express";

export const router = Router();

/**
 * post data
 */
router.get("/", async (req, res, next) => {
    res.json("ok");
})