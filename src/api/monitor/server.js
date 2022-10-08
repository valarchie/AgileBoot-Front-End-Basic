import request from '@/utils/request';

// 获取服务信息
export function getServerInfo() {
  return request({
    url: '/monitor/serverInfo',
    method: 'get',
  });
}
