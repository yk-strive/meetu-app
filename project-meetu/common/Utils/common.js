export const throttle = (fn, gapTime, callback) => {
	if (gapTime == null || gapTime == undefined) {
		gapTime = 1500;
	}
	let _lastTime = null;
	return function() {
		let _nowTime = +new Date();
		if (_nowTime - _lastTime > gapTime || !_lastTime) {
			fn.apply(this, arguments); //将this和参数传给原函数
			_lastTime = _nowTime;
		} else {
			callback && callback.apply(this);
		}
	};
}
export const selectRandom = (num, from, to) => {
	let arr = [];
	let json = {};
	let needNum;

	if (from - to >= 0) {
		console.log(111)
		return '起始值要小于末尾值'
	}

	if (to - from == to) {
		needNum = parseInt(to) + 1;
	} else {
		needNum = to - from;
	}
	if (num > needNum) {
		return
	} else {
		while (arr.length < num) {
			let ranNum = Math.ceil(Math.random() * needNum);
			if (!json[ranNum]) {
				json[ranNum] = 1;
				arr.push(ranNum)
			}
		}
		return arr;
	}
}
