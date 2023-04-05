// index.js
// 获取应用实例
const app = getApp()
let tervaid=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    campus:"中心校区",
    restaurant:"齐园餐厅",
    choice:"吃什么?",
    isClick: 0,
    msg: "不行，下一个",
    disk:0,
    now:"早餐",
    length:15,
    a:[{name:"面条",  //测试数据
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"鸡蛋",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"油条",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"白菜肉饼",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"豆浆",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"飞机",
        intro:"硬硬硬，硬硬硬",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"望路羊",
        intro:"强强强，强强强",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"疯狂星期四",
        intro:"vivo50!!",
        possition:"不知道",
        price:0+"￥",
        lable:["贵","没人请"]
      },
      { name:"羊肉汤",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"煎饼果子",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"重庆小面",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"盖浇饭",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"肉夹馍",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"炸酱面",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      },
      { name:"馄饨",
        intro:"香香香，香香香",
        possition:"不知道",
        price:0+"￥",
        lable:[]
      }],
    showDisk:false,
    duration:300,
    showChangeCampus:false,
    customstyle:"",

    index: 0,
    multiArray: [
      ['兴隆山校区', '中心校区','洪家楼校区','趵突泉校区','软件园校区','千佛山校区','青岛校区','威海校区'],
      ['欣园', '悦园']
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '兴隆山校区'
        },
        {
          id: 1,
          name: '中心校区'
        },
        {
          id:2,
          name:'洪家楼校区'
        },
        {
          id:3,
          name:'趵突泉校区'
        },
        {
          id:4,
          name:'软件园校区'
        },
        {
          id:5,
          name:'千佛山校区'
        },
        {
          id:6,
          name:'青岛校区'
        },
        {
          id:7,
          name:'威海校区'
        },
      ], [
        {
          id: 0,
          name: '欣园'
        },
        {
          id: 1,
          name: '悦园'
        }
      ]
    ],
    multiIndex: [0, 0],
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['欣园','悦园'];
            break;
          case 1:
            data.multiArray[1] = ['齐园'];
            break;
          case 2:
            data.multiArray[1] = ['3号餐厅','七号餐厅','民族食堂']
            break;
          case 4:
            data.multiArray[1] = ['一餐厅','二餐厅']
            break;
          case 5:
            data.multiArray[1] = ['一餐厅','二餐厅'];
            break;
          case 6:
            data.multiArray[1] = ['晨园','曦园']
            break;
          case 7:
            data.multiArray[1] = ['荟园', '馨园', '泰园', '雀园'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    this.setData(data);
  },

  rank:function () {
    if(this.data.msg!="停止"){
      this.setData({
        showDisk:false,
        choice:"吃什么？",
        isClick:1,
        msg: "停止"
      })
      
      // if(!tervaid)tervaid = setInterval(()=>{},100)
  }
  else {
    this.setData({disk : parseInt(Math.random()*this.data.length*10)%this.data.length})
    // clearInterval(tervaid)
    tervaid=0
    this.setData({
      showDisk:true,
      choice:"吃这个！",
      isClick:2,
      msg: "不行，换一个"
    })
  }
  }, 
  // changeRestaurant:function () {
  //   // console.log(1111)
  //   // this.setData({
  //   //   showChangeCampus:true,
  //   //   customstyle:"max-width:80%;height: 55%;margin-left:10%;margin-top:35%;"
  //   // })
  // },
  // resetpage:function (params) {
  //   // this.setData({
  //   //   customstyle:"",
  //   //   showChangeCampus:false,
  //   // })
  // },
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // this.setData({
    //   hhh:'2222'
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      isClick:0
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      isClick:0,
      msg:"其它"
    })
    let nowTime = new Date()
    nowTime = nowTime.getHours()
    if(nowTime>=6&&nowTime<9){
      this.setData({
        now : "早餐"
      })
    }
    else if(nowTime>=9&&nowTime<14){
      this.setData({
        now : "中午"
      })
    }
    else if(nowTime>=14&&nowTime<21){
      this.setData({
        now : "晚饭"
      })
    }
    else {
      this.setData({
        now : "明早"
      })
    }
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
