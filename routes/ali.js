var express = require('express');
var router = express.Router();

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
});



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