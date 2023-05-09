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
    speed:20,
    autoplay:false,
    isget:false,
    scrollHeight:0,
    a:[{name:"面条",  //测试数据
        position:{
          level:0,
          window_num:0,
        },
        price:0,
      },
      { name:"鸡蛋",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"油条",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"白菜肉饼",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"豆浆",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"飞机",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"望路羊",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"疯狂星期四",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"羊肉汤",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"煎饼果子",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"重庆小面",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"盖浇饭",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"肉夹馍",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"炸酱面",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
      },
      { name:"馄饨",
      position:{
        level:0,
        window_num:0,
      },
        price:0,
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

//-------监听和改变滚动选择器，并请求相应菜名---------
  bindMultiPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
      isget:false
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
            data.multiArray[1] = ['三号餐厅','七号餐厅','民族食堂']
            break;
          case 3:
            data.multiArray[1] = ['杏园']
            break;
          case 4:
            data.multiArray[1] = ['一号餐厅','二号餐厅']
            break;
          case 5:
            data.multiArray[1] = ['西苑','舜园'];
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



  change:function (params) {  //当所选校区和餐厅改变，重置选菜器
    this.setData({
      isClick:0,
      autoplay:false,
      msg:"不行，换一个"
    })
  },

  close:function () {  //关闭菜品详情弹窗
    this.setData({
      showDisk:false,
      autoplay:false
    })
  },

  getcurrent:function (e) {  //获得当前显示的菜品的下标
    //console.log(e.detail.current)
    this.setData({
      disk:e.detail.current
    })
  },

  rank:function () {    //随机选菜器
    if(this.data.msg!="停止"){
        if(!this.data.isget) wx.showLoading({
          title: '菜品加载中...',
        }),wx.request({
          url: app.data.baseUrl+"/draw_dishes",
          data:{
            canteen_id:this.data.multiIndex[0]+''+(this.data.multiIndex[1]+1),
            timex:this.data.now[0],
          },
          
          success: (e)=>{               
            if(e.statusCode == 200)
            { wx.hideLoading()
              console.log(e.data.data.dishes_information)
              this.setData({
                disk:0,
                isget:true,
                a:e.data.data.dishes_information,
                length:e.data.data.dishes_information.length
              })
              this.setData({
                speed:20,
                autoplay:true,
                showDisk:false,
                choice:"吃什么？",
                isClick:1,
                msg: "停止",
                isget:true
                })
            }
          }
        })
        else this.setData({
              speed:20,
              autoplay:true,
              showDisk:false,
              choice:"吃什么？",
              isClick:1,
              msg: "停止",
              isget:true
              })
  }
  else {     
    let v=0;
    if(!tervaid)tervaid = setInterval(()=>{
      v=this.data.speed*1.15;
      this.setData({
        speed:v
      })
      if(this.data.speed>=200+parseInt(Math.random()*this.data.a.length*10)%this.data.a.length){
        this.setData({
          showDisk:true,
          autoplay:false,
          choice:"吃这个！",
          isClick:2,
          msg: "不行，换一个"
        })
        console.log(this.data.disk)
        clearInterval(tervaid)
        tervaid=0;
      }
    },120)
    
  }
  }, 
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  //加载时请求默认校区餐厅菜单
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    let that=this
    this.setData({
      scrollHeight: scrollHeight * 0.9
    })
    wx.request({
      url: app.data.baseUrl+"/draw_dishes",
      data:{
        canteen_id:this.data.multiIndex[0]+''+(this.data.multiIndex[1]+1),
        timex:this.data.now[0],
      },
      success: (e)=>{                    
        if(e.statusCode == 200)
        {
          console.log(e.data.data.dishes_information)
          this.setData({
            disk:0,
            a:e.data.data.dishes_information,
            length:e.data.data.dishes_information.length
          })
        }
        
      }
    })
    let token=wx.getStorageSync('token')
    if(token)app.globalData.token=token;
    else wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code)
          try{
            let e=1
            wx.request({
              url: app.data.baseUrl + '/signup',
              method: 'POST',
              data: {
                "code":res.code,
                "username": "__default",
                "personal_signature":"__default",
              },
              success: (e) => {
                if (e.statusCode==200) {
                  e=0
                  console.log('signup', e)
                  app.globalData.token = e.data.data.access_token
                  wx.setStorageSync('token', e.data.data.access_token)
                }
                
              },
              fail: (err) => {
                console.log(err)
                that.setData({
                  error: "网络故障，请联系工作人员:\n" + err.errno
                })
              }
            })
            throw err
          }
          catch(err){
            console.log("---------------------------",res.code)
            wx.request({
              url: app.data.baseUrl+'/get-token?code='+res.code,
              module:'GET',
              success(e){
                if (e.statusCode==200) {
                  console.log('signature', e.data.data.user_information.user_personal_signature)
                  app.globalData.token = e.data.data.access_token
                  wx.setStorageSync('token', e.data.data.access_token)
                  if(e.data.data.user_information.user_name!="__default")wx.setStorageSync('nickname', e.data.data.user_information.user_name)
                  if(e.data.data.user_personal_signature!="__default")wx.setStorageSync('personal_signature', e.data.data.user_information.user_personal_signature)
                }
              },
              fail: (err) => {
                console.log(err)
                that.setData({
                  error: "网络故障，请联系工作人员:\n" + err.errno
                })
              }
            })
          }
        }
      },
      fail: (err) => {
        console.log(err)
        that.setData({
          error: "网络故障，请联系工作人员:\n" + err.errno
        })
      }
    })
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
  onShow: function () {  //重置菜品选择器和获取当前时间
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
