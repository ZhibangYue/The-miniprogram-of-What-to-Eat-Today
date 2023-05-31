
const app=getApp()
Page({
  data: {
    dishlist:[],
    screenHeight:0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that=this
    this.setData({
      screenHeight:wx.getWindowInfo().windowHeight
    })
    wx.request({
      url: app.data.baseUrl+"/records",
      header:{
        Authorization:"Bearer "+app.globalData.token
      },
      success: (e)=>{                    
        if(e.statusCode == 200)
        {
          console.log(111,e.data.data.records_information)
          that.setData({
            dishlist:e.data.data.records_information,
          })
          if(this.data.dishlist.length==0){
            wx.showToast({
              title: '什么都没赞过呢',
              icon: "error"
            })
          }
          let len=e.data.data.records_information.length
          for(let i=0;i<len;i++){
            var ab="dishlist["+i+"]"+".st"
            that.setData({
              [ab] : 1
            })
          }
          for(let i=0;i<len/2;i++){
            let temp1=that.data.dishlist[i],k=len-i-1
            let temp2=that.data.dishlist[k]
            let a1 = "dishlist["+i+"]"
            let a2 = "dishlist["+k+"]"
            that.setData({
              [a1]:temp2,
              [a2]:temp1
            })
          }
        }
        
      }
    })
  },
  like(e) {
    let that = this
    // wx.showLoading({
    //   title: '请稍等...',
    // })
    let index = e.currentTarget.dataset.id
    let status = that.data.dishlist[index].st
    wx.request({
      url: app.data.baseUrl + "/likes?dish_id=" + that.data.dishlist[index].dish_id,
      method: "PUT",
      header: {
        Authorization: "Bearer " + app.globalData.token
      },
      success: function (a) {
        if (200 === a.statusCode){ 
          that.setData({
              ['dishlist[' + index + '].st']: !status,
          })
          wx.hideLoading()
          if (!status) {
            wx.showToast({
              title: "点赞成功！"
            })
          }
          else{
            wx.showToast({
              title: "已取消点赞"
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
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
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
