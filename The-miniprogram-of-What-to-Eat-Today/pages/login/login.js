var app = getApp();

Page({
    data: {
        username: "",
        nickName: "",
        disabled: !0,
        error: "",
        open: !1
    },

    changeOpen: function() {
        this.setData({
            open: !this.data.open
        });
    },
    inputNickname: function(a) {
        this.setData({
            nickName: a.detail.value
        }), "" !== this.data.username && "" !== this.data.nickName ? this.setData({
            disabled: !1
        }) : this.setData({
            disabled: !0
        });
    },
    inputUsername: function(a) {
        this.setData({
            username: a.detail.value
        }), "" !== this.data.username && "" !== this.data.password ? this.setData({
            disabled: !1
        }) : this.setData({
            disabled: !0
        });
    },
    clearError: function() {
        this.setData({
            error: ""
        });
    },
    login: function() {
        var that = this;
        if(
          !this.data.username || 
          !this.data.nickName ||
          !this.data.username.match(/[0-9]{8,13}/) || 
          this.data.nickName.match(/^\s*$/))
        {
          this.setData({
            error: '你确定你的学(工)号或昵称长这样嘛?'
          })
          return;
        }
        wx.login({
          success: (res) => {
            if(res.code)
            {
              console.log(res.code)
              console.log({
                "student_number": that.data.username,
                "name": that.data.nickName,
                "phone": "Unknown",
                "energy": 0,
                "id": res.code
              })
              wx.request({
                url: app.data.baseUrl + '/frontpage/signup',
                method: 'POST',
                data:{
                  "student_number": that.data.username,
                  "name": that.data.nickName,
                  "phone": "Unknown",
                  "energy": 0,
                  "id": res.code
                },
                success:(e)=>{
                  
                  if(e.statusCode)
                  {
                    console.log('signup', e)
                    app.globalData.token = e.data.data.access_token
                    wx.setStorageSync('token', e.data.data.access_token)
                    wx.reLaunch({
                      url: "/pages/index/index"
                    })
                  }
                },
                fail:(err)=>{
                  console.log(err)
                  that.setData({
                    error: "网络故障，请联系工作人员:\n" + err.errno
                  })
                }
              })
            }
          },
          fail: (err)=>{
            console.log(err)
            that.setData({
              error: "网络故障，请联系工作人员:\n" +  err.errno
            })
          }
        })
       
    },
    
    onLoad: function() {
        // var token = wx.getStorageSync("token");
        var token = null // 暂时先不使用缓存
        if(token)
        {
          app.globalData.token = token;
          wx.reLaunch({
            url: "/pages/index/index"
        });
        }
        else{
          wx.login({
            success: (res) => {
              if(res.code){
                wx.request({
                  url: app.data.baseUrl + '/frontpage/get_token',
                  data: {
                    code: res.code
                  },
                  success: (e)=>{                    
                    if(e.statusCode == 200)
                    {
                      app.globalData.token = e.data.data.access_token
                      console.log(e.data.data.access_token)
                      wx.setStorageSync('token', app.globalData.token)
                      wx.reLaunch({
                        url: "/pages/index/index"
                      })
                    }
                    
                  }
                })
              }
            },
          })
        }
        
    }
});