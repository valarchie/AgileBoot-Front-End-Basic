import store from '@/store';

/**
 * 现在大部分地方直接用v-hasPermission 指令来判断
 * @param {*} permission
 * @returns
 */

function authPermission(permission) {
  const allPermission = '*:*:*';
  const permissions = store.getters && store.getters.permissions;
  if (permission && permission.length > 0) {
    return permissions.some((v) => allPermission === v || v === permission);
  }
  return false;
}

function authRole(role) {
  const superAdmin = 'admin';
  const currentRole = store.getters && store.getters.role;
  if (role && !currentRole) {
    return superAdmin === currentRole || currentRole === role;
  }
  return false;
}

export default {
  // 验证用户是否具备某权限
  hasPermission(permission) {
    return authPermission(permission);
  },
  // 验证用户是否含有指定权限，只需包含其中一个
  hasAnyPermission(permissions) {
    return permissions.some((item) => authPermission(item));
  },
  // 验证用户是否含有指定权限，必须全部拥有
  hasPermissions(permissions) {
    return permissions.every((item) => authPermission(item));
  },
  // 验证用户是否具备某角色
  hasRole(role) {
    return authRole(role);
  },
  // 验证用户是否含有指定角色，只需包含其中一个
  hasAnyRole(roles) {
    return roles.some((item) => authRole(item));
  },
  // 验证用户是否含有指定角色，必须全部拥有
  hasRoles(roles) {
    return roles.every((item) => authRole(item));
  },
};
