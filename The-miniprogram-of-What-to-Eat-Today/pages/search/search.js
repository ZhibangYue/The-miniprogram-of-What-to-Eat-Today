// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    msg: 1,
    n: 0,
    loadingData: false,
    goods: '',
    dishes: [],
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
    a == 1 ? a++ : a--;
    this.setData({
      msg: a,
    });
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
    // 先，判断用户身份
    let token = app.globalData.token
    // 如果有，则对点赞接口发送点赞请求
    if (token) {
      wx.request({
        url: app.data.baseUrl + "/likes?dish_id=" + e.currentTarget.dataset.dishId,
        method: "PUT",
        header: {
          Authorization: "Bearer " + app.globalData.token
        },
        success: function (a) {
          if (200 === a.statusCode) {
            if (status) {
              that.setData({
                ['dishes[' + index + '].like.like_num']: num - 1,
                ['dishes[' + index + '].like.like']: !status,
              })
            } else {
              that.setData({
                ['dishes[' + index + '].like.like_num']: num + 1,
                ['dishes[' + index + '].like.like']: !status,
              })
            }
            wx.hideLoading()
            wx.showToast({
              title: "成功！"
            })
          } else {
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
  inputChange(e) {
    let that = this;
    const goods = e.currentTarget.dataset.goods;
    this.setData({
      [goods]: e.detail.value
    });
    wx.request({
      url: app.data.baseUrl + "/search",
      data: {
        word: e.detail.value,
      },
      header: {
        'content-type': 'application/json',
        Authorization: "Bearer " + app.globalData.token
      },
      method: 'GET',
      dataType: 'JSON',
      responseType: 'text',
      success(res) {
        if (404 === res.statusCode) {
          wx.showToast({
            title: '没找到',
            icon: 'error',
            duration: 2000,
          })
          that.setData({
            dishes: []
          })
          return
        }
        console.log(JSON.parse(res.data).data);
        that.setData({
          dishes: JSON.parse(res.data).data.dishes_information
        })
      },
      fail() {
        console.log('fail')
      },
      complete() {
        console.log('complete')
      }

    })
  },
  scrollToLower(e) {
    wx.showToast({
      title: '没有了',
      icon: "error",
    })
  },
  scrollToUpper() {
    wx.showToast({
      title: '到顶了',
    })
  }
})