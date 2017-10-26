window.onload = function () {
	
	//1. 获取广告关闭按钮
	//2. 按钮的点击事件
	//3. 隐藏广告界面

	var close = document.getElementById('close');
	close.onclick = function () {
		//获取ad
		var ad = document.getElementById('ad');
		console.log(ad);
		//隐藏某一个DOM元素
		ad.style.display = 'none';
	}



	//登录框的显示
	var loginButton = document.getElementById('login-button');
	console.log(loginButton);
	loginButton.onclick = function () {
		//显示登录界面
		var loginMask = document.getElementById('login-mask');
		loginMask.style.display = 'block';
	}

	//关闭登录界面
	var loginCancel = document.getElementById('login-cancel');
	loginCancel.onclick = function () {
		var loginMask = document.getElementById('login-mask');
		loginMask.style.display = 'none';
	}
}	