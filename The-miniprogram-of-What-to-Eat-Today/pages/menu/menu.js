// index.js
// 获取应用实例
const app = getApp()
const baseurl = app.data.baseUrl
// 餐厅-楼层，设为常量
const floor_dict = {
  "floor01": ["一楼", "二楼", "三楼"],
  "floor02": ["一楼", "二楼"],
  "floor11": ["一楼", "二楼", "三楼", "四楼","负一楼"],
  "floor21": ["一楼", "二楼", "三楼"],
  "floor22": ["一楼", "二楼", "三楼"],
  "floor23": ["一楼", "二楼", "三楼"],
  "floor31": ["一楼", "二楼", "三楼"],
  "floor41": ["一楼", "二楼", "三楼"],
  "floor42": ["一楼", "二楼", "三楼"],
  "floor51": ["一楼", "二楼", "三楼"],
  "floor52": ["一楼", "二楼", "三楼"],
  "floor61": ["一楼", "二楼", "三楼"],
  "floor62": ["一楼", "二楼", "三楼"],
  "floor71": ["一楼", "二楼", "三楼"],
  "floor72": ["一楼", "二楼", "三楼"],
  "floor73": ["一楼", "二楼", "三楼"],
  "floor74": ["一楼", "二楼", "三楼"],
}
Page({
  data: {
    msg: 1,
    lb: 1,
    n: 0,
    // 页数    
    page: 1,
    // 每页条数
    pageSize: 10,
    loadingData: false,
    // 食堂左栏
    canteen: "01",
    // 楼层顶栏
    floor: ["一楼", "二楼", "三楼"],
    // 滑动需要
    currentTab: 0,
    // 菜品信息
    dishes: [],
    id: [],
    length: 10,
  },

  onLoad() {
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight * 0.9
    })
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": '01',
        "canteen_id": '01',
        "page": 1,
        "num": 10,
      },
      header: {
        Authorization: "Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        // 如果没有数据
        if (res.statusCode == 404) {
          wx.showToast({
            title: '敬情期待',
            icon: "error"
          })
          this.setData({
            dishes: [],
          })
          return
        }
        console.log(res.data.data.dishes_information)
        this.setData({
          dishes: res.data.data.dishes_information,
          length: res.data.data.dishes_information.length,
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },
  // 事件处理函数
  select_canteen(e) {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: 'true',
    })
    let floor_now = "floor" + e.target.id
    this.setData({
      floor: floor_dict[floor_now],
      canteen: e.target.id,
      page: 1,
      currentTab: 0,
    })
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": '01',
        "canteen_id": that.data.canteen,
        "page": that.data.page,
        "num": that.data.pageSize,
      },
      header: {
        Authorization: "Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        // 如果没有数据
        if (res.statusCode == 404) {
          wx.showToast({
            title: '敬请期待',
            icon: "error"
          })
          that.setData({
            dishes: [],
          })
          return
        }
        that.setData({
          dishes: res.data.data.dishes_information,
          length: res.data.data.dishes_information.length,
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },
  high(e) {
    console.log(e)
    var a = this.data.msg;
    a == 1 ? a++ : a--;
    this.setData({
      msg: a,
    });
  },
  // 切换楼层
  select_floor(e) {
    var that = this
    wx.showLoading({
      title: '数据加载中',
      mask: 'true'
    })
    // 根据切换的楼层，更改滑动区域标号
    this.setData({
      currentTab: e.target.dataset.current,
      page: 1,
    })
    let level = e.target.dataset.current + 1
    let levelp = '0' + level
    if(levelp == '05'){levelp = '11'}
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": levelp,
        "canteen_id": that.data.canteen,
        "page": that.data.page,
        "num": that.data.pageSize,
      },
      header: {
        Authorization: "Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        // 如果没有数据
        if (res.statusCode == 404) {
          wx.showToast({
            title: '敬请期待',
            icon: "error"
          })
          that.setData({
            dishes: [],
          })
          return
        }
        that.setData({
          dishes: res.data.data.dishes_information,
          length: res.data.data.dishes_information.length,
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },


  change_swiper(e) {
    var that = this
    wx.showLoading({
      title: '数据加载中',
      mask: 'true'
    })
    that.setData({
      currentTab: e.detail.current
    })
    let level = e.detail.current + 1
    let levelp = '0' + level
    if(levelp == '05'){levelp = '11'}
    console.log(levelp)
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level": levelp,
        "canteen_id": that.data.canteen,
        "page": that.data.page,
        "num": that.data.pageSize,
      },
      header: {
        Authorization: "Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        console.log(res)
        // 如果没有数据
        if (res.statusCode == 404) {
          wx.showToast({
            title: '敬请期待',
            icon: "error"
          })
          that.setData({
            dishes: [],
          })
          return
        }
        that.setData({
          dishes: res.data.data.dishes_information,
          length: res.data.data.dishes_information.length,
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },
  // 对对应菜品点赞
  like(e) {
    let that = this
    wx.showLoading({
      title: '请稍等...',
    })
    let index = e.currentTarget.dataset.current
    let num = that.data.dishes[index].like.like_num
    let status = that.data.dishes[index].like.like
    // 先尝试从缓存中读取token，判断用户身份
    let token = wx.getStorageInfo("token")
    // 如果有，则对点赞接口发送点赞请求
    if (token) {
      wx.request({
        url: app.data.baseUrl + "/likes?dish_id=" + e.currentTarget.dataset.dishId,
        method: "PUT",
        header: {
          Authorization: "Bearer " + app.globalData.token
        },
        success: function (a) {
         if (200 === a.statusCode){ 
            if (status) {
              that.setData({
                ['dishes[' + index + '].like.like_num']: num - 1,
                ['dishes[' + index + '].like.like']: !status,
              })
            }
            else{
              that.setData({
                ['dishes[' + index + '].like.like_num']: num + 1,
                ['dishes[' + index + '].like.like']: !status,
              })
            }
            wx.hideLoading()
            if(status == 1){
              wx.showToast({
              title: "取消点赞成功！"
            }) 
            }else{
              wx.showToast({
                title: "点赞成功！"
              }) 
            }

          }else{
            wx.hideLoading()
            wx.showToast({
              title: "失败",
              icon: "error"
            });
          }
        },
        fail: (err) => {
          wx.hideLoading()
          console.log(err)
          wx.showToast({
            title: "错误",
            icon: "error"
          });
        }
      })
    }
  },
  scrollToLower: function (e) {
    var that = this;
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

  },
  scrollToUpper: function (e) {
    wx.showToast({
      title: '触顶了...',
    })
  },
  scrollToLower: function (e) {
    wx.showLoading({
      title: '数据加载中',
      mask: 'true'
    })
    let that = this;

    let level = that.data.currentTab + 1
    let levelp = '0'+level
    if(levelp=='05'){levelp='11'}
    console.log(level)
    wx.request({
      url: baseurl + '/dishes',
      data: {
        "level":  levelp,
        "canteen_id": that.data.canteen,
        "page": that.data.page + 1,
        "num": that.data.pageSize,
      },
      header: {
        Authorization: "Bearer " + app.globalData.token
      },
      method: "GET",
      success: (res) => {
        console.log(res.data.data.dishes_information)
        console.log(level)
        let length =res.data.data.dishes_information.length
        let dishes = that.data.dishes
        dishes = dishes.concat(res.data.data.dishes_information)
        that.setData({
          dishes: dishes,
          length :length,
        })
        that.setData({
          page: that.data.page + 1,
        })
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },
})