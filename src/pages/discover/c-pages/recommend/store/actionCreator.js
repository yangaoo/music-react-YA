import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommend,
  getNewAlbums

} from '@/services/recommend';

const changeTopBanners = (res) =>({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

const changeHotRecommend = (res) =>({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

const changeNewAlbums = (res) =>({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
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

export const getNewAlbumAction = (limit) =>{
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbums(res))
    })
  }
}

