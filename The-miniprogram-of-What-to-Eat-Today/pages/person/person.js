// pages/person/person.js

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0' //默认头像

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    show:false,
    nickname:"",
    signnature:"",
  },
  onChooseAvatar(e) {  //保存头像
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    wx.setStorageSync('avatar', avatarUrl)
  },
  close:function(){  //关闭设置头像、昵称和个性签名的弹窗，并保存
    this.setData({
      show:!this.data.show
    })
    wx.setStorageSync('nickname', this.data.nickname)
    wx.setStorageSync('signnature', this.data.signnature)
  },
  resetavatar:function(){  //重新设置头像、昵称和个性签名
    this.setData({
      show:true
    })
  },
  about:function (params) {  //关于
    wx.navigateTo({
    url: "../about/about",
    })
  },
  mylikes:function (params) { //跳转到我赞过的
    wx.navigateTo({
      url: '../mylikes/mylikes',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {  //检查是否设置过头像和昵称，没有就弹出设置窗口，仅检查一次
    this.setData({ 
      avatarUrl:wx.getStorageSync('avatar'),
      nickname :wx.getStorageSync('nickname'),
      signnature:wx.getStorageSync('signnature')
    })
    if(this.data.avatarUrl=="")this.setData({avatarUrl:defaultAvatarUrl})
    if(this.data.avatarUrl==defaultAvatarUrl||this.data.nickname==undefined)this.setData({show:true})
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
