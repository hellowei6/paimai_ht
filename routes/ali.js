var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/focusShopping', function (req, res, next) {
    var focusShopping = [

        {
            image:'//gw.alicdn.com/tps/TB1AgjZOFXXXXX8apXXXXXXXXXX-225-225.png_110x10000.jpg_.webp',
            span:'版画',
            a:'查看全部',
            first:[
                // {
                    // img: "//gw.alicdn.com/tps/TB10_EiNpXXXXcmXVXXXXXXXXXX-300-300.png_110x10000.jpg_.webp",
                    // title: "白玉"
                // },
                
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01D1vVT01SUXiFnNG4i_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '和田玉白玉苏工...',
                    price: '301'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN01yuEYaf1i4T0ajUHaB_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '[龙凤呈祥]无...',
                    price: '301'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i4/O1CN01cvjabR1PxRqMS0hQt_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '免保参拍和田玉',
                    price: '126'
                },

            ]
        },
        {
            image:'//gw.alicdn.com/tps/TB1SRbOMVXXXXXrXpXXXXXXXXXX-150-150.png_110x10000.jpg_.webp',
            span:'玉石',
            a:'查看全部',
            // second
            first: [
                // {
                //     img: '//gw.alicdn.com/tps/TB1cCUDNpXXXXXlXFXXXXXXXXXX-300-300.png_110x10000.jpg_.webp',
                //     title: '和田玉观音'
                // },
                 {  
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN015mulSX1PxRrcwygCo_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '和田玉白玉糖玉',
                    price: '265',     
                },
                {   
                  
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN01nfIRvk1PxRoWNDk4v_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '[莲花观音]和...',
                    price: '1',              
                },
                {
                    image:'//gw.alicdn.com/tps/TB1AgjZOFXXXXX8apXXXXXXXXXX-225-225.png_110x10000.jpg_.webp',
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01aYH3kK1QeV5ZNmCd5_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '买就送赠品[降...',
                    price: '265'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/tps/TB1nI.MNpXXXXXeXpXXXXXXXXXX-300-300.png_110x10000.jpg_.webp',
            span: '和田玉手镯',
            a:'查看全部',
            // third
            first: [
                
                   
                 {
                    img: '//gw.alicdn.com/bao/uploaded/i4/O1CN01a93QAj1niq0L1HvRx_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '[望子成龙]和',
                    price: '301'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i4/O1CN01stKzuM1niq0BB4fYb_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '新疆工艺雕刻师...',
                    price: '601'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i4/O1CN01zGo5Yu1UnRHomgInP_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '[寓意圆圆满满...',
                    price: '201'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/tps/TB1sREKNVXXXXbxXFXXXXXXXXXX-150-150.png_110x10000.jpg_.webp',
            span: '五粮液',
            a:'查看全部',
            // fourth
            first: [
                 
                 {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN01UrSQW91cisGcRiv28_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '五粮液收藏礼盒',
                    price: '401'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN01D8i4gZ1cisGaKIHyX_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '五粮液九龙坛 52...',
                    price: '1001'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01prRFn41cisGWHyul3_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '五粮液景区纪念',
                    price: '201'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/tps/TB1HtATNpXXXXaPXXXXXXXXXXXX-300-300.png_110x10000.jpg_.webp',
            span: '和田玉挂件',
            a:'查看全部',
            // fifth
            first: [
                  
                 {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN016aKsOu25M5LMAYSxb_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '特细红糖白肉[...',
                    price: '2300'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN015DFOWy25mBy46ZfPN_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '买就送手链[寓',
                    price: '101'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN017JagHP29PzFeIyTE4_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '仵孟超工作室作...',
                    price: '401'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/tps/TB1s_EpNVXXXXchaXXXXXXXXXXX-150-150.png_110x10000.jpg_.webp',
            span: '茅台',
            a:'查看全部',
            // sixth
            first: [
                  
               {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN01wQpSzA1cisGR0OLfF_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '2012年 贵州茅台...',
                    price: '601'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN015Dcnl91cisGcdVGvU_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '金山银山旧金山...',
                    price: '201'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01zXpUpb1cisGUspcCN_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '2011年 （盛世帝...',
                    price: '201'
                },
            ]
        },
        {
            // image: '//w.alicdn.com/tps/TB1XJcsNpXXXXaZXVXXXXXXXXXX-300-300.png_110x10000.jpg_.webp',
            image:'//gw.alicdn.com/tps/TB1cCUDNpXXXXXlXFXXXXXXXXXX-300-300.png_110x10000.jpg_.webp',
            span: '和田玉把件',
            a:'查看全部',
            // seventh
            first: [
                
                 {
                    img: '//gw.alicdn.com/bao/uploaded/i4/O1CN01t6w0Rn1F6BbMyNn9A_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '和田玉籽料墨玉...',
                    price: '601'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN01ZrBMIZ1UnRHfxK3qh_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '[寓意 招财进宝...',
                    price: '1689'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN013fj7k31UnRHc20Mpd_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '和田玉罕见若羌...',
                    price: '201'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/tps/TB1ppgFNVXXXXbjXVXXXXXXXXXX-150-150.png_110x10000.jpg_.webp',
            span: '古井贡',
            a:'查看全部',
            // eighth
            first: [
                    
                 {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN01hQa1jf1Wn6E11CHO6_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: 'H04 2003年 50...',
                    price: '1'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN01VsXsIW1zmINT2x1fR_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '14 古井贡礼盒 1...',
                    price: '1'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01KhU78Z1zmIO14jxjk_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '8 矮盖古井贡酒 1...',
                    price: '1'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/tps/TB1C9AYNVXXXXc2XXXXXXXXXXXX-150-150.png_110x10000.jpg_.webp',
            span: '剑南春',
            a:'查看全部',
            // nineth
            first: [
                   
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01NTTetV1Wn6DzZGHzc_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: 'H27 80年代末 寿...',
                    price: '201'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN01lHEWTJ1Wn6E3af36b_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: 'h09 1999年 剑南...',
                    price: '1501'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i4/O1CN01SPQvw51Wn6DzYsSFU_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: 'h26 1996年 黄盖...',
                    price: '201'
                },
            ]
        },
        {
            image: '//gw.alicdn.com/bao/uploaded/i2/O1CN01Tj2HT71Wn6E5MUEY4_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
            span: '汾酒',
            a:'查看全部',
            // tenth
            first: [
                   
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/O1CN01Tj2HT71Wn6E5MUEY4_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: 'H38 1984.1985...',
                    price: '201'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01GixJVj1zmINYCWDtU_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '19 汾酒礼盒 199...',
                    price: '101'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i3/O1CN01tK4vhl1zmIO1JlG2U_!!0-paimai.jpg_220x10000Q75.jpg_.webp',
                    title: '9 玻璃汾酒 1990...',
                    price: '201'
                },
            ]
        }




    ]
    res.send(focusShopping);
});
module.exports = router;