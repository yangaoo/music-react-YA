import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommend,
  getNewAlbums,
  getTopList

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

const changeUpList = (res) =>({
  type: actionTypes.CHANGE_UP_LIST,
  upList: res.playlist
})

const changeNewList = (res) =>({
  type: actionTypes.CHANGE_NEW_LIST,
  newList: res.playlist
})

const changeOriginList = (res) =>({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  originList: res.playlist
})

export const getTopBannersAction = () =>{
  return dispatch => {
    getTopBanners().then(res =>{
      dispatch(changeTopBanners(res))
    })
  }
}
// 热门推荐
export const getHotRecommendAction = (limit) =>{
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommend(res))
    })
  }
}

// 新碟上架
export const getNewAlbumAction = (limit) =>{
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbums(res))
    })
  }
}

// 榜单
export const getUpListAction = (idx) =>{
  return dispatch =>{
    getTopList(idx).then(res => {
      dispatch(changeUpList(res));
    })
  }
}

export const getNewListAction = (idx) =>{
  return dispatch =>{
    getTopList(idx).then(res => {
     dispatch(changeNewList(res));
    })
  }
}

export const getOriginListAction = (idx) =>{
  return dispatch =>{
    getTopList(idx).then(res => {
      dispatch(changeOriginList(res));
    })
  }
}



