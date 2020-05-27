Page({
  data:{
      
  },
onTapJump: function (event) {
    wx.switchTab({
        url: "../partJob/partJob",
        success: function () {
            console.log("jump success")
        },
        fail: function () {
            console.log("jump failed")
        },
        complete: function () {
            console.log("jump complete")
        }
    });
},
onUnload: function (event) {
    console.log("page is unload")
},
onHide: function (event) {
    console.log("page is hide")
},
onLoad: function (options) {
  var that = this;
  wx.getUserInfo({
    success: function (res) {
      console.log(res);
      that.setData({
        name:res.userInfo.nickName,
        region:res.region,
        avatarUrl:res.userInfo.avatarUrl,
        city:res.userInfo.city
      })
    }
  })
},
})