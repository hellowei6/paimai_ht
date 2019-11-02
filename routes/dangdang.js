var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/msProduct1', function (req, res, next) {
    var arr = [
        {
            img: "https://gw.alicdn.com/tfs/TB1RGUihoY1gK0jSZFCXXcwqXXa-720-270.png",
        },
        {
            img: "https://img.alicdn.com/tfs/TB1bY9bgYj1gK0jSZFuXXcrHpXa-720-270.png",
        },
        {
            img: "https://img.alicdn.com/tfs/TB1_39TfXT7gK0jSZFpXXaTkpXa-720-270.png",
        },
        {
            img: "https://img.alicdn.com/tfs/TB1HM7ZceP2gK0jSZFoXXauIVXa-720-270.png",
            
        },
    ]
    res.send(arr)
})

router.get('/rotation', function (req, res, next) {
    var arr = [
        {
            img: "//gw.alicdn.com/tfs/TB1_4haUMTqK1RjSZPhXXXfOFXa-132-132.png",
            title:"鬼市",
            describe:"最好玩的文玩猎奇圈",
            add:"加入"
        },
        {
            img: "//gw.alicdn.com/tfs/TB1gRKWSMHqK1RjSZFEXXcGMXXa-132-132.jpg",
            title:"司法那些事",
            describe:"法拍行业秘密，不看亏",
            add:"加入"
        },
        {
            img: "//gw.alicdn.com/tfs/TB17x5RSHvpK1RjSZPiXXbmwXXa-132-132.jpg",
            title:"凡人房市",
            describe:"买房要注意什么",
            add:"加入"
        },
        {
            img: "//gw.alicdn.com/tfs/TB16xobc2WG3KVjSZFPXXXaiXXa-132-132.png",
            title:"家有萌宠",
            describe:"家有萌宠拆家一把手",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB1J7gJXAL0gK0jSZFAXXcA9pXa-467-504.png",
            title:"老酒集市",
            describe:"名酒辨真假？来这聊",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB1k2JbUMHqK1RjSZJnXXbNLpXa-132-132.jpg",
            title:"玉翠有宝",
            describe:"跟着行家玩，不再掉坑",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB1.XETc8Kw3KVjSZTEXXcuRpXa-319-319.jpg",
            title:"数码爱好者",
            describe:"数码产品测评",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB1tiZZVIbpK1RjSZFyXXX_qFXa-132-132.jpg",
            title:"喝茶玩壶",
            describe:"懂得喝茶，才是懂生活",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB1T7E0U3HqK1RjSZFEXXcGMXXa-132-132.jpg",
            title:"有钱人世界",
            describe:"大牌包包手表怎么挑",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB15_JaUQPoK1RjSZKbXXX1IXXa-132-132.jpg",
            title:"名表天下",
            describe:"世界名表的'秘密' ",
            add:"加入"
        },
        {
            img:"//gw.alicdn.com/tfs/TB1JF5YSHrpK1RjSZTEXXcWAVXa-132-132.jpg",
            title:"破产投资",
            describe:"变'费'为宝",
            add:"加入"
        }

    ]
    res.send(arr)
})

router.get('/marchant', function (req, res, next) {
    var arr = [
        {
            img: "//gw.alicdn.com/tfs/TB1_4haUMTqK1RjSZPhXXXfOFXa-132-132.png",
            name:"房奴小吴",
            describe:"最好玩的文玩猎奇圈",
            img1:"//img.alicdn.com/imgextra/i4/2204150558499/O1CN011AyeID2CeaikNbC2D_!!2204150558499-0-daren.jpg"
        },
        {
            img: "//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i1/2204147378473/O1CN01lsdims2CSgQguSn0w_!!2204147378473-0-beehive-scenes.jpg",
            name:"求知的小儿货",
            describe:"不动产权证书是什么",
            img1:"//img.alicdn.com/imgextra/i3/2204147378473/O1CN01x9apQb2CSgQvKjE2X_!!2204147378473-2-daren.png"
        },
        {
            img: "//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i2/2204141602601/O1CN01D38jGB1V5IjRynioW_!!2204141602601-0-beehive-scenes.jpg",
            name:"方叔说事",
            describe:"为什么有很多人专挑‘老破小’",
            img1:"//img.alicdn.com/imgextra/i3/2204141602601/O1CN01MjAlv51V5IjhCnSSq_!!2204141602601-0-daren.jpg"
        },
        {
            img: "//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i4/2204143648217/O1CN01pF46ea2AZR2KjLlI1_!!2204143648217-2-beehive-scenes.png",
            name:"天才胖哥爱法拍",
            describe:"法拍房贷需要了解什么",
            img1:"//img.alicdn.com/imgextra/i4/2204143648217/O1CN01PZMnai2AZR2Td7CpN_!!2204143648217-2-daren.png"
        },
        {
            img:"//gw.alicdn.com/tfscom/gdp.alicdn.com/shop-logo//50476837/LB2Gbl2iFXXXXbeXXXXXXXXXXXX_!!50476837-0-taesite.jpg",
            name:"不仅布葵",
            describe:"普通品种吉娃娃",
            img1:"https://img.alicdn.com/imgextra/i2/50476837/O1CN0162zj9e20NOTBGr4SE_!!50476837-0-m_tb_svideo_preimg.jpg"
        },
        {
            img:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i1/2200876398348/O1CN01l3Z12A2BXQv7splDx_!!2200876398348-0-beehive-scenes.jpg",
            name:"喝酒的摇滚老炮",
            describe:"世界上最迷人的烈酒，你又被他们迷倒吗？",
            img1:"//img.alicdn.com/imgextra/i4/2201273023484/O1CN01KoPdaj1bbiQm3jEOT_!!2201273023484-0-daren.jpg"
        },
        {
            img:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i4/2201273023484/O1CN01YMiFoE1bbiQSPWhTu_!!2201273023484-0-beehive-scenes.jpg",
            name:"破烂王者钱",
            describe:"这种古灯我已经很久很久没看见了",
            img1:"https://img.alicdn.com/imgextra/i2/2201273023484/O1CN011e0uVA1bbiQm0Mhy9_!!2201273023484-0-daren.jpg"
        },
        {
            img:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i3/2201273212760/O1CN01L7LtL31WG7foLwT1y_!!2201273212760-0-beehive-scenes.jpg",
            name:"玩个小串而已",
            describe:"28个康熙，在朋友家里看到，晒出来大伙看看，",
            img1:"//img.alicdn.com/imgextra/i4/6000000004255/O1CN01OPM5pR1hIpovyoIZM_!!6000000004255-0-qianniuweitao_pic.jpg"
        },
        {
            img:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i1/2200744549530/O1CN01LjT1mU2KGn0vRFP6R_!!2200744549530-0-beehive-scenes.jpg",
            title:"玩串散人",
            describe:"月薪3000是否应该在济南买房",
            add:"https://img.alicdn.com/imgextra/i2/2200877011505/O1CN01kbv0kc1MzKdeMJZqV_!!2200877011505-0-m_tb_svideo_preimg.jpg"
        },
        {
            img:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i4/2200778184372/O1CN011Juaqi1iAQ6zydoht_!!2200778184372-0-beehive-scenes.jpg",
            title:"车友老夏",
            describe:"在长春买房，哪个区房子好",
            add:"https://img.alicdn.com/imgextra/i3/2200877011505/O1CN01fIX0lX1MzKdeM8pxN_!!2200877011505-0-m_tb_svideo_preimg.jpg"
        },
        {
            img:"//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i2/2200877011505/O1CN01flqfiY1MzKbEAbVJN_!!2200877011505-2-beehive-scenes.png",
            title:"老酒百晓生",
            describe:"现在太原买房最好的位置在哪里",
            add:"https://img.alicdn.com/imgextra/i1/2200877011505/O1CN01OVHoNs1MzKdgF3sIt_!!2200877011505-0-m_tb_svideo_preimg.jpg"
        }

    ]
    res.send(arr)
})
module.exports = router;