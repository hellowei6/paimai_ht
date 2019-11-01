var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */


//双11
router.get('/shuang', function (req, res, next) {
    var arr = [{
            img1: "https://gw.alicdn.com/tfs/TB1PanGj9f2gK0jSZFPXXXsopXa-200-200.png_220x10000.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB18Oakjfb2gK0jSZK9XXaEgFXa-261-123.png_220x10000.jpg_.webp",
            title1: "法院卖货",
            title2: "好物不止七折"
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1ppWIkHr1gK0jSZFDXXb9yVXa-200-200.png_220x10000.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB1xz5pjkT2gK0jSZFkXXcIQFXa-261-123.png_220x10000.jpg_.webp",
            title1: "甩卖亏本",
            title2: "银行有好货"
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1l95.kKL2gK0jSZFmXXc7iXXa-200-200.png_220x10000.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB1Ltiljlv0gK0jSZKbXXbK2FXa-261-123.png_220x10000.jpg_.webp",
            title1: "南浔资产",
            title2: "网络竞价平台"
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1NbYDkXP7gK0jSZFjXXc5aXXa-200-200.png_220x10000.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB1pMKljhz1gK0jSZSgXXavwpXa-261-123.png_220x10000.jpg_.webp",
            title1: "房企倒了",
            title2: "抢拍破产资产"
        },

    ]
    res.send(arr);
});




//拍卖滚动栏
router.get('/msProduct', function (req, res, next) {
    var arr = [{
            img1: "https://gw.alicdn.com/tfs/TB1kp4GXwoQMeJjy0FoXXcShVXa-150-150.png_110x10000.jpg_.webp",
            content: "法院卖货",
            img2: "https://gw.alicdn.com/tfs/TB1z7IbgSf2gK0jSZFPXXXsopXa-108-51.png_110x10000.jpg_.webp",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1B6Q9XgMPMeJjy1XcXXXpppXa-150-150.png_110x10000.jpg_.webp",
            content: "银行清仓",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1vXNhX1SSBuNjy0FlXXbBpVXa-150-150.png_110x10000.jpg_.webp",
            content: "破产甩卖",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1ojQ9XgMPMeJjy1XcXXXpppXa-150-150.png_110x10000.jpg_.webp",
            content: "房产",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1NYg8XgMPMeJjy1XdXXasrXXa-150-150.png_110x10000.jpg_.webp",
            content: "汽车",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1Pbg8XgMPMeJjy1XdXXasrXXa-150-150.png_110x10000.jpg_.webp",
            content: "海关罚没",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1ozajj7yWBuNjy0FpXXassXXa-150-150.png_110x10000.jpg_.webp",
            content: "政府",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1Q7IHLY2pK1RjSZFsXXaNlXXa-151-151.png_110x10000.jpg_.webp",
            content: "特价资产",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1A213e7T2gK0jSZPcXXcKkpXa-138-138.png_110x10000.jpg_.webp",
            content: "国资处置",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB17iQ8XgoQMeJjy1XaXXcSsFXa-150-150.png_110x10000.jpg_.webp",
            content: "奢侈品",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1zNk9XgMPMeJjy1XbXXcwxVXa-150-150.png_110x10000.jpg_.webp",
            content: "玉翠珠宝",
            img2: "https://gw.alicdn.com/tfs/TB1YUXiiUD1gK0jSZFGXXbd3FXa-108-51.png_110x10000.jpg_.webp",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1j4k9XgMPMeJjy1XbXXcwxVXa-150-150.png_110x10000.jpg_.webp",
            content: "名酒好茶",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1oTNfk9f2gK0jSZFPXXXsopXa-150-150.gif",
            content: "艺术品",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1VN7_XgoQMeJjy1XaXXcSsFXa-149-149.png_110x10000.jpg_.webp",
            content: "全部分类",
            img2: "",
        },
        {
            img1: "//gw.alicdn.com/tfs/TB1wfXAlTlYBeNjSszcXXbwhFXa-151-151.jpg_110x10000Q75.jpg_.webp",
            content: "拍卖行",
            img2: "",
        },
        {
            img1: "//gw.alicdn.com/tfs/TB11sIkBL1TBuNjy0FjXXajyXXa-132-132.png_110x10000.jpg_.webp",
            content: "茶器奢品",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB18N0Cw9rqK1RjSZK9XXXyypXa-150-150.png_110x10000.jpg_.webp",
            content: "手工艺",
            img2: "",
        },
        {
            img1: "https://gw.alicdn.com/tfs/TB1yz7OaRCw3KVjSZFlXXcJkFXa-150-150.png_110x10000.jpg_.webp",
            content: "文玩收藏",
            img2: "",
        },


    ]
    res.send(arr)
});




// 精挑细选
router.get('/jing', function (req, res, next) {
    var arr = [{
            img: "https://gw.alicdn.com/bao/uploaded/i3/TB1c8XXjbr1gK0jSZFDVVf9yVXa_170x10000Q75.jpg_.webp",
            title1: "粤E˙AB616别克机动车",
            title2: "2.24万",
        },
        {
            img: "https://gw.alicdn.com/bao/uploaded/i1/TB1mTrbkFY7gK0jSZKzlCqikpXa_170x10000Q75.jpg_.webp",
            title1: "连云港海州区浦南开发区黄河路8号云顶英伦汇395号，联排别墅",
            title2: "211.90万",
        },
        {
            img: "https://gw.alicdn.com/bao/uploaded/i1/TB1hZ9ag7L0gK0jSZFANlwA9pXa_170x10000Q75.jpg_.webp",
            title1: "（破）南京起重机械总厂有限公司对外投资股权",
            title2: "8191.01",
        }
    ]
    res.send(arr)
});




//发现惊喜
router.get('/superise', function (req, res, next) {
    var arr = [{
            title1: "董香名酒推荐",
            title2: "全国包邮假一赔三",
            img: "https://gw.alicdn.com/bao/uploaded/i4/O1CN01ZMENST1SlULb2VPMD_!!0-paimai.jpg_110x10000Q75.jpg_.webp",
        },
        {
            title1: "人人都爱的玉",
            title2: "苏工就是好看",
            img: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01otjSRY1K9uxCf1h5P_!!0-paimai.jpg_110x10000Q75.jpg_.webp",
        },
        {
            title1: "翡翠降价拍",
            title2: "玩的就是心跳",
            img: "https://gw.alicdn.com/bao/uploaded/i1/O1CN018DORyc1Nk32jezOpa_!!0-paimai.jpg_110x10000Q75.jpg_.webp",
        },
        {
            title1: "热卖白玉手镯",
            title2: "产地直供假一赔三",
            img: "https://gw.alicdn.com/bao/uploaded/i1/O1CN01dyYLF51JBv1QrXkGW_!!0-paimai.jpg_110x10000Q75.jpg_.webp",
        },
    ]
    res.send(arr)
});



//导航
router.get('/navList', function (req, res, next) {
    var arr = [
        "热门",
        "法院",
        "房产",
        "汽车",
        "奢侈品",
        "玉翠珠宝",
        "名酒好茶",
        "艺术品",
        "拍卖行",
        "茶器奢品",
        "手工艺",
        "文玩收藏",
    ]
    res.send(arr);
=======
/* GET users listing. */
<<<<<<< HEAD

// 所有分类
router.get('/allCateList',function(req,res,next){
    var cates=[
        {
            id:1,
            title:'玉翠珠宝'
        },
        {
            id:2,
            title:'奢侈品'
        },
        {
            id:3,
            title:'紫砂陶瓷'
        },
        {
            id:4,
            title:'司法/资产'
        },
        {
            id:5,
            title:'茶酒滋补'
        },
        {
            id:6,
            title:'房产'
        },
        {
            id:7,
            title:'汽车'
        },
        {
            id:8,
            title:'工艺臻品'
        },
        {
            id:9,
            title:'水墨篆刻'
        },
        {
            id:10,
            title:'西画雕塑'
        }
    ]
    res.send(cates);
>>>>>>> asf
});



<<<<<<< HEAD
//直播
router.get('/liveList', function (req, res, next) {
    var arr = [{
            img1: "https://gw.alicdn.com/tfs/TB1Han9heH2gK0jSZFEXXcqMpXa-450-450.png_300x10000.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB1gyEiffb2gK0jSZK9XXaEgFXa-195-42.png",
            span1: "疯狂放漏 限时抢",
        },
        {
            img1: "https://gw.alicdn.com/bao/uploaded/i2/O1CN013fMYWy1KShBqtlLi0_!!0-paimai.jpg_300x10000Q75.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB146uJfAL0gK0jSZFxXXXWHVXa-177-36.png",
            span2: "歌德盈香精选名酒 一元起拍捡漏专场",
            img3: "https://gw.alicdn.com/tfs/TB1aiW3grj1gK0jSZFOXXc7GpXa-45-36.png",
            span3: "8.03万次围观",
        },
        {
            img1: "https://gw.alicdn.com/bao/uploaded/i1/O1CN01dml7Y51QXAknb8fXo_!!0-paimai.jpg_300x10000Q75.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB146uJfAL0gK0jSZFxXXXWHVXa-177-36.png",
            span2: "和田玉1元起拍无保留价系列",
            img3: "https://gw.alicdn.com/tfs/TB1aiW3grj1gK0jSZFOXXc7GpXa-45-36.png",
            span3: "4.18万次围观",
        },
        {
            img1: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01CsJxTP1t1gMuQmt66_!!0-paimai.jpg_300x10000Q75.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB146uJfAL0gK0jSZFxXXXWHVXa-177-36.png",
            span2: "动物人物山水作品系列",
            img3: "https://gw.alicdn.com/tfs/TB1aiW3grj1gK0jSZFOXXc7GpXa-45-36.png",
            span3: "11.4万次围观",
        },
        {
            img1: "https://gw.alicdn.com/bao/uploaded/imgextra/i4/O1CN01BLlEKZ1aIeMGDrJVB_!!0-paimai.jpg_300x10000Q75.jpg_.webp",
            img2: "https://gw.alicdn.com/tfs/TB1q_G0guP2gK0jSZFoXXauIVXa-123-36.png",
            span2: "和玉堂拍场放漏了",
            img3: "https://gw.alicdn.com/tfs/TB1d2KWguT2gK0jSZFvXXXnFXXa-45-36.png",
            span3: "310人参与",
        },
    ]
    res.send(arr)
})



//所有商品1
router.get('/oneList', function (req, res, next) {
    var arr = [
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
    ]
    res.send(arr);
})


//所有商品2
router.get('/twoList', function (req, res, next) {
    var arr = [
        
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
    ]
    res.send(arr);
})



//所有商品3
router.get('/threeList', function (req, res, next) {
    var arr = [
        
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        },
    ]
    res.send(arr);
})



//所有商品4
router.get('/fourList', function (req, res, next) {
    var arr = [
       
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i4/O1CN019xahIJ1kmYMXSh3hS_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            img: "https://gw.alicdn.com/tfs/TB1f35NUZfpK1RjSZFOXXa6nFXa-522-228.png_360x10000.jpg_.webp",
            p1: "#优选冰岛好茶",
            p2: "包邮到家品质优选",
            can:"立即参拍",
        },
        {
            back: "https://gw.alicdn.com/bao/uploaded/i1/TB1nYZPkHr1gK0jSZFDycL9yVXa_360x10000Q75.jpg_.webp",
            txt1: "阿玛尼ARMANI男士手表一块 型号AR1862 包邮",
            content1:"当前",
            content2: "￥771",
            tiao:"看相似",

        },
        {
            big: "https://gw.alicdn.com/tfs/TB1m_X1lhn1gK0jSZKPXXXvUXXa-522-774.jpg_360x10000Q75.jpg_.webp",
            
        }, 
        {
            back: "https://gw.alicdn.com/bao/uploaded/i3/O1CN01StyX3W1KShBo1BDte_!!0-paimai.jpg_360x10000Q75.jpg_.webp",
            span:"专场进行",
            span1: "11.01",
            span2: "12:00",
            span3:"结束",
            txt1: "歌德盈香精选名酒 一元起拍捡漏专场",
            chu: "6.45万次出价",

        },
    ]
    res.send(arr);
})
module.exports = router;
=======

//
router.get('/shoppingList', function (req, res, next) {
    var shoppingList = [
        //玉翠珠宝0
        {
            img:"//gw.alicdn.com/tfs/TB1fd1QmPuhSKJjSspaXXXFgFXa-1090-200.png_570x10000.jpg",
            title: '玉翠珠宝',
            list: [
                {
                    img: '//gw.alicdn.com/tfs/TB1KObhkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
                    title: '和田玉'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1Q4_hkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
                    title: '翡翠'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1cffukgoQMeJjy0FoXXcShVXa-334-334.png_170x10000.jpg_.webp',
                    title: '琥珀'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1sTrkkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '钻石'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1V3S3kgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
                    title: '贵重宝石'
                },
                {
                    img: ' //gw.alicdn.com/tfs/TB15nnkkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '玛瑙'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB18SSvkgMPMeJjy1XdXXasrXXa-334-334.png_170x10000.jpg_.webp',
                    title: '碧玺'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB18SSvkgMPMeJjy1XdXXasrXXa-334-334.png_170x10000.jpg_.webp',
                    title: '水晶'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/O1CN01rbb67I28FADBYLrfD_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '黄金'
                }
            ]
        },
        //奢侈品1
        {
            img:"//gw.alicdn.com/tfs/TB1TBK8mGagSKJjy0FcXXcZeVXa-1090-200.png_570x10000.jpg",
            title:"奢侈品",
            list: [
                {
                    img: '//gw.alicdn.com/tfs/TB1t612kgoQMeJjy0FpXXcTxpXa-332-332.png_170x10000.jpg',
                    title: '手表'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1OKy6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
                    title: '包包'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1y612kgoQMeJjy0FpXXcTxpXa-334-334.png_170x10000.jpg_.webp',
                    title: '饰品'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB18LOUkgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
                    title: '配饰'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1ev33bFY7gK0jSZKzXXaikpXa-334-334.jpg_170x10000Q75.jpg_.webp',
                    title: '男装'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1yfOUkgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
                    title: '女装'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1Uey6kgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '男鞋'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1ZKy6kgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '女鞋'
                },
        
           
                {
                    img: '//gw.alicdn.com/tfs/TB1pfOUkgoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
                    title: '欧米茄'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1h3HXkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
                    title: '劳力士'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1lP12kgoQMeJjy0FpXXcTxpXa-332-332.png_170x10000.jpg_.webp',
                    title: '万国'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1juy6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
                    title: '卡地亚'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1feC6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
                    title: '路易威登'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB16fOUkgoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
                    title: '香奈儿'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1i1y6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
                    title: '古驰'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB11MDXkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
                    title: '爱马仕'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB199enkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
                    title: '浪琴'
                },
            ]
        },
        //按品牌2
        // {
        //     title:"按品牌",
        //     list:[
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1pfOUkgoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
        //             title: '欧米茄'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1h3HXkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '劳力士'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1lP12kgoQMeJjy0FpXXcTxpXa-332-332.png_170x10000.jpg_.webp',
        //             title: '万国'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1juy6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
        //             title: '卡地亚'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1feC6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
        //             title: '路易威登'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB16fOUkgoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
        //             title: '香奈儿'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1i1y6kgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
        //             title: '古驰'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB11MDXkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '爱马仕'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB199enkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
        //             title: '浪琴'
        //         },
        //     ]
        // },
        //紫砂陶瓷3
        {
            img:"//gw.alicdn.com/tfs/TB1fF3smaagSKJjy0FaXXb0dpXa-1090-200.png_570x10000.jpg",
            title:"紫砂陶瓷",
            list:[
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/TB1wIRsGFXXXXcOaXXXcjlU.pXX_170x10000Q75.jpg_.webp',
                    title: '石瓢壶'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/TB2biEPtBsmBKNjSZFsXXaXSVXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '西施壶'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i1/TB23ZSwJrGYBuNjy0FoXXciBFXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '朱泥壶'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i3/TB2ui0RfEOWBKNjSZKzXXXfWFXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '紫泥壶'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/2591192248/TB2KnKQkVXXXXcmXXXXXXXXXXXX_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '手工壶'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i4/TB2EQ9DdNtnkeRjSZSgXXXAuXXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '手工陶瓷'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/TB20nXzsbZnBKNjSZFhXXc.oXXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '龙泉青瓷'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/TB2ndFDFDlYBeNjSszcXXbwhFXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '醴陵瓷'
                },
                {
                    img: '//gw.alicdn.com/bao/uploaded/i2/TB2kf62pyQnBKNjSZFmXXcApVXa_!!0-paimai.jpg_170x10000Q75.jpg_.webp',
                    title: '汝瓷'
                },
            ]
        },
        //司法/资产4
        {
            img:"//gw.alicdn.com/tfs/TB1ChjpqMMPMeJjy1XdXXasrXXa-1090-200.png_570x10000.jpg",
            title:"司法/资产",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB16ZgQkfDH8KJjy1XcXXcpdXXa-332-332.png_170x10000.jpg_.webp',
                    title: '法院卖货'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB16ZgQkfDH8KJjy1XcXXcpdXXa-332-332.png_170x10000.jpg_.webp',
                    title: '金融清仓'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB151qeh5qAXuNjy1XdXXaYcVXa-332-332.png_170x10000.jpg_.webp',
                    title: '海关罚没'
                },
            ]
        },
        //按类型分类5
        // {
        //     tltle:"按类型分类",
        //     list:[
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1CyyDkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
        //             title: '国产白酒'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1qZfjkgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
        //             title: '葡萄酒'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1Eta.kgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
        //             title: '洋酒'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB11ZfjkgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
        //             title: '普洱茶'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1s1fpkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
        //             title: '白茶'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB18sfjkgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
        //             title: '其他茶'
        //         },
        
        //     ]
        // },
        //茶酒滋补6
        {
            img:"//gw.alicdn.com/tfs/TB1xNKtmGmgSKJjSsplXXaICpXa-1090-200.png_570x10000.jpg",
            title:"茶酒滋补",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB1CyyDkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
                    title: '国产白酒'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1qZfjkgMPMeJjy1XbXXcwxVXa-332-332.png_170x10000.jpg_.webp',
                    title: '葡萄酒'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1Eta.kgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
                    title: '洋酒'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB11ZfjkgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '普洱茶'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1s1fpkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '白茶'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB18sfjkgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '其他茶'
                },
        
            ]
        },
        //茶酒品牌分类7
        // {
        //     title:"按品牌",
        //     list:[
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1MefpkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '茅台'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB16ufpkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '五粮液'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1qyyDkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
        //             title: '剑南春'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1gKfpkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '汾酒'
        //         },
        
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1hiyDkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
        //             title: '董酒'
        //         }, {
        //             img: '//gw.alicdn.com/tfs/TB1ryyDkgMPMeJjy1XdXXasrXXa-332-332.png_170x10000.jpg_.webp',
        //             title: '拉菲'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1BefpkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '麦卡伦'
        //         },
        //         {
        //             img: '//gw.alicdn.com/tfs/TB1SKfpkgMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
        //             title: '人头马'
        //         },
        
        
        //     ]
        // },
        //房产8
        {
            img:"//gw.alicdn.com/tfs/TB1iMTiqwoQMeJjy0FoXXcShVXa-1090-200.png_570x10000.jpg",
            title:"房产",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB1ON0fkwoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
                    title: '司法房'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1wPNJkwoQMeJjy0FoXXcShVXa-332-332.png_170x10000.jpg_.webp',
                    title: '海外房产'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1mVrFgaagSKJjy0FhXXcrbFXa-332-332.png_170x10000.jpg_.webp',
                    title: '土地'
                },
            ]
        },
        //汽车9
        {
            img:"//gw.alicdn.com/tfs/TB1S2CvqwoQMeJjy1XaXXcSsFXa-1090-200.png_570x10000.jpg",
            title:"汽车",
            list: [
                {
                    img: '//gw.alicdn.com/tfs/TB14_q.kgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '奥迪'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1nUy0kgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
                    title: '宝马'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1ZeGtkgMPMeJjy1XdXXasrXXa-334-334.png_170x10000.jpg_.webp',
                    title: '奔驰'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB12KGtkgMPMeJjy1XdXXasrXXa-334-334.png_170x10000.jpg_.webp',
                    title: '本田'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1_XHfkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '别克'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1HpLfkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '大众'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1qpLfkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '丰田'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1LEy0kgoQMeJjy1XaXXcSsFXa-334-334.png_170x10000.jpg_.webp',
                    title: '福特'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1sVLfkgMPMeJjy1XcXXXpppXa-334-334.png_170x10000.jpg_.webp',
                    title: '奇瑞'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1CDu.kgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '起亚'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1Snu.kgMPMeJjy1XbXXcwxVXa-334-334.png_170x10000.jpg_.webp',
                    title: '尼桑'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1jc98kgoQMeJjy0FpXXcTxpXa-334-334.png_170x10000.jpg_.webp',
                    title: '荣威'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1wjSnbVuWBuNjSspnXXX1NVXa-320-320.png',
                    title: '沃尔沃'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1wjSnbVuWBuNjSspnXXX1NVXa-320-320.png',
                    title: '现代'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1wjSnbVuWBuNjSspnXXX1NVXa-320-320.png',
                    title: '雪佛兰'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1om2rkgoQMeJjy0FoXXcShVXa-334-334.png_170x10000.jpg_.webp',
                    title: '雪铁龙'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1Rs58kgoQMeJjy0FpXXcTxpXa-334-334.png_170x10000.jpg_.webp',
                    title: '马自达'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB11uGtkgMPMeJjy1XdXXasrXXa-334-334.png_170x10000.jpg_.webp',
                    title: '东风标致'
                },
            ]
        },
        //工艺臻品10
        {
            img:"//gw.alicdn.com/tfs/TB1wjSnbVuWBuNjSspnXXX1NVXa-320-320.png",
            title:"工艺臻品",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB1vMd_fLNNTKJjSspeXXaSwpXa-332-332.png_170x10000.jpg_.webp',
                    title: '木雕手串'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1ElITgX9gSKJjSspbXXbeNXXa-332-332.png_170x10000.jpg_.webp',
                    title: '印石'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1vMd_fLNNTKJjSspeXXaSwpXa-332-332.png_170x10000.jpg_.webp',
                    title: '木雕手串'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1eF3SgjuhSKJjSspaXXXFgFXa-334-334.png_170x10000.jpg_.webp',
                    title: '猛犸牙雕'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1shcVgaigSKJjSsppXXabnpXa-334-334.png_170x10000.jpg_.webp',
                    title: '宝剑'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1LIsQgjuhSKJjSspmXXcQDpXa-334-334.png_170x10000.jpg_.webp',
                    title: '银壶'
                },
            ]
        },
        //水墨篆刻11
        {
            img:"//gw.alicdn.com/tfs/TB1OleEqwoQMeJjy0FpXXcTxpXa-1090-200.png_570x10000.jpg",
            title:"水墨篆刻",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB13UBefLxNTKJjy0FjXXX6yVXa-332-332.png_170x10000.jpg_.webp',
                    title: '传统水墨'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1boFefLxNTKJjy0FjXXX6yVXa-332-332.png_170x10000.jpg_.webp',
                    title: '书法'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1t4V6kwoQMeJjy0FoXXcShVXa-334-334.png_170x10000.jpg_.webp',
                    title: '金石篆刻'
                },
            ]
        },
        //西画雕刻12
        {
            img:"//gw.alicdn.com/tfs/TB1eRO8mGagSKJjy0FcXXcZeVXa-1090-200.png_570x10000.jpg",
            title:"西画雕刻",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB1gMyDkwoQMeJjy0FoXXcShVXa-332-332.png_170x10000.jpg_.webp',
                    title: '油画'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1kBajkwMPMeJjy1XbXXcwxVXa-332-332.jpg_170x10000Q75.jpg_.webp',
                    title: '水彩'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1E80.kwoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
                    title: '版画'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1rl0.kwoQMeJjy1XaXXcSsFXa-332-332.png_170x10000.jpg_.webp',
                    title: '素描'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB102iqkwMPMeJjy1XcXXXpppXa-332-332.png_170x10000.jpg_.webp',
                    title: '水粉'
                },
            ]
        },
        //文玩收藏13
        {
            img:"//gw.alicdn.com/tfs/TB18JRSq3oQMeJjy0FoXXcShVXa-1090-200.png_570x10000.jpg",
            title:"文玩收藏",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB1cbkBgamgSKJjSsplXXaICpXa-332-332.png_170x10000.jpg_.webp',
                    title: '砚台'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1kG7HgamgSKJjSsphXXcy1VXa-332-332.png_170x10000.jpg_.webp',
                    title: '核壳'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1Ty06fLNNTKJjSspcXXb4KVXa-334-334.png_170x10000.jpg_.webp',
                    title: '鼻烟壶'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1E1Zpl5rpK1RjSZFhXXXSdXXa-200-200.jpg_170x10000Q75.jpg_.webp',
                    title: '老墨'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1eqZllVzqK1RjSZSgXXcpAVXa-200-200.jpg_170x10000Q75.jpg_.webp',
                    title: '钱币'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1OqgvgjuhSKJjSspdXXc11XXa-334-334.png_170x10000.jpg_.webp',
                    title: '邮票'
                },
            ]
        },
        //特色宗教14       
        {
            img:"//gw.alicdn.com/tfs/TB1s_UzmjihSKJjy0FfXXbGzFXa-1090-200.png_570x10000.jpg",
            title:"特色宗教",
            list:[
                {
                    img: '//gw.alicdn.com/tfs/TB1PX2_mGmgSKJjSspiXXXyJFXa-249-249.png_170x10000.jpg_.webp',
                    title: '加持挂件'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB1QX2_mGmgSKJjSspiXXXyJFXa-249-249.png_170x10000.jpg_.webp',
                    title: '加持佛像'
                },
                {
                    img: '//gw.alicdn.com/tfs/TB17nPCmPihSKJjy0FfXXbGzFXa-249-249.png_170x10000.jpg_.webp',
                    title: '加持佛珠'
                },
            ]
        },

    ]
    res.send(shoppingList);
});

module.exports = router;

=======
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
>>>>>>> asf
>>>>>>> asf
