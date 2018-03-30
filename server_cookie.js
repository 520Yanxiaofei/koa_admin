const Koa=require('koa')
const app=new Koa()

app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'cid',
            'hello word anaoei',
            {
                domain:'localhost',//cookie所在的域名
                path:'/index',//cookie所在的路径
                maxAge:10*60*1000,//cookie有效期时长
                expires:new Date('2017-03-30'),//cookie失效时间
                httpOnly:false,//是否用于http请求中获取
                overwrite:false,//是否允许重写
            }

        )
        ctx.body='cookie is ok '
    }else{
        ctx.body='hello word anaoei'
    }
})

app.listen(3000,()=>{
    console.log('[demo] cookie is starting at port 3000')
})