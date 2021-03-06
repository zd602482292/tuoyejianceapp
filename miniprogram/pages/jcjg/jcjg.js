const app = getApp()
const db = wx.cloud.database();
const _ = db.command;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        jcjl:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //根据获取的barcode条码号生成具体检测报告信息
        db.collection('jcjl').where({
            barcode:app.globalData.reportbarcode
        }).get().then(res => {
            console.log('查询成功', res)
            this.setData({
                jcjl:res.data[0]
            })
          }).catch(res => {
            console.log('查询失败', res)
          })

    },
})