// const uuid = require('node-uuid')


// 连接数据库
const { mysql: config } = require('../config')
const DB = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pass,
    database: config.db,
    charset: config.char,
    multipleStatements: true
  }
})

// var id = uuid.v1()
//   // 增
//   var book = {
//     id: id,
//     name: "冰与火之歌",
//     price: 88
//   }
  //await DB("Book").insert(book)
  // 查
  //var res = await mysql("Book").where({ id }).first()
 // console.log(res)
  // 改
  // await mysql("Book").update({ price: 66 }).where({ id })
  // 删
  // await mysql("Book").del().where({ id })

// async function searchGoodsLabel(ctx, next) {
//   console.log(ctx.request.query.dateInfo);
//   await DB("goods_label").select()
//     .catch(function (e) {
//       console.error(e);
//     })
//     .then(
//     function (data) {
//       console.log(data);
//       ctx.response.body = data;
//       console.log("searchRecords by dateInfo success")
//     }
//     );
//   return ctx.response.body
// }