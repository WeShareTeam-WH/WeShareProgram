// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deliveryTime: [
      {
        content: "今天"
      },
      {
        content: "明天上午"
      },
      {
        content: "明天下午",
        checked: true
      },
      {
        content: "明天晚上"
      }
    ],
    orderList: [
      {
        imageUrl: "../../image/order_confirm/order_list1.png",
        desc: "学士服大学士服批发毕业礼服学士服文科理科工科学士服学院风女男 ",
        unitPrice: 99,
        size: "L",
        category: "粉色-文科",
        count: 100
      },
      {
        imageUrl: "../../image/order_confirm/order_list1.png",
        desc: "学士服大学士服批发毕业礼服学士服文科理科工科学士服学院风女男 ",
        unitPrice: 99,
        size: "L",
        category: "粉色-文科",
        count: 100
      },
      {
        imageUrl: "../../image/order_confirm/order_list1.png",
        desc: "学士服大学士服批发毕业礼服学士服文科理科工科学士服学院风女男 ",
        unitPrice: 99,
        size: "L",
        category: "粉色-文科",
        count: 100
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})