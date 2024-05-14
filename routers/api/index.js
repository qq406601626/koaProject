import Router from '@koa/router'
import UserRouter from './user.js'
import InfoRouter from './info.js'
const router = new Router({
    prefix:'/api'
})
router.use(UserRouter.routes(),UserRouter.allowedMethods())
router.use(InfoRouter.routes(),InfoRouter.allowedMethods())
export default router
