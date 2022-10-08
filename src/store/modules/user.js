import { login, logout, getLoginUserInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
import defAva from '@/assets/images/profile.jpg';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    role: '',
    permissions: [],
    dictTypes: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_DICT_TYPES: (state, dictTypes) => {
      state.dictTypes = dictTypes;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      const { password } = userInfo;
      const { code } = userInfo;
      const { uuid } = userInfo;
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then((res) => {
          setToken(res.token);
          commit('SET_TOKEN', res.token);
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getLoginUserInfo().then((res) => {
          const { user } = res;
          // console.log(user);
          const avatar = (user.avatar == '' || user.avatar == null) ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;
          // console.log("获取的key"+ res.roleKey)
          // console.log(res.permissions)
          if (res.roleKey) { 
            // 验证返回的roles是否是一个非空数组
            commit('SET_ROLE', res.roleKey);
            commit('SET_PERMISSIONS', res.permissions);
            commit('SET_DICT_TYPES', res.dictTypes);
          } else {
            commit('SET_ROLE', 'ROLE_DEFAULT');
          }
          commit('SET_NAME', user.username);
          commit('SET_AVATAR', avatar);
          resolve(res);
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLE', null);
          commit('SET_PERMISSIONS', []);
          removeToken();
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
