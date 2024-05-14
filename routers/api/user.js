import Router from "@koa/router";
const router = new Router({
    prefix:'/user'
})
router.get('/test',async (ctx,next)=>{
    ctx.response.body = 'this is user api of test'
})
export default router
