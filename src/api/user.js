// 封装用户相关接口请求函数
import request from '@/utils/request'

export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 拉黑用户
export const DeleteUser = userId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/blacklists',
    data: {
      target: userId
    }
  })
}

// 关注用户
export const FolloUser = userId => {
  return request({
    method: 'POST',
    url: `/app/v1_0/user/followings`,
    data: {
      target: userId
    }
  })
}

// 取消关注用户
export const CancelFollo = userId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${userId}`
  })
}
