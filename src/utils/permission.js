import store from '@/store';

/**
 * 字符权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkPermi(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters && store.getters.permissions;
    const permissionDatas = value;
    const all_permission = '*:*:*';

    const hasPermission = permissions.some((permission) => all_permission === permission || permissionDatas.includes(permission));

    if (!hasPermission) {
      return false;
    }
    return true;
  }
  console.error('need roles! Like checkPermi="[\'system:user:add\',\'system:user:edit\']"');
  return false;
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkRole(value) {
  if (value && value instanceof Array && value.length > 0) {
    const currentRole = store.getters && store.getters.role;
    const permissionRoles = value;
    const super_admin = 'admin';

    const hasRole = super_admin === currentRole || permissionRoles.includes(currentRole);

    if (!hasRole) {
      return false;
    }
    return true;
  }
  console.error('need roles! Like checkRole="[\'admin\',\'editor\']"');
  return false;
}
