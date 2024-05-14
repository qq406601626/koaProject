import Router from "@koa/router";
const router = new Router({
    prefix:'/'
})
// router.get('/',async (ctx,next)=>{},async (ctx,next)=>{})
router.get('/',async (ctx,next)=>{
    ctx.response.body = 'this is new index page'
})

export default router
