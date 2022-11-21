import request from '@/utils/request';

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: '/system/menu/list',
    method: 'get',
    params: query,
  });
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: `/system/menu/${menuId}`,
    method: 'get',
  });
}

// 查询菜单下拉树结构
export function getMenuSelectTree() {
  return request({
    url: '/system/menu/dropdownList',
    method: 'get',
  });
}

// 根据角色ID查询菜单下拉树结构
export function getMenuSelectTreeByRole(roleId) {
  return request({
    url: `/system/menu/roleMenuTreeSelect/${roleId}`,
    method: 'get',
  });
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/system/menu',
    method: 'post',
    data,
  });
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: '/system/menu',
    method: 'put',
    data,
  });
}

// 删除菜单
export function deleteMenu(menuId) {
  return request({
    url: `/system/menu/${menuId}`,
    method: 'delete',
  });
}
