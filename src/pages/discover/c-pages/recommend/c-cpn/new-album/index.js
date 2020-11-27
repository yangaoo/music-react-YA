import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


import { getNewAlbumAction } from '../../store/actionCreator';


import YAHeadRCM from '@/components/header-nav-rec';
import { Carousel } from 'antd';
import YAAlbumCover from '@/components/album-cover';

import { AlbumWrapper } from './style';
export default memo(function YANewAlbum() {

  // redux-hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  // other hooks
  const pageRef = useRef();
  return (
    <AlbumWrapper>
      <YAHeadRCM title="新碟上架" headerList={['']} />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={e =>pageRef.current.prev()}>
        </button>
          <div className="album">
            <Carousel effect="fade"
                      ref={pageRef}>
              {
                [0, 1].map(item => {
                  return (
                    <div className="page" key={item}>
                      {
                        newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                          return (
                            <YAAlbumCover key={iten.id}
                                          info={iten}
                                          size={100}
                                          width={118}
                                          bgPosition="-570px">

                            </YAAlbumCover>
                  )
                })
              }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
       
      <button className="arrow arrow-right sprite_02"
              onClick={e =>pageRef.current.next()}>
      </button>
      </div>
      
    </AlbumWrapper >
  )
})
