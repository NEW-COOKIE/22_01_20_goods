import { v4 as uuidv4 } from 'uuid';

export const user_token = () => {
  // 先获取token
  let user_token = localStorage.getItem('USERTOKEN');

  // 如果没有token创建一个
  if (!user_token) {
    user_token = uuidv4();
    localStorage.setItem('USERTOKEN', user_token);
  }
  // 返回
  return user_token;
} 
