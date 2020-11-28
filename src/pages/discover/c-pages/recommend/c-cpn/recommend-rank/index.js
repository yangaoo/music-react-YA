import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  getUpListAction,
  getNewListAction,
  getOriginListAction
}from '../../store/actionCreator'


import { RankingWrapper } from './style';
import YAHeadRCM from '@/components/header-nav-rec';
import YATopList from '@/components/top-list';

export default memo(function YARecommendRank() {

  //redux hooks
  const {upList, newList, originList} = useSelector(state =>({
    upList: state.getIn(["recommend", "upList"]),
    newList: state.getIn(["recommend", "newList"]),
    originList: state.getIn(["recommend", "originList"]),
  }),shallowEqual)
  const dispatch = useDispatch();
  // other hooks
  useEffect(() =>{
    dispatch(getUpListAction(0));
    dispatch(getNewListAction(2));
    dispatch(getOriginListAction(3));

  },[dispatch])
  return (
    <RankingWrapper>
      <YAHeadRCM title="榜单" headerList ={[""]}></YAHeadRCM>
      <div className="top">
        <YATopList info={upList}/>
        <YATopList info={newList}/>
        <YATopList info={originList}/>
      </div>

    </RankingWrapper>
  )
})
