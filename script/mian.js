(function() {
    // alert('ok')

    //创建local中的li元素
    /*  local列表数据 */
    var dataLocalArr = [{
            text: "攻略·景点",
            imgurl: "img/home-fivemain-sprite2x@v7.15.png"
        }, {
            text: "门票·游玩",
            imgurl: "img/home-fivemain-sprite2x@v7.15.png"
        }, {
            text: "美食林",
            imgurl: "img/home-fivemain-sprite2x@v7.15.png"
        }, {
            text: "周边游",
            imgurl: "img/home-fivemain-sprite2x@v7.15.png"
        }, {
            text: "一日游",
            imgurl: "img/home-fivemain-sprite2x@v7.15.png"
        }]
        /* 创建元素 */
    var localUlBox = document.querySelector('.local-nav')
    var localLiIcon = document.querySelectorAll(".local-nav-icon")
    var localLiText = document.querySelectorAll(".local-nav-text")
    for (let index = 0; index < dataLocalArr.length; index++) {

        localLiText[index].innerHTML = "" + dataLocalArr[index].text
        localLiIcon[index].style.backgroundPositionY = index * -40 + 'px'
    }


    /* nva-mian */
    var navMian = [{
            text: '酒店',
            imgurl: 'img/grid-nav-items-hotel@v7.15.png'
        }, {
            text: '民宿·客栈',
            imgurl: 'img/grid-nav-items-minsu@v7.15.png'
        }, {
            text: '特价·爆款',
            imgurl: 'img/grid-nav-items-hot.png'
        }, {
            text: '机票',
            imgurl: 'img/grid-nav-items-flight@v7.15.png'
        }, {
            text: '火车票',
            imgurl: 'img/grid-nav-items-train.png'
        }, {
            text: '汽车·船票',
            imgurl: 'img/'
        }, {
            text: '专车·租车',
            imgurl: 'img/'
        }, {
            text: '旅游',
            imgurl: 'img/grid-nav-items-travel@v7.15.png'
        }, {
            text: '高铁游',
            imgurl: 'img/grid-nav-items-dingzhi@v7.15.png'
        }, {
            text: '邮轮游',
            imgurl: 'img/'
        }, {
            text: '定制游',
            imgurl: 'img/'
        }]
        // 主导航的每一个a标签
    var navMainAArr = document.querySelectorAll('.nav-main .nav-row a')
    for (let index = 0; index < navMainAArr.length; index++) {
        navMainAArr[index].innerHTML = `<span>${navMian[index].text}</span>`
        navMainAArr[index].style.backgroundImage = `url('img/grid-nav-items-hotel@v7.15.png')`
        navMainAArr[index].style.backgroundImage = `url(${navMian[index].imgurl})`
    }


    /* subnav */
    // 数据
    var dataSubnab = [{
            text: '自由行'
        }, {
            text: 'WiFi电话卡'
        }, {
            text: '保险·签证'
        }, {
            text: '换钞·购物'
        }, {
            text: '向导·包车'
        }, {
            text: '特价机票'
        }, {
            text: '礼品卡'
        }, {
            text: '申卡·借钱'
        }, {
            text: '旅拍'
        }, {
            text: '更多'
        }]
        //li标签
    var subnavLi = document.querySelectorAll('.subnav li')
    var subnavA = document.querySelectorAll('.subnav li a')
    var subnavText = document.querySelectorAll('.subnav .subnav-text')
    var subnavIcon = document.querySelectorAll('.subnav .subnav-icon')
    for (let index = 0; index < subnavLi.length; index++) {
        subnavText[index].textContent = dataSubnab[index].text
        subnavIcon[index].style.backgroundPositionY = index * -28 + 'px'

    }


})()