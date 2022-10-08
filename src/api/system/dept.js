import request from '@/utils/request';

// 查询部门列表
export function listDept(query) {
  return request({
    url: '/system/dept/list',
    method: 'get',
    params: query,
  });
}

// 查询部门列表（排除当前自身节点）
export function listDeptExcludeCurrentDeptItself(deptId) {
  return request({
    url: `/system/dept/list/exclude/${deptId}`,
    method: 'get',
  });
}

// 查询部门详细
export function getDept(deptId) {
  return request({
    url: `/system/dept/${deptId}`,
    method: 'get',
  });
}

// 查询部门下拉树结构
export function getDeptSelectTree() {
  return request({
    url: '/system/dept/dropdownList',
    method: 'get',
  });
}

// 根据角色ID查询部门树结构
export function getDeptTreeSelectByRole(roleId) {
  return request({
    url: `/system/dept/dropdownList/role/${roleId}`,
    method: 'get',
  });
}

// 新增部门
export function addDept(data) {
  return request({
    url: '/system/dept',
    method: 'post',
    data,
  });
}

// 修改部门
export function updateDept(data) {
  return request({
    url: '/system/dept',
    method: 'put',
    data,
  });
}

// 删除部门
export function deleteDept(deptId) {
  return request({
    url: `/system/dept/${deptId}`,
    method: 'delete',
  });
}
