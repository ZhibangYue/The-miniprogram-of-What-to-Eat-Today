// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    msg: 1,
    n: 0,
    loadingData:false,
    currentTab:0,
    goods:'',
  },
  onLoad() {
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight * 0.9
    })
  },
  // 事件处理函数
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
    // 根据切换的楼层，更改滑动区域标号
    this.setData({
      currentTab:e.target.dataset.current
    })
  },
  change_swiper(e){
    this.setData({
      currentTab:e.detail.current
    })
  },
  // 对对应菜品点赞
  like() {
    // 先尝试从缓存中读取token，判断用户身份
    let token = wx.getStorageInfo("token")
    // 如果有，则对点赞接口发送点赞请求
    if (token) {
      wx.request({
        url: app.data.baseUrl + "/likes",
        method: "PUT",
        data: {
          "dish_id": 1,
        },
        header: {
          Authorization: "Bearer " + token
        },
        success:function(a){
          200 === a.statusCode ?
           wx.showToast({
            title: "改名成功！"
        }) : wx.showToast({
            title: "改名失败。",
            icon: "error"
        });
        
        },
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
  inputChange(e) {
    const goods = e.currentTarget.dataset.goods;
    this.setData({
        [goods]: e.detail.value
    });
    wx.request({
      url: 'https://域名ID/index.php',
      data:{
        name:e.detail.value,
      },
      header:{  
         'content-type':'application/json'
      },
      method:'GET',  
      dataType:'JSON',  
      responseType:'text', 
      success(res){
          console.log(res);
      },
      fail(){  
          console.log('fail')
      },
      complete(){   
           console.log('complete')   
      }
 
    })
},
})