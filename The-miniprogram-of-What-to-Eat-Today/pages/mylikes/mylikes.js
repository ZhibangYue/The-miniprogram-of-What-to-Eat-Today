
const app=getApp()
let baseimg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADDCAYAAAAoXTVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAABUASURBVHhe7Z0NrCZXWcfvXSgFpVortCktUdqKla+KUYKmVKXFxo1I1kgRNCZFPoKN6bZdW0hRFkNdCrVso7WaSDCGiKCxH5A1pQsJ2KjlSxooEKBdGxf6YSmrK/Zj6a49Z+b/Mve553mf55w5M++89/5/yebM3ve9Z86cmfn/5szXXb3k0GNHVgghKlvakhCiwJ2EEAPuJIQYcCchxIA7CSEG3EkIMeBOQogBdxJCDLiTEGLAnYQQA+4khBhwJyHEgDsJIQbcSchoXPXELfHfssGdhBCDST5PgrTZ8d3DsSTLjWaPZVm/k9pJlr0zyVq8h1ZTX7883CLEYBImGSNxFnEId9VDT4jljqc8FsvNyrIfIdAkhBhUMUmtlB4icRaRYjAI2Hd3U157ep5R+vRrrXVSk7HaVHs+6S2IEDKjt0lSSd13D66RBKl2paidatIiAZgEWEbR2j50Agdqp/CYDNVvvi2JkE1MsUk8ST2FNBorlVMG0dDGKFaf3neoKd+9unwpPyRDb4s0CSEGkxyTDAHa6W1b7vfBEGMSGsSHZpS+22O6VkLIjEldJ9ko1LpO8vtHmn7dLAapZfva22NTGyFEpYpJSJqNZNjDj+VZ0MOWJ/jPCC4SmoQQg9WLHn6UJikAKSgTNvwcBpHkGmWI9La4+uijYnnxI+0ptU1OWJ80CSEGNImgRpLeePOvxfLOX/1wLE+96eWxxP9L667Rtlqm2CzGoUkIcTCqSYZKn1DvVBINy9gFJgF9jaIxRrqnli9Qc55jLIcXmoQQB6OYZIz0WTRYxufdff7KF3/kfXFaUmtsIkn1b+2+1dYhwP1lVx7+3nxzjTDF7YQmIcTBoCax0geMmRS56WaB+oJBAsEiew59M05vPeoZsex+Fqh9tmsetftWzjNlkFys5agxD5C7/mkSQhwsxZgkd+9P0bcNEq2+YJFLv3l5nIY5NJOAIYzSp688XLalmWeNdAdyOWoapBSahBAHG+I6yTy0xJd42yTrgyXe9YwrYgmLBKRJwEO3P9BONcAkoK9RxuzfIRjCUqXQJIQ4GNUki6TW8S7qkQYBwSQwiMQ6ywWW3QQbCZqEEAebziQwCPCaRBpkZouDq02597ZY7PmVk2fXR86655ZYfvLEl8USaEYBta/Ip1im8UvNtubWFUyy4XcSdArIPczSdo7ZBcOP7I/ljG0vaif8oK7f+6c3xpKHX/WR2wGw+paHW4Q4cJukpvJqE9om26UlB/AaRZpEDtRxaJVFe4j24HNOi+W/3fWJWAIYBYxx+GVRY/0vahuytoWA1iaahBAHpkm0vXCINBgiaWT7Sw2CC4B/+st/GUvNIGEQju90LywGUMenL/hKLMHPXHt6O9UAcyxiQC8Zc/2DMbYDYM2DJiHEgWoSbc+TjJlqffDe6iANop2mfcoZT4vl7FRwS/geEl/WodWJ78uzXOCRu/67nWrYv/2TsRwjzS2WYf2HZUE7sVzedtMkhDiY1JhEkrvX90Eu58m7z2qn0hy77dRYrrPEcX+9svInPx6nV3Y2Y4+dO3euKaVRAMyybeuNscRL7qRxZhcwv/wDsbj4jLU3TNZkket/CtAkhDiY5HWShdrr0SfFEtcwXnDJibEEMAjOVK0bLxy4v5163EbHHt9OrQV1HLj+zlhijCHHPa849x/bqbVcfXszHgIwyZDraMz1PyVoEkIcuE0yBppBQOnt7Tm89bTntFMNx/3n12IpxyhIf/z86FN+MJZds0hjWEijLOK6CFkLTUKIg0mZBEijjGEQiWyDfE0QDAJbgGANaRDt/9q4BsBONYySO6aoMQapUceioUkIcVDVJLWTYxEvBLAMIsHnuE/ruCe9JpaBNz/tue1Ug7yXC8gXQ8As0iQgp3/l8oAx073WdrEIM9EkhDiY5JhkEWgGAdIk8vN3PnBHLB989G9jGYBVco0ixyglYxPNIGCMcV4ti9WqpwSahBAHNEkL0gr3VQE8iQiTSIOkgFVgEMtCQHv+BJSMTWQK1zII6tXaoKV/IPeZHo0xbEiTEOJgw5jESjYN/J5mEI15ZrGsg88xT+25efl5n7epYDnHvOYkTVA671r1lECTEOJgnUlKE3mRyKQJWO2Xv4PUxjgATx4ixeV4QT5d2H32Xd7Ni+SHWWAKeY+W/L9mN2mUqa8reb1L3h/3jq9/qZ2aj3bdrGSb9f4OTUKIg5lJUmkcmEJKaXu91uaAddwqfxcpjmsUuL9KPj0IcO/W/vbOXaR++D4+e92Bl8byH86/O5ayLlkHkHaCxaS9QE2jeBO2BM0g+DnuuJ7CNgdoEkIcrB55nHZ6Ln327iHTKdC1gmmQ9slDvOAa7+5Fqp/3po/F8qP3viGWWvqD1P1V8jvSFHhG/eT3viSWAObBs/BAG8uA7rwD8/pZWxfSrKDGOpMGATCJnPdQ20kJNAkhDgYdkwyZThL3e7X2/Hs71XDx1he2U2uRJsGYQ3sm5M5f/EgswxtMTv6XM+IkLAOQ+LOxyO/8cyx/4bzPxPLr514US2s8ZBJM1b6x5eK3fCGWGto6An2uSWgGkXjPbi0CmoQQB4NcJylNpxrz7suHrjs7lhhHyLNeAJaYvcnxvu+92eTUe9eOSYA0yWk3vyeW4IG/+LNY4nrI1odPiuVtn70nlq/5n9fHEvXs+O7hWOL9XOi3q3c9P5YByyRArrO+V7W9FukyRaMEkwx6W0rtjh8SHF5JcHi1bqdQTsd2wXfljYoS+T38/737dsUSYCcB2FlqhkrNB92ssASLDEULHm4R4mD1woPf6WWSLUfZaaGl0+FDZQmy+6nfF8vt//t/sazBHU/9aizvufuaWMoBe3x96eO8/1Xvj+Vv7fnNWGq3swRmg/o28eVtJtIw3d8NyDZoRnr5Sz/YTtl41lcNvBbpMkWj0CSEOOhtEg8yvUoNohHMUmoVWAkX7N5zVPOa0ltWfjKWSPE3v+mcWIJ3Xrc3ltIgIf2lMdZZqf0/wLimW0cAbbIe94WpappVIu2trVN8rw/WclhtmUfutvfEJz+ZJiHEYhSTSMLeGcCpSzBkEkpk4iHlrVvjgfx+F3lDItBMIn8uH9ayTAI8RpEpXAvUu7ra3HKTuttp3mcBnP08oRXDmNuDBk1CiINRTZJ7vDpEkqAN0gTykVngTfeuUaRJZJ3A+7k2NpEWwzIExk7h3HWbgiYhZElxmyTnWPYtR/tSBYlh0SdRZMLNjv/b6x74Yz1n3XpmLLX01owjbRDGCRgbWLe0SztpdA0R0Mwiz3YFxkrjlEmsMYgk1yQ/dP65sfz2+26O5RDQJIQ4qDomQZogESy8JgElqbj3WxfEUhrixaf8fCwBHh0F0gLyGsbLVj4fy7tu+oNYdkGSd+3SZXZbfXs7+57LPx7L/fuaDnnDs58eS4B6UmfSAqmHsaS1cvtOprSV2tIkwSK5BgGlJhnCLDQJIQ6qmCR1PNpFM0uuSYAnFbU2wQAXHWr+6Kd8PY82jrDGAeC6275/5Zeu+Lv2fw3r6vzcWmvhT1nL7wFpMSDHRSBlFK9JkMYHP/CJWB7z6sa4Vjpb20AKa7vwmgTkGATtteZBkxDioLdJShKkFvNSQGuXTGuZ0trnGA9Y5kmZBCD5L31XY5999x+I5dv+vnmMV9Yl7+6V4ytpEvRHWHZZV+4Y5cRjfjSWD/96M24CNYzS1yBo2z0H/yOWOWMRrX3aPGkSQhwUm2SRBgGpvV+2S6YtEhYprS5H+9ofXEeRZ78kH738N9qpFdUkSNCbtzdtkCaRaOnmScMPf/xVsZQGAVZaA6Q2QHpbzNs+0A9yTGq1SRpEMs8o3u1VtoEmIcTBhjHJrD2tAVZvuDeWF247JpYa2nI8+Mwfa6caYBKYCAmNlzFcv+cVsQxjEqAZ5W8u6GcSOTYB3e/jSUtwy8Hm1Ukw4x99+fZY5mKl+e6rfqqd6tCevZNjkROuOL2dati+43PtVEOpxeahrW+tr2kSQhz0Nkk3HUqve5SS2vuvuf5gO9WgmSQ3UcDuI40p8Kz78S9MH/MH7j3wnVj+9rXNd2AQAJPgGFrW/ZkPbYtlH2CUDz7zlbEEpSYBWsonTeIEJrFsVQOsf2t90ySEOMg2iUxg7Zx3YGizWCngwZso4KfPu76davCYREOaRNYtTQLT9B1XDAHS/7IjzTsCVnauHW/M48q3P9hONQxpkFxoEkIcFJtknkEky2CUUrbuem07tZ5ck1j84U80L+IGUzIJSI71pFXas11Xrjb3zz30tt+NpfyTE4tcr4AmIcTBKCYBfY2y7jx7W19J4uSORSxSRtFMAoMAr0ksSpapVj8kDQIUk0ikSfD/RRqFJiHEgdskMimmZJKAN220xJO/n5uwHpPAIM86/thY5o5JauLtBy+oL/lcu9MkAOv5uivWmuXAjkvbqfGgSQhxoJpESxowpkmseYV6rQTUlkfWveuRsiQd0yS5luviXa+5/TC3XqdJtPXcZ+zZF5qEEAfrTGIlzTw8iZ+DVR/IGZvI5StNTsk8k2gGAVMYkwxiELDkJtkQO0kgtyPxAr3SjULOZwqngEso7Qcgt5fkwP1Ta/8K8cqL1v79SVB7J/Fsy1adPNwixMHMJH0MApbJJLXxHG6BMU4Ba8arjWu7cZoEyPWeu277bMtyHjQJIQ5WHz92XDMmkX8bPIcpmATkJmjf5M0Zk4AhTTIWNY5AJLkmqdEGOU+M0WgSQhTCCQ2c1Fhnkj4s0iQg9/i1FjVMoiUilqVmatfqH9mm3D+3kMJrkpr9kZonfkaTEJIAO0jYWWYm6TMWAVbyj2mSUkoTto9JtFcKWWCdpXjrfWsfK37HCc1LKPqs3y5D2M1a3xgn1JwnmDdvmoQQg6pnt4DcK0vT3WuSVP01liOH7mtOgdckR557dizPOeecWEpuePHPxVJblnnLeuAbN7ZTDcee1LxET4LvaZ9rYB31Mbisw1rv716tt24929g4WxAhS8zqJYceiybx7pWpxMlN7VtvvbWdWsuZZzZ/3BNoezkSp/u4p5bCss5ctISVywyThFebvv2VL4nTuLKuIU0CtGXRkMuItgW0dSINI9GMIpe7j0k8KZ4CD2Ohn/qu48C8bc23VROyiXFfJ9GSx3MMq5lDoiWCfEGAJ2mtdLGSVEMub9cgAVgkhXarPJBGAX3NEoAB5FkviVw+zaSSUivMQx4xyH6oYRCNriFpEkIMVr+9/4ZoEi1BSvjivh9up8bHOhMk8S7nNduviuXPPvukWEr+9avfaKd0NJNYYxdwyqsva6ds0A+55ijFaxwPmjkADCKPUIYyC01CiMHMJF6QFN3k0NJ4LKM871nfaqfWt68vMAiASTzmkHjPdgGMUVbv+FgsL9y9I5Y5/drtmxRW8lv9qP1+9/dke5H4cqwJtLGHd2wr2bt3rzovDzQJIQazs1s1kjdlmYCsu5ZhkJJhPjXa30UmpLyiDpMg3bvGwb1YaJO0EcD3kHKn/NdnY6kZZfvrmz/pZvVf6Bd8Byks++eR49MGsK53WP2srfOA1W5tTJFrEGwXsg9KoUkIMXCPSeYlhBetjhp1lyKNIdvwqT//QDvVIMciKZMAfAbkd6Rxbvrjv4ol0K6nnH3hrnZqLV1raMslf+69vpF7RT3VBg2vKeT4CqaQP/fO1wtNQoiBahLsjTJZtZ938e7J8+oIeOYFcr4bkG2UvycNgivqWv2pZZbf1cYmMEM4CxPA2R38H2MVAMNIo/Q99g7kXjn3GAb94N0uNGR/9hlz5LSJJiHEYN3ZrdxE7tI3KSRaGzypXUrp8pf8nvwd6+yPpPZZnBRDjVlKQD9p25mn72Wfa3V1oUkIMSi+4j5VZJrI9mqfe1JoLNCm3OsDHpNIM/Q1gKe+3L7VtjEt/a2fp9DmkYImIcRg3V3Acu+TP8/ZA6fIvHTpYvUHSNXn+U4OqE8zS85YpLZJPGjLP9a25FlH86BJCDEwr5MA7I1j7f1DIZfDm/Jaf4BUfSW/U4KcT4pFGESC5bT6BXiWy4vW9x7W7SQ1Gpb7YohFYG2Y6Ie+G3AJ3o0IzFtnU9g5lh0ebhFisG7gnkv39TVgygYppcQo0kaWnUq/n0IaBCyDSeTy9ukHC9nXKWgSQgx6m2SzoKVYikX3ZcoiG2EskmuSeessZx3RJIQYuE8Bb3RyTBHw9I82LpDUSvl585uSSWRf525r1u/j81rbME1CiIF6naT23jh1LJNo/eC1RYrNZpCx6a7TPtsxTUKIwbqzW9bx3pSYd40m9VlAXsOxDKK9egekktqyS+10T81vqHksq5n6bNc0CSEGqkm8e5qW2F2GvgLfbYM1L8scWG7vWEMma2jLou446LY5N/GlKZbdHBLNJB7D0CSEGPS+TpKT4l68aZ+DVSfQ/pSzZZZlT9wpmsPqc43UMljGwOc0CSEFqC/MLknrvsi9WUv/nLZpdUiGXF4tETfK8X5tvAYZq/9oEkIM1CvuY2IZw2uDEnKXt+Q4WSbeZjNLbp8dfX+zvuU1qjH6Rx7NBGgSQgx6n90qQZphDGOAIZcr4EnNKRpDttuyn7UMufYIwCBA2y7G3jZpEkIMRj275TWFNe8S4wyZPlNhXnrXsleJITTk2AP/x7oa0yCAJiGkgFHObmHvHDIJhp6HN9XGSHOQk+pTGgdZfSk/l4yxHYEwL5qEEINJXCdZBFpaacuf+/0h8RhkSuaQoC/Rd15zpFJ+DGgSQgw2jElkulpJWmqGIdIst07NJFO1h7Z81jqo1dep+eTURZMQYjC7TrLMpJI1N1WRNqVplYM3IbWkBWO0tRRPemv9UHtdeNoyD5qEEINJmQRG0O4CzWGKx+daQqaSLjBEssq6tHmDmvO00NrUtw2p+efUuZCdRK4o4Dm1aTGFnUNbyXK5tX7I/bkHrU2SPvPQyJ030L5nbSfYBrrfw89Klo+HW4QYLMQk2MO9qe8xzJQPrzS8ae5N2BTeuuT3aqDN2/t/SemRRt9tgyYhxGASA/dFJYQHpBsYI2nBkPMCVnpbn3uQywW8dXq3j5LtwdM2moQQgw1xMXFISlKwNH1rpLaGVrc1zxptqrVc0ijycV+QMx+0TSPURZMQYrAhTBLSIDeltHSzfg60+c1LJquNct5aW0qw6prX7kCNNvQFJtEMAkraKpe/WwdNQogBxySEzGVl5f8BMvdP1nT+JxQAAAAASUVORK5CYII="
Page({

  data: {
    dishlist:[
      {
        dish_img:baseimg,
        dish_name:"哇哈哈",
        time:"昨天",
        st:true
      },
    ],
    screenHeight:0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      screenHeight:wx.getWindowInfo().windowHeight
    })
    let that=this
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
          if (status) {
            that.setData({
    //           ['dishes[' + index + '].like.like_num']: num - 1,
              ['dishlist[' + index + '].st']: !status,
            })
          }
          else{
            that.setData({
    //           ['dishes[' + index + '].like.like_num']: num + 1,
              ['dishlist[' + index + '].st']: !status,
            })
          }
          wx.hideLoading()
          wx.showToast({
            title: "成功！"
          })
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
