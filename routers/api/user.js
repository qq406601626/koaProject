import Router from "@koa/router";
// import {log} from '../../middleware/api/user.js'

const router = new Router({
    prefix: '/user'
})
// router.use(log)
router.get('/test', async (ctx, next) => {
    const [data] = await ctx.dbExecute(`SELECT * FROM city where District  = ?`,['Utrecht'])
    ctx.response.body = data
})
export default router
