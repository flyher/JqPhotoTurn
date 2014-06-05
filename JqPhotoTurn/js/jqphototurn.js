
var isRunning;
var frequency;
var hide;
var movec;
var autoplay;

function AdItem(desc, Photo, url) {
    this.desc = desc;
    this.Photo = Photo;
    this.url = url;
}

function operation() {
    addesc = $("#addesc");
    img[0] = $("#imgSmallLeft");
    img[1] = $("#imgMiddleLeft");
    img[2] = $("#imgBig");
    img[3] = $("#imgMiddleRight");
    img[4] = $("#imgSmallRight");
    img[5] = $("#imgHidden");
    for (i = 0; i < img.length; i++) {
        img[i].attr("src", ad[i].Photo);
    };

    addesc.html(ad[2].desc);
    autoplay = setInterval("move('r')", 4000);
    //    $("#dLocalHomesCarousel").find("img").mouseover(function(){
    //         clearInterval(autoplay);
    //		 isRunning = 'false';
    //    });
    //    
    //    $("#dLocalHomesCarousel").find("img").mouseout(function(){
    //         autoplay= setInterval("move('r')",2000);
    //		 isRunning = 'true';
    //    });

}


function move(direction) {
    if (isRunning != 'udefined' && isRunning == 'true')
        return;
    frequency = 20;
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        frequency = 15;
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        frequency = 20;
    }
    i = 0;
    if (direction == 'r') {
        cur = cur + 1;
        img[5].css({ left: "1110px" });
        hide = setInterval("right()", frequency);
        isRunning = 'true';
    }
    if (direction == 'l') {
        cur = cur - 1;
        img[5].css({ left: "80px"});//设置初始化最左边出现的位置

        var pos = position - 1;
        if (pos < 0)
            pos = pos + ad.length;
        img[5].attr("src", ad[pos].Photo);
        hide = setInterval("left()", frequency);
        isRunning = 'true';
    }
    if (cur > (ad.length - 1))
        cur = 0;
    if (cur < 0)
        cur = ad.length - 1;
    addesc = $("#addesc");
    addesc.html(ad[cur].desc);
};

function moveC(direction) {
    if (isRunning != 'true') {
        move(direction);
        clearInterval(movec);
    }
}

function moveD(direction) {
    move(direction);
    if ('r' == direction) {
        movec = setInterval("moveC('r')", 5);
    } else {
        movec = setInterval("moveC('l')", 5);
    }
}

function right() {
    i++;

    var img0H = parseFloat(img[0].css("height").replace("px", ''));
    var img0W = parseFloat(img[0].css("width").replace("px", ''));
    var img0L = parseFloat(img[0].css("left").replace("px", ''));

    var img1H = parseFloat(img[1].css("height").replace("px", ''));
    var img1W = parseFloat(img[1].css("width").replace("px", ''));
    var img1L = parseFloat(img[1].css("left").replace("px", ''));

    var img2H = parseFloat(img[2].css("height").replace("px", ''));
    var img2W = parseFloat(img[2].css("width").replace("px", ''));
    var img2L = parseFloat(img[2].css("left").replace("px", ''));

    var img3H = parseFloat(img[3].css("height").replace("px", ''));
    var img3W = parseFloat(img[3].css("width").replace("px", ''));
    var img3L = parseFloat(img[3].css("left").replace("px", ''));

    var img4H = parseFloat(img[4].css("height").replace("px", ''));
    var img4W = parseFloat(img[4].css("width").replace("px", ''));
    var img4L = parseFloat(img[4].css("left").replace("px", ''));

    var img5H = parseFloat(img[5].css("height").replace("px", ''));
    var img5W = parseFloat(img[5].css("width").replace("px", ''));
    var img5L = parseFloat(img[5].css("left").replace("px", ''));

    //IE兼容
    if (navigator.userAgent.indexOf("MSIE") > 0 && i % 2 == 0) {
        img1L = img1L + 1;
        img2L = img2L + 1;
        img3L = img3L + 1;
    }

    img[0].css({ height: (img0H - 2) + "px", left: (img0L - 2) + "px", width: (img0W - 4) + "px" });
    img[1].css({ height: (img1H - 3) + "px", left: (img1L -6) + "px", width: (img1W - 3) + "px" });
    img[2].css({ height: (img2H - 9) + "px", left: (img2L - 9) + "px", width: (img2W - 9) + "px" });
    img[3].css({ height: (img3H + 8) + "px", left: (img3L - 16) + "px", width: (img3W + 8) + "px" });
    img[4].css({ height: (img4H + 3) + "px", left: (img4L - 8) + "px", width: (img4W + 3) + "px" });
    img[5].css({ height: (img5H + 3) + "px", left: (img5L - 5) + "px", width: (img5W + 4) + "px" });

    if (i > 19) {
        clearInterval(hide);
        reset();
        roll('r');
        isRunning = 'false';
    }
}

function left() {
    i++;
    var img0H = parseFloat(img[0].css("height").replace("px", ''));
    var img0W = parseFloat(img[0].css("width").replace("px", ''));
    var img0L = parseFloat(img[0].css("left").replace("px", ''));

    var img1H = parseFloat(img[1].css("height").replace("px", ''));
    var img1W = parseFloat(img[1].css("width").replace("px", ''));
    var img1L = parseFloat(img[1].css("left").replace("px", ''));

    var img2H = parseFloat(img[2].css("height").replace("px", ''));
    var img2W = parseFloat(img[2].css("width").replace("px", ''));
    var img2L = parseFloat(img[2].css("left").replace("px", ''));

    var img3H = parseFloat(img[3].css("height").replace("px", ''));
    var img3W = parseFloat(img[3].css("width").replace("px", ''));
    var img3L = parseFloat(img[3].css("left").replace("px", ''));

    var img4H = parseFloat(img[4].css("height").replace("px", ''));
    var img4W = parseFloat(img[4].css("width").replace("px", ''));
    var img4L = parseFloat(img[4].css("left").replace("px", ''));

    var img5H = parseFloat(img[5].css("height").replace("px", ''));
    var img5W = parseFloat(img[5].css("width").replace("px", ''));
    var img5L = parseFloat(img[5].css("left").replace("px", ''));
    //1-5张图片动作
    img[0].css({ height: (img0H + 3) + "px",left: (img0L + 6) + "px", width: (img0W + 3) + "px" });
    img[1].css({ height: (img1H + 9) + "px",left: (img1L + 9) + "px", width: (img1W + 9) + "px" });
    img[2].css({ height: (img2H - 9) + "px",left: (img2L + 18) + "px", width: (img2W - 10) + "px" });
    img[3].css({ height: (img3H - 3) + "px",left: (img3L + 8) + "px", width: (img3W - 3) + "px" });
    img[4].css({ height: (img4H - 3) + "px",left: (img4L + 6) + "px", width: (img4W -3) + "px" });
    //左侧进入的图片
    img[5].css({ height: (img5H + 3) + "px", left: (img5L + 5) + "px", width: (img5W + 4) + "px" });

    if (i > 19) {
        clearInterval(hide);
        reset();
        roll('l');
        isRunning = 'false';
    }
}

function reset() {
    img[0].css({ width:"100px",height:"60px",left: "10px"});
    img[1].css({ width:"160px",height:"120px",left: "120px" });
    img[2].css({ width:"340px",height:"300px",left: "290px" });
    img[3].css({ width:"160px",height:"120px",left: "640px" });
    img[4].css({ width:"100px",height:"60px",left: "810px" });
    img[5].css({ width:"20px",height:"0px",left: "120px"});
}

function roll(direction) {
    var imgLength = img.length;
    var dataLength = ad.length;
    var start = position;
    if ('r' == direction) {
        for (var i = 0; i < imgLength; i++) {
            start = start + 1;
            if (start > (dataLength - 1))
                start = start - dataLength;
            //img[i].src = ad[start].Photo;
            img[i].attr("src", ad[start].Photo);
        }
        position = position + 1;
        if (position > (dataLength - 1))
            position = position - dataLength;
    }
    if ('l' == direction) {
        var a = true;
        for (var i = 0; i < imgLength; i++) {
            if (a) {
                start = start - 1;
                if (start < 0) {
                    start = start + dataLength;
                    a = false;
                }
                if (start < (dataLength - 1)) {
                    a = false;
                }
            } else {
                start = start + 1;
                if (start > (dataLength - 1)) {
                    start = start - dataLength;
                    a = true;
                }
            }
            img[i].attr("src", ad[start].Photo);
            if (start == (dataLength - 1)) {
                start = -1;
            }
        }
        position = position - 1;
        if (position < 0)
            position = position + dataLength;
    }
}


function openNewPage() {
    window.open(ad[cur].url);
}

var position = 0;
var img = new Array();
var addesc;
var cur = 2;
var i;
var ad = new Array();
function ready(json) {
    json = json.split("|");
    for (var i = 0; i < json.length; i++) {
        var img = json[i].split("#");
        for (var j = 0; j < img.length; j++) {
            ad[i] = new AdItem("<div style=\"width:935px;margin-top:8px;\"><p style=\"color:#A70000;font-size:12pt;font-weight:bold;text-align:center;\">" + img[1] + "</p>&nbsp;&nbsp;<br/><p style=\"color:black;font-size:11pt;text-align:left;\">" + img[2] + "</p></div>", "img/" + img[3], "img/" + img[3]);
        }
    }
    $(document).ready(function () {
        operation();
    });
}

function showphototurn() {
    ///<summary>调用方法</summary>
    var data = "11#标题1#正文1#1.jpg|12#标题2#正文2#2.jpg|13#标题3#正文3#3.jpg|14#标题4#正文4#4.jpg|15#标题5#正文5#5.jpg|16#标题6#正文6#6.jpg|17#标题7#正文7#7.jpg|18#标题8#正文8#8.jpg";
    ready(data);
}

