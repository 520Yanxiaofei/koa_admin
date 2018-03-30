const mysql=require('mysql')
const connecPool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'react_test'
})
let query = function( sql, values ) {
    return new Promise((resolve,reject)=>{
        connecPool.getConnection(function(err,connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = { query }



