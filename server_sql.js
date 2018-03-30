const {query}=require('./sql/db')

async function selectAllData(){
    let sql='SELECT * FROM login'
    // let sql='SELECT * FROM login WHERE id=1'
    // let sql='SELECT * FROM login WHERE username like "%fei"'
    // let sql='UPDATE login set username="fuzhena"'
    // let sql='INSERT INFO login (id,username,password) VALUE (2,"yanxiaofei","123456")'
    // let sql='DELETE FROM login WHERE id=1'
    let dataList=await query(sql)
    return dataList
}

async function getData(){
    let dataList=await selectAllData()
    console.log(dataList)
}
getData()