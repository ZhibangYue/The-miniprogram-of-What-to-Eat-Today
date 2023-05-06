// index.js
// 获取应用实例
const app = getApp()
const baseurl = app.data.baseUrl
// 餐厅-楼层，设为常量
const floor_dict = {"floor01": ["一楼","二楼","三楼"],
"floor02":["一楼","二楼"],
"floor11":["负一楼","一楼","二楼","三楼","四楼"],
"floor21": ["一楼","二楼","三楼"],
"floor22": ["一楼","二楼","三楼"],
"floor23": ["一楼","二楼","三楼"],
"floor31": ["一楼","二楼","三楼"],
"floor41": ["一楼","二楼","三楼"],
"floor42": ["一楼","二楼","三楼"],
"floor51": ["一楼","二楼","三楼"],
"floor52": ["一楼","二楼","三楼"],
"floor61": ["一楼","二楼","三楼"],
"floor62": ["一楼","二楼","三楼"],
"floor71": ["一楼","二楼","三楼"],
"floor72": ["一楼","二楼","三楼"],
"floor73": ["一楼","二楼","三楼"],
"floor74": ["一楼","二楼","三楼"],
}
Page({
  data: {
    msg: 1,
    lb: 1,
    n: 0,
    // 页数    
    page:1,
    // 每页条数
    pageSize:10,
    loadingData:false,
    // 食堂左栏
    canteen:"01",
    // 楼层顶栏
    floor:["一楼","二楼","三楼"],
    // 滑动需要
    currentTab:0,
    // 菜品信息
    dishes:[],
    id:[]
  },

  onLoad() {
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight * 0.9
    })
  },
  // 事件处理函数
  select_canteen(e) {
    let that =this;
    wx.showLoading({
      title: '数据加载中',
      mask: 'true',

    })
    let floor_now = "floor"+e.target.id
    this.setData({
      floor: floor_dict[floor_now],
      canteen: e.target.id,
      page: 1, 
    })
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": '01',
        "canteen_id": that.data.canteen,
        "page":that.data.page,
        "num":that.data.pageSize,
      },
      header:{
        Authorization:"Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        console.log(res.data.data.dishes_information)
        that.setData({
          dishes: res.data.data.dishes_information
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete:() => {
        wx.hideLoading()
      }
    })
  }, 
    high(e) {
    console.log(e)
    var a = this.data.msg;
    a==1?a++:a--;
    this.setData({
      msg: a,
    });
  }, 
  // 切换楼层
  select_floor(e){
    var that = this
    wx.showLoading({
      title: '数据加载中',
      mask: 'true'
    })
    // 根据切换的楼层，更改滑动区域标号
    this.setData({
      currentTab:e.target.dataset.current,
      page: 1, 
    })
    let level = e.target.dataset.current+1
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": '0'+level,
        "canteen_id": that.data.canteen,
        "page":that.data.page,
        "num":that.data.pageSize,
      },
      header:{
        Authorization:"Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        // 如果没有数据
        if(res.statusCode==404){
          wx.showToast({
            title: '无数据',
            icon: "error"
          })
          that.setData({
            dishes: [],
          })
          return
        }
        that.setData({
          dishes: res.data.data.dishes_information
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete:() => {
        wx.hideLoading()
      }
    })
  },


  change_swiper(e){
    var that=this
    wx.showLoading({
      title: '数据加载中',
      mask: 'true'
    })
    that.setData({
      currentTab:e.detail.current
    })
    let level = e.detail.current+1
    console.log(level)    
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": '0'+level,
        "canteen_id": that.data.canteen,
        "page":that.data.page,
        "num":that.data.pageSize,
      },
      header:{
        Authorization:"Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        console.log(res)
        // 如果没有数据
        if(res.statusCode==404){
          wx.showToast({
            title: '无数据',
            icon: "error"
          })
          that.setData({
            dishes: [],
          })
          return
        }
        that.setData({
          dishes: res.data.data.dishes_information
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete:() => {
        wx.hideLoading()
      }
    })
  },
  // 对对应菜品点赞
  like(e) {
    // 先尝试从缓存中读取token，判断用户身份
    let token = wx.getStorageInfo("token")
    // 如果有，则对点赞接口发送点赞请求
    if (token) {
      if(typeof(e.currentTarget.dataset.dishId)=='string'){
        console.log(e.currentTarget.dataset.dishId)
      }
      wx.request({
        url: app.data.baseUrl + "/likes?dish_id="+ e.currentTarget.dataset.dishId,
        method: "PUT",
        data: {

        },
        header: {
          Authorization: "Bearer " + app.globalData.token
        },
        success:function(a){
          200 === a.statusCode ?
           wx.showToast({
            title: "成功！"
        }) : wx.showToast({
            title: "失败。",
            icon: "error"
        });
        
        },
        fail:(err)=>{
          console.log(err)
        }
      })
    } else {
      // 如果没有token，先微信登录，请求token
      wx.login({
        success: (res) => {
          if (res.code) {
            console.log(res.code)
            console.log({
              "student_number": that.data.username,
              "name": that.data.nickName,
              "phone": "Unknown",
              "energy": 0,
              "id": res.code
            })
            wx.request({
              url: app.data.baseUrl + '/signup',
              method: 'POST',
              data: {
                "student_number": that.data.username,
                "name": that.data.nickName,
                "phone": "Unknown",
                "energy": 0,
                "id": res.code
              },
              success: (e) => {

                if (e.statusCode) {
                  console.log('signup', e)
                  app.globalData.token = e.data.data.access_token
                  wx.setStorageSync('token', e.data.data.access_token)
                  wx.reLaunch({
                    url: "/pages/main/main"
                  })
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
        },
        fail: (err) => {
          console.log(err)
          that.setData({
            error: "网络故障，请联系工作人员:\n" + err.errno
          })
        }
      })
    }
  },
  scrollToLower: function(e) {
    var that=this;
    console.info('scrollToLower', e);
    
    if (this.data.loadingData) {
      return;
    }
    this.setData({
      loadingData: true
    });
    // 加载数据,模拟耗时操作
    wx.showLoading({
      title: '数据加载中...',
    });
    setTimeout(function() {
      wx.request({
        url: 'https://www.baidu.com',
        success:function(){
          that.setData({
            hidden: true,
            loadingData: false
          });
          wx.hideLoading();
        },
        fail:function(res){
          console.log(res)
        }
      })

        
     
      
      console.info('上拉数据加载完成.');
    }, 2000);
  },
  scrollToUpper: function(e) {
    wx.showToast({
      title: '触顶了...',
    })
  },
  scrollToLower: function(e) {
    wx.showLoading({
      title: '数据加载中',
      mask: 'true'
    })
    let that =this;
    that.setData({
      page: that.data.page +1, 
    }) 
    let level = that.data.currentTab +1
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": '0'+level,
        "canteen_id": that.data.canteen,
        "page":that.data.page,
        "num":that.data.pageSize,
      },
      header:{
        Authorization:"Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        console.log(res.data.data.dishes_information)
        console.log(level)
        let dishes = that.data.dishes
        dishes=dishes.concat(res.data.data.dishes_information)
        that.setData({
          dishes:dishes
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete:() => {
        wx.hideLoading()
      }
    })
  }, 
  }
)