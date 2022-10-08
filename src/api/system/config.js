import request from '@/utils/request';

// 查询参数列表
export function listConfig(query) {
  return request({
    url: '/system/config/list',
    method: 'get',
    params: query,
  });
}

// 查询参数详细
export function getConfig(configId) {
  return request({
    url: `/system/config/${configId}`,
    method: 'get',
  });
}

// 根据字典类型查询字典数据信息
export function getDictType(dictType) {
  return request({
    url: `/system/config/dict/${dictType}`,
    method: 'get',
  });
}


// 修改参数配置
export function updateConfig(data) {
  return request({
    url: '/system/config',
    method: 'put',
    data,
  });
}


// 刷新参数缓存
export function refreshCache() {
  return request({
    url: '/system/config/refreshCache',
    method: 'delete',
  });
}
