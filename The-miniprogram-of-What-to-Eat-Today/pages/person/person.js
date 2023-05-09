// pages/person/person.js
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0' //默认头像

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    show: false,
    nickname: "",
    signature: "",
    disabled: !0,
    error: "",
    open: !1
  },
  onChooseAvatar(e) { //保存头像
    const {
      avatarUrl
    } = e.detail
    this.setData({
      avatarUrl,
    })
    wx.setStorageSync('avatar', avatarUrl)
  },
  close: function () { //关闭设置头像、昵称和个性签名的弹窗，并保存
    if(!app.globalData.access_token)this.login() //如果没有token就重新注册
    else this.changeUserInformation()
    this.setData({
      show: !this.data.show
    })
    wx.setStorageSync('nickname', this.data.nickname)
    wx.setStorageSync('personal_signature', this.data.signature)
  },
  resetavatar: function () { //重新设置头像、昵称和个性签名
    this.setData({
      show: true
    })
  },
  about: function (params) { //关于
    wx.navigateTo({
      url: "../about/about",
    })
  },
  mylikes: function (params) { //跳转到我赞过的
    wx.navigateTo({
      url: '../mylikes/mylikes',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { //检查是否设置过头像和昵称，没有就弹出设置窗口，仅检查一次
    this.setData({
      avatarUrl: wx.getStorageSync('avatar'),
      nickname: wx.getStorageSync('nickname'),
      signature: wx.getStorageSync('personal_signature')
    })
    if (this.data.avatarUrl == "") this.setData({
      avatarUrl: defaultAvatarUrl
    })
    if (this.data.nickname == undefined) this.setData({
      show: true
    })
  },

  changeOpen: function () {
    this.setData({
      open: !this.data.open
    });
  },
  inputNickname: function (a) {
    this.setData({
      nickName: a.detail.value
    }), "" !== this.data.username && "" !== this.data.nickName ? this.setData({
      disabled: !1
    }) : this.setData({
      disabled: !0
    });
  },
  inputUsername: function (a) {
    this.setData({
      username: a.detail.value
    }), "" !== this.data.username && "" !== this.data.password ? this.setData({
      disabled: !1
    }) : this.setData({
      disabled: !0
    });
  },
  clearError: function () {
    this.setData({
      error: ""
    });
  },
  login: function () {
    
    var that = this;
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code,app.globalData.token)
          wx.request({
            url: app.data.baseUrl + '/user?user_name='+that.data.nickname+"&&personal_signature="+that.data.signature,
            method: 'PUT',
            header:{
              Authorization:"Bearer "+app.globalData.token
            },
            success: (e) => {
              if (e.statusCode) {
                console.log('changeinformation', e)
                // app.globalData.token = e.data.data.access_token
                // wx.setStorageSync('token', e.data.data.access_token)
                // wx.reLaunch({
                //   url: "/pages/index/index"
                // })
              }
            },
            fail: (err) => {
              console.log("err",err)
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

  },
  onLoad: function () {
    let token = wx.getStorageSync("token");
    //var token = null 
    let that=this
    if (token){
      app.globalData.token = token;
      that.setData({
        avatarUrl: wx.getStorageSync('avatar'),
        nickname: wx.getStorageSync('nickname'),
        signature: wx.getStorageSync('personal_signature')
      })
      console.log(that.data.nickname,that.data.signature)
      if (this.data.avatarUrl == "") this.setData({
        avatarUrl: defaultAvatarUrl
      })
      if (this.data.nickname == undefined) this.setData({
        show: true
      })
    }
    else {
      wx.login({
        success: (res) => {
          if (res.code) {
            wx.request({
              url: app.data.baseUrl + '/get-token',
              data: {
                code: res.code
              },
              success: (e) => {
                if (e.statusCode == 200) {
                  app.globalData.token = e.data.data.access_token
                  console.log("success",se.data.data.access_token)
                  wx.setStorageSync('token', app.globalData.token)
                }
              }
            })
          }
        },
      })
    }

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
