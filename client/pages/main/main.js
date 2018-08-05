// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['../../image/test_imag/img1.jpg', '../../image/test_imag/img2.jpg', '../../image/test_imag/img3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    labelInfo: {},

    // 搜索框背景色
    searchBoxBgc:"none",
    // 搜索输入框是否显示
    inputShowed: false,
    // 搜索输入框值
    inputVal: "",
    // 回到顶部按钮显示/隐藏状态
    floorstatus: false,
    // 租赁流程相关模型数据
    procedure:[
      {
        id:"order",
        imgUrl:"../../image/main/rent_procedure/order.png",
        text:"选衣下单"
      },
      {
        id:"logistics",
        imgUrl: "../../image/main/rent_procedure/logistics.png",
        text: "预约配送"
      },
      {
        id:"arrive",
        imgUrl: "../../image/main/rent_procedure/arrive.png",
        text: "到货签收"
      },
      {
        id:"recovery",
        imgUrl: "../../image/main/rent_procedure/order.png",
        text: "上门回收"
      }
    ],
    // 分类
    category:[
      {
        imgUrl:"../../image/main/category/formal_clothes.png",
        text:"正装"
      },
      {
        imgUrl: "../../image/main/category/stage_clothes.png",
        text: "舞台服"
      },
      {
        imgUrl: "../../image/main/category/festival_clothes.png",
        text: "节日"
      },
      {
        imgUrl: "../../image/main/category/grande_toilette.png",
        text: "礼服"
      },
      {
        imgUrl: "../../image/main/category/graduation_suite.png",
        text: "毕业服"
      }
    ],

    // 时下热潮
    fashion: {
      title: "时下热潮",
      subTitle: "News Fashion",
      mainImgUrl: "../../image/search/晚礼服/晚礼服1.jpg",
      galleryImage: [
        {
          imgUrl: "../../image/search/晚礼服/晚礼服2.jpg",
          desc: "世界杯|阿根廷球衣",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/search/晚礼服/晚礼服3.jpg",
          desc: "世界杯|意大利球衣",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/search/晚礼服/晚礼服4.jpg",
          desc: "世界杯|西班牙球衣",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/search/晚礼服/晚礼服5.jpg",
          desc: "世界杯|俄罗斯球衣",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/search/晚礼服/晚礼服6.jpg",
          desc: "世界杯|加拿大球衣",
          price: "￥98/5",
          size: "M/L"
        }
      ]
    },
    // 试衣秀
    clothesShow:{
      title: "试衣秀",
      subTitle: "Customer show",
      galleryImage: [
        {
          // 顾客微信昵称
          customerNickname:"开心小麻花",
          imgUrl: "../../image/main/customer_show/customer_show1.jpg",
          // 头像
          portraitUrl:"../../image/main/customer_show/head1.jpg",
          // 收藏量
          collection: 60,
          stature:"160cm",
          size: "S"
        },
        {
          customerNickname: "张三刀",
          imgUrl: "../../image/main/customer_show/customer_show2.jpg",
          portraitUrl: "../../image/main/customer_show/head2.jpg",
          collection: 60,
          stature: "175cm",
          size: "L"
        },
        {
          customerNickname: "Evildoer",
          imgUrl: "../../image/main/customer_show/customer_show3.jpg",
          portraitUrl: "../../image/main/customer_show/head3.jpg",
          collection: 60,
          stature: "168cm",
          size: "M"
        },
        {
          customerNickname: "Destiny",
          imgUrl: "../../image/main/customer_show/customer_show4.jpg",
          portraitUrl: "../../image/main/customer_show/head4.jpg",
          collection: 60,
          stature: "167cm",
          size: "M"
        }
      ]
    },
    // 民国时代
    minguo: {
      title: "民国时代",
      subTitle: "Minguo Period",
      mainImgUrl: "../../image/main/minguo/minguo1.jpg",
      galleryImage: [
        {
          imgUrl: "../../image/main/minguo/minguo2.jpg",
          desc: "民国风旗袍",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/minguo/minguo3.jpg",
          desc: "民国风旗袍",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/minguo/minguo4.jpg",
          desc: "民国风旗袍",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/minguo/minguo5.png",
          desc: "民国风旗袍",
          price: "￥98/5",
          size: "M/L"
        }
      ]
    },
    // cosplay
    cosplay: {
      title: "Cosplay",
      subTitle: "For Faith",
      mainImgUrl: "../../image/main/cosplay/cosplay1.jpg",
      galleryImage: [
        {
          imgUrl: "../../image/main/cosplay/cosplay2.jpg",
          desc: "cosplay",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/cosplay/cosplay3.jpg",
          desc: "cosplay",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/cosplay/cosplay4.jpg",
          desc: "cosplay",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/cosplay/cosplay5.jpg",
          desc: "cosplay",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/cosplay/cosplay6.jpg",
          desc: "cosplay",
          price: "￥98/5",
          size: "M/L"
        }
      ]
    },
    // 为您推荐
    recommend:{
      title: "为您推荐",
      subTitle: "Special for you",
      galleryImage: [
        {
          imgUrl: "../../image/main/recommend/recommend1.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L",
          collected:false
        },
        {
          imgUrl: "../../image/main/recommend/recommend2.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L",
          collected: false
        },
        {
          imgUrl: "../../image/main/recommend/recommend3.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L",
          collected: true
        },
        {
          imgUrl: "../../image/main/recommend/recommend4.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L",
          collected: false
        },
        {
          imgUrl: "../../image/main/recommend/recommend5.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L",
          collected: false
        },
        {
          imgUrl: "../../image/main/recommend/recommend6.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L",
          collected: true
        }
      ]
    }
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  // 获取滚动条当前位置
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true,
        searchBoxBgc:"white"
      });
    } else {
      this.setData({
        floorstatus: false,
        searchBoxBgc:"none"
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
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