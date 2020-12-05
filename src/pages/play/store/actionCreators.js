import {getSongDetail} from '@/services/play';

import * as actionTypes from './constants';

const changeSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong

})

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      
      dispatch(changeSongAction(res.songs[0]))
    })
  }

}

