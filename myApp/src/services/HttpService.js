import Taro from '@tarojs/taro';

/**
 * options:Object
 * url:string,
 * data:json,
 * header:json
 */

export default {
  request(option, method = 'GET') {
    return Taro.request({
      ...option,
      method,
      header: {
        // 'content-type': 'application/json', // 默认值
        ...option.header,
        // "Access-Control-Allow-Origin": "http://192.168.22.179:10086/"
      },
    });
  },
  get(option) {
    return this.request(option, 'GET');
  }
}

