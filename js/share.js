var imgU = 'http://www.sewmyun.com/waimai/images/init_title.png';  // 分享后展示的一张图片
var lineLink = 'www.sewmyun.com/waimai/index.html'; // 点击分享后跳转的页面地址
var descContent = "我的外卖我做主";  // 分享后的描述信息
var shareTitle = '外卖创业记';  // 分享后的标题
	
wx.ready(function(){

	wx.onMenuShareTimeline({
		title: shareTitle, // 分享标题
		link: lineLink, // 分享链接
		imgUrl: imgU, // 分享图标
		success: function () { 
			// 用户确认分享后执行的回调函数
			send_share(7);
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareAppMessage({
		title: shareTitle, // 分享标题
		desc: descContent, // 分享描述
		link: lineLink, // 分享链接
		imgUrl: imgU, // 分享图标
		type: 'link', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () { 
			// 用户确认分享后执行的回调函数
			send_send(7);
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});
});

wx.error(function(res){

});