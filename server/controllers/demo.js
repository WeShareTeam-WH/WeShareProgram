const { mysql } = require('../qcloud')

module.exports = ctx => {
  var id = 2
  // var res = await mysql("goods_label").where({ id }).first()
  ctx.state.data = "OK"
}