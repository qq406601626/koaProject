import Router from "@koa/router";
import {log} from '../../middleware/api/user.js'
const router = new Router({
    prefix:'/user'
})
router.use(log)
router.get('/test',async (ctx,next)=>{
    ctx.response.body = 'this is user api of test'
})
export default router
