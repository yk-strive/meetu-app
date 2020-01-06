export const throttle = (fn, gapTime, callback) => {
    if (gapTime == null || gapTime == undefined) {
        gapTime = 1500;
    }
    let _lastTime = null;
    return function () {
        let _nowTime = + new Date();
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn.apply(this, arguments);   //将this和参数传给原函数
            _lastTime = _nowTime;
        } else {
			callback && callback.apply(this);
		}
    };
}