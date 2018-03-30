const Koa=require('koa');
const app=new Koa()

app.use(async(ctx)=>{
    // console.log(ctx)
    if(ctx.url==='/' && ctx.method==='GET'){
        //当get请求时候返回表单页面
        let html=`
        <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
        `
        ctx.body=html
    }else if(ctx.url==='/' && ctx.method==='POST'){
        //当post请求的时候，解析POST表单里的数据并显示出来
        let postData=await parsePostData(ctx)
        ctx.body=postData
    }else{
        //其它请求显示404
        ctx.body='嗨，你跑哪去了'
    }
})

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postData='';
            ctx.req.addListener('data',(data)=>{
                postData+=data
            })
            ctx.req.addListener('end',(end)=>{
                let parseData=parseQueryStr(postData)
                resolve(parseData)
            })
        } catch(err){
            reject(err)
        }
    })
}
//将post请求参数字符串解析json
function parseQueryStr(queryStr){
    let queryData=new Object()
    let queryStrlist=queryStr.split('&')
    console.log(queryStrlist)
    for(let [index,queryStr] of queryStrlist.entries()){
        let itemList=queryStr.split('=')
        queryData[itemList[0]]=decodeURIComponent(itemList[1])
    }
    return queryData
}

app.listen(3000,()=>{
    console.log('启动调试打开3000')
})
