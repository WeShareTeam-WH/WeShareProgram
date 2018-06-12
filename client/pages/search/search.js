Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "正装",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '正装1',
            image: "../../image/search/正装/正装1.jpg"
          },
          {
            child_id: 2,
            name: '正装2',
            image: "../../image/search/正装/正装2.jpg"
          },
          {
            child_id: 3,
            name: '正装3',
            image: "../../image/search/正装/正装3.jpg"
          },
          {
            child_id: 4,
            name: '正装4',
            image: "../../image/search/正装/正装4.jpg"
          },
          {
            child_id: 5,
            name: '正装5',
            image: "../../image/search/正装/正装5.jpg"
          },
          {
            child_id: 6,
            name: '正装6',
            image: "../../image/search/正装/正装6.jpg"
          },
          {
            child_id: 7,
            name: '正装7',
            image: "../../image/search/正装/正装7.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "演出服",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '演出服1',
            image: "../../image/search/演出服/演出服1.jpg"
          },
          {
            child_id: 2,
            name: '演出服2',
            image: "../../image/search/演出服/演出服2.jpg"
          },
          {
            child_id: 3,
            name: '演出服3',
            image: "../../image/search/演出服/演出服3.jpg"
          },
          {
            child_id: 4,
            name: '演出服4',
            image: "../../image/search/演出服/演出服4.jpg"
          },
          {
            child_id: 5,
            name: '演出服5',
            image: "../../image/search/演出服/演出服5.jpg"
          },
          {
            child_id: 6,
            name: '演出服6',
            image: "../../image/search/演出服/演出服6.jpg"
          },
          {
            child_id: 7,
            name: '演出服7',
            image: "../../image/search/演出服/演出服7.jpg"
          },
          {
            child_id: 8,
            name: '演出服8',
            image: "../../image/search/演出服/演出服8.jpg"
          },
          {
            child_id: 9,
            name: '演出服9',
            image: "../../image/search/演出服/演出服9.jpg"
          },
          {
            child_id: 10,
            name: '演出服10',
            image: "../../image/search/演出服/演出服10.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "小清新",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '小清新1',
            image: "../../image/search/小清新/小清新1.jpg"
          },
          {
            child_id: 2,
            name: '小清新2',
            image: "../../image/search/小清新/小清新2.jpg"
          },
          {
            child_id: 3,
            name: '小清新3',
            image: "../../image/search/小清新/小清新3.jpg"
          },
          {
            child_id: 4,
            name: '小清新4',
            image: "../../image/search/小清新/小清新4.jpg"
          },
          {
            child_id: 5,
            name: '小清新1',
            image: "../../image/search/小清新/小清新5.jpg"
          },
          {
            child_id: 6,
            name: '小清新2',
            image: "../../image/search/小清新/小清新6.jpg"
          },
          {
            child_id: 7,
            name: '小清新3',
            image: "../../image/search/小清新/小清新7.jpg"
          },
          {
            child_id: 8,
            name: '小清新4',
            image: "../../image/search/小清新/小清新8.jpg"
          },
          {
            child_id: 9,
            name: '小清新9',
            image: "../../image/search/小清新/小清新9.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "学士服",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  