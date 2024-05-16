import Koa from 'koa'
import router from "./routers/index.js";
import {useDataBase} from './middleware/global/index.js'
const app = new Koa()
app.use(useDataBase).use(router.routes()).use(router.allowedMethods())
app.listen(3000);
