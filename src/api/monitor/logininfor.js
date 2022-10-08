import request from '@/utils/request';

// 查询登录日志列表
export function list(query) {
  return request({
    url: '/loginInfo/list',
    method: 'get',
    params: query,
  });
}

// 删除登录日志
export function deleteLoginInfo(infoId) {
  return request({
    url: `/loginInfo/${infoId}`,
    method: 'delete',
  });
}

// 清空登录日志
export function cleanLoginInfo() {
  return request({
    url: '/loginInfo/clean',
    method: 'delete',
  });
}
