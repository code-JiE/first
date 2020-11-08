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
        localLiIcon[index].style.backgroundPositionY = index * -32 + 'px'
    }

})()