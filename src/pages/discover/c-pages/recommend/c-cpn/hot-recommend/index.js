import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import YAHeadRCM from '@/components/header-nav-rec';
import YAThumbnail from '@/components/thumbnail';


import { HotRecommendWrapper } from './style';

import { getHotRecommendAction } from '../../store/actionCreator';

export default memo(function YAHotRecommend() {

  // redux hook
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(["recommend", "hotRecommend"])
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <YAHeadRCM title="热门推荐" headerList={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommend.map(item => {
            return <YAThumbnail key={item.id} info={item}></YAThumbnail>
          })
        }
      </div>

    </HotRecommendWrapper>
  )
})
