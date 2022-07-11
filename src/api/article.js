// api接口
import request from '@/utils/request'

// 按需暴露接口
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
