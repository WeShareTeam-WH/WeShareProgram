Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList: [],               // 购物车列表
    hasCardOrder: false,          // 列表是否有数据
    totalPrice: 1000,           // 总价，初始为0
    selectAllStatus: true,    // 全选状态，默认全选
    carRecList: []
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
    this.setData({
      hasCardOrder: true,        // 既然有数据了，那设为true吧
      allSelected:true,
      hiddenModal:true,
      totalPrice:20000,
      carList: [
        {
          id: 0, title: 'COSPlay 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'http://t1.mmonly.cc/uploads/tu/201801/9999/92172b111f.jpg',
          num: 4, price: 200, selected: true
        },
        {
          id: 1, title: 'COSPlay 款式2',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'http://t1.mmonly.cc/uploads/tu/201706/2/c8.jpg',
          num: 20, price: 30000, selected: true
        },
        {
          id: 2, title: '毕业 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'https://cbu01.alicdn.com/img/ibank/2018/786/870/8701078687_853497309.310x310.jpg',
          num: 1, price: 100, selected: true
        },
        {
          id: 3, title: '毕业 款式2',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'https://cbu01.alicdn.com/img/ibank/2018/025/412/8687214520_114707678.310x310.jpg',
          num: 1, price: 100, selected: true
        },
        {
          id: 4, title: '毕业 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'https://cbu01.alicdn.com/img/ibank/2018/786/870/8701078687_853497309.310x310.jpg',
          num: 1, price: 100, selected: true
        },
        {
          id: 5, title: '毕业 款式2',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'https://cbu01.alicdn.com/img/ibank/2018/025/412/8687214520_114707678.310x310.jpg',
          num: 1, price: 100, selected: true
        }
      ],
      carRecList: [
        {
          id: 0, title: 'COSPlay 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'http://t1.mmonly.cc/uploads/tu/201801/9999/92172b111f.jpg',
          num: 4, price: 200, selected: true
        },
        {
          id: 1, title: 'COSPlay 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'http://t1.mmonly.cc/uploads/tu/201801/9999/92172b111f.jpg',
          num: 4, price: 200, selected: true
        },
        {
          id: 2, title: 'COSPlay 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          image: 'http://t1.mmonly.cc/uploads/tu/201801/9999/92172b111f.jpg',
          num: 4, price: 200, selected: true
        },
        {
          id: 3, title: 'COSPlay 款式1',
          description: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道",
          image: 'http://t1.mmonly.cc/uploads/tu/201801/9999/92172b111f.jpg',
          num: 4, price: 200, selected: true
        }
      ]
    });
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

  /**
   * 购物车全选事件
   */
  selectAll()
  {
    let shopCarItems = this.data.carList, allSelected = !this.data.allSelected, totalPrice = 0;
    for (let i = 0, len = shopCarItems.length; i < len; i++)
    {
      shopCarItems[i].selected = allSelected;
      if (allSelected)
      {
        totalPrice += shopCarItems[i].price * shopCarItems[i].num;
      }
    }
    this.setData({
      hasCardOrder: this.data.hasCardOrder,
      totalPrice: totalPrice,
      allSelected: allSelected,
      carList: shopCarItems,
      carRecList: this.data.carRecList
    });
  },

  /**
   * 购物清理事件
   */
  clearAllDialog() {
    this.setData({
      hiddenModal : false
    });
  },

  listenerConfirm() {
    this.setData({
      hasCardOrder: false,
      totalPrice: 0,
      allSelected: false,
      carList: [],
      hiddenModal: true
    });
  },

  listenerCancel() {
    this.setData({
      hiddenModal: true
    });
  },

  /**
  * 当前商品选中事件
  */
  selectListItem(e) {
    const index = e.currentTarget.dataset.index;
    let carList = this.data.carList;
    const selected = carList[index].selected;
    carList[index].selected = !selected;
    this.setData({
      carList: carList,
      allSelected: carList.filter((car) => car.selected == true).length == carList.length
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteListItem(e) {
    const index = e.currentTarget.dataset.index;
    let carList = this.data.carList;
    carList.splice(index, 1);
    this.setData({
      carList: carList,
      hasCardOrder: carList.length == 0 ? false:true
    });
    if (!carList.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carList = this.data.carList;
    let num = carList[index].num;
    num = num + 1;
    carList[index].num = num;
    this.setData({
      carList: carList
    });
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carList = this.data.carList;
    let num = carList[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carList[index].num = num;
    this.setData({
      carList: carList
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carList = this.data.carList;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carList.length; i++) {         // 循环列表得到每个数据
      if (carList[i].selected) {                     // 判断选中才会计算价格
        total += carList[i].num * carList[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carList: carList,
      totalPrice: total.toFixed(2)
    });
  },

  toBuy () {
    wx.navigateTo({
      url: "/pages/order/order"
    });
  }
})