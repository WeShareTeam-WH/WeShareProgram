var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    personalInfo: {},
    payment: "在线支付",
    goods: [],
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO 获取用户信息
    this.setData({
      personalInfo: {
        name: "张三",
        phone: "18120571234",
        address: "湖北省武汉市关东街道软件园中路"
      },
    });

    this.setData({
      goods: [
        {
          id: 1,
          imageSrc: "https://cbu01.alicdn.com/img/ibank/2018/786/870/8701078687_853497309.310x310.jpg",
          name: "很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字",
          color: "白色",
          size: "L",
          price: 100.00,
          count: 2,
          subTotal: 200.00,
          comments: "",
          delivery: {
            method: "京东快递",
            time: "6月23日[今天] 15:00~19:00"
          }
        },
        {
          id: 2,
          imageSrc: "https://cbu01.alicdn.com/img/ibank/2018/786/870/8701078687_853497309.310x310.jpg",
          name: "很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字",
          color: "白色",
          size: "L",
          price: 100.00,
          count: 2,
          subTotal: 200.00,
          comments: "",
          delivery: {
            method: "京东快递",
            time: "6月23日[今天] 15:00~19:00"
          }
        },
        {
          id: 3,
          imageSrc: "https://cbu01.alicdn.com/img/ibank/2018/786/870/8701078687_853497309.310x310.jpg",
          name: "很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字",
          color: "白色",
          size: "L",
          price: 100.00,
          count: 2,
          subTotal: 200.00,
          comments: "",
          delivery: {
            method: "京东快递",
            time: "6月23日[今天] 15:00~19:00"
          }
        }
      ],
      totalPrice: 600
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindInputComments: function (e) {
    const goodsId = e.currentTarget.dataset.goodsid;
    // TODO 设置留言
  },

  submitOrder: function () {
    // TODO 提交订单
  }
})
