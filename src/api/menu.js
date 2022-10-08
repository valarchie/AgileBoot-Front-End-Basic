import request from '@/utils/request';

// 获取路由
export const getRouters = () => request({
  url: '/getRouters',
  method: 'get',
});
