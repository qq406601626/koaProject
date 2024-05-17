const log = async (ctx,next)=>{
    await next()
}
export  {log}
