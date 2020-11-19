
import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {Carousel} from 'antd';

import  { getTopBannersAction} from '../../store/actionCreator';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';



export default memo(function YABanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux相关，获取数据和进行操作
  const {topBanners} = useSelector(state =>({
    topBanners: state.getIn(["recommend", "topBanners"])
  }),shallowEqual);
  const dispatch = useDispatch();

  // 其他hooks
  const bannerRef = useRef();
  useEffect(() =>{
    dispatch(getTopBannersAction());
  },[dispatch]);
// 当图片轮播时拿到对应的索引；
  const bannerChange = useCallback( (from, to) =>{
    setTimeout(() =>{
      setCurrentIndex(to);
    },0)
  },[])
  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
      <BannerLeft>
        <Carousel className="carousel" effect="fade" autoplay ref={bannerRef}  beforeChange={bannerChange}>
          {
           topBanners.map( item =>{
             return(
              <div className="banner-item" key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt=""/>
              </div>
             )
             
           } ) 
         }
        </Carousel>
      </BannerLeft>
      <BannerRight/>
      <BannerControl>
        <button className="btn left" onClick={e =>bannerRef.current.prev()}></button>
        <button className="btn right" onClick={e =>bannerRef.current.next()}></button>
      </BannerControl>

      

      </div> 
    </BannerWrapper>
  )
})
