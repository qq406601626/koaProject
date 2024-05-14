import Koa from 'koa'
import Router from '@koa/router'
const app = new Koa()
const router = new Router()

// app.use(async (ctx,next)=>{
//     next()
// })
//
// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });
router.get('/',(ctx)=>{
    ctx.response.body = 'this is index page'
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000);
