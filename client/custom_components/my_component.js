// custom_components/my_component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    deliveryTime:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkRadio: function(){
      console.log("hh");
    }
  }
})
