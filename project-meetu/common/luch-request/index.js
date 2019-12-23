import Request from './request.js';

/*
	项目接口文档: https://www.showdoc.cc/610093945021818?page_id=3584803530486858
	第一版v1(第一版接口放在v1下)
*/
const http_v1 = new Request();

http_v1.setConfig((config) => { /*设置全局配置*/
	config.baseUrl += '/v1/',
	config.header = {
		...config.hearder,
		test: 'yk'
	},
	// #ifdef APP-PLUS
	config.sslVerify = false
	// #endif
	return config;
})

http_v1.interceptor.request((config, cancel) => { /*请求之前拦截器*/
	console.log('拦截', config);
	
	//调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
	return config;
})

/**
 * 自定义验证器, 返回true则进入响应拦截器的响应成功函数(resolve),否则进入响应拦截器的响应错误函数(reject)
 * @params { Number } statusCode - 请求响应体statusCode(只读)
 * @return { Boolean } 为true,则resolve, 否则reject
 * */
http_v1.validateStatus = (statusCode) => {
	return statusCode === 200
}

http_v1.interceptor.response((response) => { /* 请求之后拦截器 */
	if (response.data.code !== 200) {
		return Promise.reject(response)
	}
	return response
}, (response) => { // 请求错误的处理
	return response; 
})

// 还可以接着重新创建一个请求,


export {
	http_v1
}