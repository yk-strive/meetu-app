/**
* 消息会话时间显示
*/
export const timeFormat = (date) => {
	if (!date) return ''
	let newtime
	let nowtime = new Date()
	if (date.constructor !== Date) {
		date = new Date(date.replace(/\./g, '/')) // 解决ios日期显示NAN问题
	 }
	date = new Date(date)
	// 获取消息发送时间
	let Y = date.getFullYear()
	let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	let W = date.getDay()
	let H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
	let Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	console.log('---消息时间---', D);
	// 获取当前时间
	let nowY = nowtime.getFullYear()
	let nowM = nowtime.getMonth() + 1 < 10 ? '0' + (nowtime.getMonth() + 1) : nowtime.getMonth() + 1
	let nowD = nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate()
	let isWeek = Math.abs(date - nowtime) < 7 * 24 * 3600 * 1000
	console.log('---当前时间---', (nowD == D) );
	if (Y < nowY) {
		// 去年
		newtime = Y + '-' + M + '-' + D
	} else {
		if (isWeek) { // Y === nowY && M === nowM && (nowD - D <= 7)
			// 昨天
			if ((nowD - D) === 1) {
				newtime = '昨天';
				console.log('-----newTime---', '昨天' );
			} else if (nowD == D) { // nowD === D
				// 当天
				newtime = H + ':' + Min
				console.log('-----newTime---', '当天--'+ newtime );
			} else {
				// 一周内
				console.log('-----newTime---', '进入一周计算-- 41' );
				newtime = weekFormat(W)
			}
		} else {
			// 一年内
			newtime = M + '-' + D
		}
		// if (isWeek) {
		// 	console.log('-----newTime---', '进入一周计算-- 46' );
		// 	newtime = weekFormat(W)
		// }
		// else {
		// 	// 一年内
		// 	newtime = M + '-' + D
		// }
	}
	console.log('---newtime-----',newtime)
	return newtime
}

// 消息按时间排序
export const compare = (pro) => {
	return function (obj1, obj2) {
		var val1 = obj1[pro]
		var val2 = obj2[pro]
		if (val1 < val2) {
			return 1
		} else if (val1 > val2) {
			return -1
		} else {
			return 0
		}
	}
}
// 星期
export const weekFormat = (num) => {
	let str
	switch (num) {
		case 1:
			str = '星期一'
			break
		case 2:
			str = '星期二'
			break
		case 3:
			str = '星期三'
			break
		case 4:
			str = '星期四'
			break
		case 5:
			str = '星期五'
			break
		case 6:
			str = '星期六'
			break
		default:
			str = '星期天'
	}
	console.log('-----str---', str );
	return str
}

function numberFormat (n) {
	const str = n.toString()
	return str[1] ? str : `0${str}`
}
/**
* 时间格式化方法
*/
export const dateFormat = (date, fmt) => {
	if (!date) return ''
	if (date.constructor !== Date) {
		date = new Date(date)
	}
	const o = {
		'M+': date.getMonth() + 1, // 月份
		'd+': date.getDate(), // 日
		'h+': date.getHours(), // 小时
		'm+': date.getMinutes(), // 分
		's+': date.getSeconds(), // 秒
		'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
		'S': date.getMilliseconds() // 毫秒
	}
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	for (let k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
		}
	}
	return fmt
}
