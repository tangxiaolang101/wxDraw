//index.js
//获取应用实例
const app = getApp()
var WxDraw = require("../../utils/wxdraw.js").WxDraw;
var Shape = require("../../utils/wxdraw.js").Shape;
var AnimationFrame = require("../../utils/wxdraw.js").AnimationFrame;

// console.log(cancelAnimationFrame);

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    wxCanvas:null

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindtouchstart:function(e){
    // 检测手指点击事件
    // console.log(e);
    this.wxCanvas.touchstartDetect(e);
    
  },
  bindtouchmove:function(e){
    // 检测手指点击 之后的移动事件
    this.wxCanvas.touchmoveDetect(e);
  },
  bindtouchend:function(){
     //检测手指点击 移出事件
    this.wxCanvas.touchendDetect();
  },
  bindtap:function(e){
    // console.log(e);    
    this.wxCanvas.tapDetect(e);
  },
  bindlongpress:function(e){
    // console.log(e);
    this.wxCanvas.longpressDetect(e);
  },
  onLoad: function () {
    /** 
     * 
     */
    // console.log(requestAnimationFrame);
    var context = wx.createCanvasContext('first')


   

    // Fill with gradient


    this.wxCanvas = new WxDraw(context,0,0,400,500);

    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 wxDraw初始化的时候 需要设置 以便点击检测的时候使用
    */

    this.wxCanvas.add(new Shape('circle',{x:20,y:20,r:60,sA:Math.PI,fillStyle:"#333333",lineWidth:20,needShadow:false},'mix',true));
     
    // var cir12 = new Shape('circle', { x: 200, y: 200, r: 60, sA: Math.PI / 2, fillStyle: "#333333", lineWidth: 2 }, false, true);
    var cir1 = new Shape('line', {
      fillStyle: "#333333", rotate: Math.PI / 2, points: [
        [70, 85],
        [40, 20], [24, 46], [2, 4], [14, 6], [4, 46]],lineWidth:5}, 'stroke',true);
    console.log(cir1);
 
    var a = [[70, 85],
        [40, 20], [24, 46], [2, 4], [14, 6], [4, 46]];

     var am2= a.map(function(item){
           return [item[0]*6,item[1]]
        })
          console.log(am2);
        var cir8 = new Shape('cshape', {
          fillStyle: "#E1D5A3", rotate: Math.PI / 2, points:am2, lineWidth: 0.5, Shadow: "#ffffff"
    }, true, true);
    var cir4 = new Shape('line', {
      fillStyle: "#000000", rotate: Math.PI / 2, points: [
        [163, 193], [-18, 48]], lineWidth: 12, Shadow: "#ffffff"
    }, true, true)
    // var cir1 = new Shape('rect', { x: 0, y: 400, w: 20, h: 40, fillStyle: "#000000", rotate: 200}, true,true)
    var cir7 = new Shape('rect', { x: 0, y: 60, w: 40, h: 40, fillStyle: "#dcdcdc", rotate: 200 },'mix', true)

    var cir9 = new Shape('text', { x: 100, y: 300, text:"ssssss",fontSize:30,align:"left"}, 'stroke', true)

    var cir2 = new Shape('polygon', { x: 10, y: 100, r: 20, sides: 5, rotate: 0 }, 'stroke', true)
 
    var cir3 = new Shape('ellipse', {
      x: 220, y: 200,
      a: 100, b: 300, rotate: 0,
      fillStyle: "#EEDEAD",
      lineWidth: 5,
      isLineDash:true,
      lineDash:[[10,10],50],
    }, 'stroke', true);

    var cir4 = new Shape('ellipse',{
      x:200,y:200,
      a: 100, b: 250, rotate:0,
      fillStyle: "#DDDEAD",
      lineWidth:10,
      opacity:0.9
    },true, true)    



    var cir13 = new Shape('line',{
      points:[[12,34],[304,607]],rotate:0,
      fillStyle: "#DDDEAD",
      lineWidth:2,
      opacity:0.9,
      isLineDash:true,
      lineDash:[[1,2],2]
    },true, true)    

    // console.log(cir3);
    // cir3.setOrigin([40,40])
    // console.log(cir3);
    this.wxCanvas.add(cir4);
    this.wxCanvas.add(cir3);
    this.wxCanvas.add(cir2);
    // this.wxCanvas.add(cir1);
    this.wxCanvas.add(cir7);
    this.wxCanvas.add(cir9);
    this.wxCanvas.add(cir8);
    this.wxCanvas.add(cir9);
    this.wxCanvas.add(cir1);
    // this.wxCanvas.add(cir12);
    this.wxCanvas.add(cir13);
    
    // cir8.destroy();
    cir8.updateLayer("+2");
    
    // cir12.on('longpress',function(a){
    //   console.log(a);
    // });

    let tom = function () {
      console.log('aaa');
    }
    cir8.bind('longpress',tom);
    cir8.unbind('longpress',tom);

    console.log(this.wxCanvas);

    cir9.animate({rotate:"+=10"}, {
      duration: 10000,
      onLooping: function () {
        // console.log('----');
      },
      easing: "linear"
    }).start();

    cir3.bind('tap',function(){
     cir3.updateOption({a:10})
     console.log(cir3);
    });

    cir3.bind('drag', function () {
      cir3.updateOption({ a: 100 })
      console.log(cir3);
    });
    cir3.bind('touchend',function(){
      cir3.updateOption({ b: 100 })
    });

    

    let tom2 = function () {
      console.log('aaa');
    }


    
    console.log(tom===tom2);
    // cir12.animate({ /*'rotate': Math.PI, "x": "+=200",y: 400,*/sA:Math.PI }, {
    //   duration: 10000,
    //   onLooping: function () {
    //     // console.log('----');
    //   },
    //   easing: "bouncePast"
    //   }).start();


    // cir1.animate("rotate","+=100",{duration:10000}).start()
    // cir1.animate("rotate","+=100",{duration:10000}).start()

    // cir3.animate({ 'rotate': Math.PI, fillStyle:"#F88863",lineDash:[[10,20],20]}, {
    //   duration: 10000,
    //   onLooping: function () {
    //     // console.log('----');
    //   },
    //   easing: "bouncePast"
    // }).start();
      
    // cir3.animate({ lineDash: [[30, 40], 20] }, {
    //   duration: 10000,
    //   onLooping: function () {
    //     // console.log('----');
    //   },
    //   easing: "bouncePast"
    // }).start(true);
  }

  
})
