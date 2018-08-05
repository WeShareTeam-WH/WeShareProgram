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

    subModule:{
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
      }
    },
    recommend:{
      title: "为您推荐",
      subTitle: "Special for you",
      galleryImage: [
        {
          imgUrl: "../../image/main/recommend/recommend1.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/recommend/recommend2.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/recommend/recommend3.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/recommend/recommend4.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/recommend/recommend5.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L"
        },
        {
          imgUrl: "../../image/main/recommend/recommend6.jpg",
          desc: "recommend",
          price: "￥98/5",
          size: "M/L"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  add:function(){
    console.log("hello")
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