import Koa from 'koa'
import router from "./routers/index.js";
const app = new Koa()
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000);
