import request from '@/utils/request';
import { encrypt, decrypt } from '@/utils/jsencrypt';

// 登录方法
export function login(username, password, code, uuid) {
  const passwordEncrypt = encrypt(password);

  // console.log(passwordEncrypt);
  const data = {
    username,
    password: passwordEncrypt,
    code,
    uuid,
  };
  return request({
    url: '/login',
    headers: {
      isToken: false,
    },
    method: 'post',
    data,
  });
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false,
    },
    method: 'post',
    data,
  });
}

// 获取用户详细信息
export function getLoginUserInfo() {
  return request({
    url: '/getLoginUserInfo',
    method: 'get',
  });
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  });
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false,
    },
    method: 'get',
    timeout: 20000,
  });
}
