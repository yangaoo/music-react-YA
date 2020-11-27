import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';
import { AlbumWrapper } from './style';
export default memo(function YAAlbumCover(props) {
  // 解构传递的值
  const { info, size = 130, width = 153, bgPosition = "-845px" } = props;
  return (
    <AlbumWrapper size={size} width={width} bgPosition={bgPosition}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.artists.name} />
        <a href="/todo" className="cover image_cover">背景</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
