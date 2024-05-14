import Router from '@koa/router'
import pageRouter from './page/index.js'
import apiRouter from './api/index.js'
const router = new Router()
router.use(pageRouter.routes(),pageRouter.allowedMethods())
router.use(apiRouter.routes(),apiRouter.allowedMethods())
export default router

