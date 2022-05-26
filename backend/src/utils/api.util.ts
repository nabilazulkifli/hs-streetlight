// import { NextFunction, Request, Response } from 'express';
//
// const { NODE_ENV } = process.env;
//
// const IS_PROD = NODE_ENV === 'production';
//
// const prisma = new PrismaClient();
//
// export const permission = async (req: any, res: Response, next: NextFunction) => {
//     try {
//         const user = await prisma.user.findUnique({
//             where: {
//                 id: req.payload.id,
//             },
//         });
//
//         if (!user) {
//             const admin = await prisma.admin.findUnique({
//                 where: {
//                     id: req.payload.id,
//                 },
//             });
//
//             if (!admin) {
//                 return res.sendStatus(401);
//             }
//
//             req.requester = admin;
//             req.isAdmin = true;
//
//             return next();
//         }
//
//         req.requester = user;
//
//         if (IS_PROD) {
//             const date = new Date();
//             const day = new Date().getDay();
//             const hour = new Date().getHours();
//
//             date.setUTCHours(0, 0, 0, 0);
//
//             const holiday = await prisma.publicHoliday.findFirst({
//                 where: {
//                     date,
//                 },
//             });
//             if (!holiday && (day === 6 || day === 7 || (hour > 17 && hour < 24))) {
//                 return res.status(400).json({
//                     message:
//                         'Can only be accessed on Monday to Friday from 12am to 5pm (Excluding Public Holiday).',
//                 });
//             }
//         }
//
//         return next();
//     } catch (err) {
//         return next(err);
//     }
// };
//
// export const queryParams = async (req: any, res: Response, next: NextFunction) => {
//     try {
//         const paramsSchema = Joi.object({
//             current: Joi.number().integer().allow(null),
//             limit: Joi.number().integer().allow(null),
//             sortOrder: Joi.string().allow('asc', 'desc').default('asc'),
//             sortField: Joi.string().default('name'),
//             filters: Joi.object().allow(null),
//             search: Joi.object().allow(null),
//             join: Joi.object().allow(null),
//         });
//         const { error } = paramsSchema.validate(req.query, {
//             abortEarly: false,
//         });
//         if (error) {
//             return res.status(400).json({ message: error.details });
//         }
//
//         const {
//             current = 0,
//             limit = 10,
//             sortOrder,
//             sortField,
//             search = {},
//             filters,
//             join = {},
//         } = req.query;
//
//         req.query = {
//             current,
//             limit,
//             sortOrder,
//             sortField,
//             search,
//             filters,
//             join,
//         };
//
//         return next();
//     } catch (err) {
//         return next(err);
//     }
// };
