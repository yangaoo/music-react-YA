import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommend

} from '@/services/recommend';

const changeTopBanners = (res) =>({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

const changeHotRecommend = (res) =>({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

export const getTopBannersAction = () =>{
  return dispatch => {
    getTopBanners().then(res =>{
      dispatch(changeTopBanners(res))
    })
  }
}

export const getHotRecommendAction = (limit) =>{
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommend(res))
    })
  }
}