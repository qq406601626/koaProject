import Router from "@koa/router";

const router = new Router({
    prefix: '/'
})
// router.get('/',async (ctx,next)=>{},async (ctx,next)=>{})
router.get('/', async (ctx) => {
    try {
        const [res] = await ctx.dbExecute('select * from city where city.District = :District', {District:'Sharja'})
        ctx.response.body = JSON.stringify(res)
    } catch (e) {
        console.log('eeeeee', e.message)
    }
})

export default router
