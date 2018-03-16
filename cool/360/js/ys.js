// JavaScript Document
/* 各种选项卡 */
function xxk(nav, con) {
  var oYs_remen = document.getElementById(nav);
  var oYs_li = oYs_remen.getElementsByTagName('li');
  var oYs_rm_nr = document.getElementById(con);
  var oYs_ul = oYs_rm_nr.getElementsByTagName('ul');
  for (var i = 0; i < oYs_li.length; i++) {
    oYs_li[i].index = i;
		// 显示第一个ul
		oYs_ul[0].className = 'ys2_lul';
    oYs_li[i].onmouseover = function() {
      for (var i = 0; i < oYs_li.length; i++) {
        oYs_li[i].className = '';
        oYs_ul[i].className = '';
      }
      this.className = 'ys_h3li';
      oYs_ul[this.index].className = 'ys2_lul';
    };
  }
}
/* 顶部电影下拉框 */
function hover(name) {
  var oNav = document.getElementById(name);
  var oDiv = oNav.getElementsByTagName('div')[0];
  oNav.onmouseover = function() {
    oDiv.style.display = 'block';
  };
  oNav.onmouseout = function() {
    oDiv.style.display = 'none';
  };
}
/* 右侧移动效果 */
function bili(bul) {
  var oYs1_rboxul = document.getElementById(bul)
  var ali = oYs1_rboxul.getElementsByTagName('li');
  for (var i = 0; i < ali.length; i++) {
    ali[i].onmouseover = function() {
      for (var i = 0; i < ali.length; i++) {
        ali[i].className = '';
      }
      this.className = 'ys1_rli';
    }
  }
}
window.onload = function() {
  xxk('ys_remen', 'ys_rm_nr')
  xxk('ys_tvplay', 'ys_tv_nr')
  xxk('ys_film', 'ys_film_nr')
  xxk('ys_zy', 'ys_zy_nr')
  xxk('ys_dm', 'ys_dm_nr')
  xxk('ys_ch', 'ys_ch_nr')
  bili('ys1_rboxul')
  bili('ys3_rboxul')
  bili('ys4_rboxul')
  bili('ys6_rboxul')
  //电视剧和电影的id
  hover('nav_tv')
  hover('nav_film')
  /* 上面切换坐标 */
  var oLbtn = document.getElementById('lbtn');
  var oRbtn = document.getElementById('rbtn');
  var oLbox = document.getElementById('ys1_lbox');
  oLbtn.onclick = function() {
    if (oLbox.style.left == '-974px') {
      oLbox.style.left = '0px';
    } else if (oLbox.style.left = '0px') {
      oLbox.style.left = '-974px';
    } else {
      oLbox.style.left = '0px';
    }
  }
  oRbtn.onclick = function() {
    if (oLbox.style.left == '-974px') {
      oLbox.style.left = '0px';
    } else {
      oLbox.style.left = '-974px';
    }
  }
  /* 上面轮播图 */
  var oBimgbox = document.getElementById('bigimg');
  var oBimg = oBimgbox.getElementsByTagName('a');
  var oSimgbox = document.getElementById('smallimg');
  var oSimg = oSimgbox.getElementsByTagName('li');
  var oImgtxt = document.getElementById('img_txt');
  var otImg = oImgtxt.getElementsByTagName('li');
  for (var i = 0; i < oSimg.length; i++) {
    oSimg[i].index = i;
    oSimg[i].onmouseover = function() {
      for (var i = 0; i < oSimg.length; i++) {
        oSimg[i].className = '';
        oBimg[i].style.display = 'none';
        otImg[i].style.display = 'none';
      }
      this.className = 'small_li';
      oBimg[this.index].style.display = 'block';
      otImg[this.index].style.display = 'block';
    };
  }
  /* 上面搜索框 */
  var oHeadtxt = document.getElementById('head_txt');
  var oHeadxl = document.getElementById('head_xl');
  var oHeadli = oHeadxl.getElementsByTagName('li');
  var oHeadp = oHeadxl.getElementsByTagName('p');
  oHeadtxt.onclick = function() {
    if (oHeadxl.style.display == 'none') {
      oHeadxl.style.display = 'block';
      oHeadtxt.style.border = '1px solid #fd8d4e';
      oHeadtxt.value = ''
    } else {
      oHeadxl.style.display = 'none';
      oHeadtxt.style.border = 'none';
      oHeadtxt.value = '横冲直撞好莱坞';
    }
  };
  oHeadxl.onmouseover = function() {
    this.style.display = 'block';
  };
  oHeadxl.onmouseout = function() {
    this.style.display = 'none';
  };
  for (var i = 0; i < oHeadli.length; i++) {
    oHeadli[i].index = i
    oHeadli[i].onclick = function() {
      oHeadtxt.value = oHeadp[this.index].innerHTML;
      oHeadxl.style.display = 'none';
      oHeadtxt.style.border = 'none';
    };
    oHeadli[i].onmouseover = function() {
      for (var i = 0; i < oHeadli.length; i++) {
        oHeadli[i].className = '';
      }
      this.className = 'head_xialali'
    };
  }
};
