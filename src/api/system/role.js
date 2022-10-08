import request from '@/utils/request';

// 查询角色列表
export function listRole(query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query,
  });
}

// 查询角色详细
export function getRole(roleId) {
  return request({
    url: `/system/role/${roleId}`,
    method: 'get',
  });
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/system/role',
    method: 'post',
    data,
  });
}

// 修改角色
export function updateRole(data) {
  return request({
    url: '/system/role',
    method: 'put',
    data,
  });
}

// 角色数据权限
export function changeDataScope(data) {
  const { roleId } = data;
  return request({
    url: `/system/role/${roleId}/dataScope`,
    method: 'put',
    data,
  });
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status,
  };
  return request({
    url: `/system/role/${roleId}/status`,
    method: 'put',
    data,
  });
}

// 删除角色
export function deleteRole(roleId) {
  return request({
    url: `/system/role/${roleId}`,
    method: 'delete',
  });
}

// 查询角色已授权用户列表
export function allocatedUserList(query) {
  const { roleId } = query;
  return request({
    url: `/system/role/${roleId}/allocated/list`,
    method: 'get',
    params: query,
  });
}

// 查询角色未授权用户列表
export function unallocatedUserList(query) {
  const { roleId } = query;
  return request({
    url: `/system/role/${roleId}/unallocated/list`,
    method: 'get',
    params: query,
  });
}

// 取消用户授权角色  弃用
export function deleteRoleOfUser(data) {
  const { roleId, userIds } = data;
  return request({
    url: `/system/role/users/${userIds}/grant`,
    method: 'delete',
    data,
  });
}

// 批量取消用户授权角色
export function deleteRoleOfSomeUser(data) {
  const { roleId, userIds } = data;
  return request({
    url: `/system/role/users/${userIds}/grant/bulk`,
    method: 'delete',
    params: data,
  });
}

// 授权用户选择
export function addRoleOfAllUser(data) {
  const { roleId, userIds } = data;
  return request({
    url: `/system/role/${roleId}/users/${userIds}/grant/bulk`,
    method: 'post',
    data,
  });
}
