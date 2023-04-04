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
    customstyle:""
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
  changeRestaurant:function () {
    console.log(1111)
    this.setData({
      showChangeCampus:true,
      customstyle:"max-width:80%;height: 55%;margin-left:10%;margin-top:35%;"
    })
  },
  resetpage:function (params) {
    this.setData({
      customstyle:"",
      showChangeCampus:false,
    })
  },
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
