import Router from "@koa/router";
import {log} from '../../middleware/api/user.js'
const router = new Router({
    prefix:'/user'
})
router.use(log)
router.get('/test',async (ctx,next)=>{
    ctx.body = {
        name:'zhangsan',
        age:18
    }
    // return {
    //     name:'zhangsan',
    //     age:18
    // }
})
export default router
