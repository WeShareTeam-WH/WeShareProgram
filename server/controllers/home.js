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

async function searchGoodsLabel(ctx, next) {
  console.log(ctx.request.query.dateInfo);
  await DB("goods_label").select()
    .catch(function (e) {
      console.error(e);
    })
    .then(
    function (data) {
      console.log(data);
      ctx.response.body = data;
      console.log("searchRecords by dateInfo success")
    }
    );
  return ctx.response.body
}

module.exports = {
  searchGoodsLabel
}