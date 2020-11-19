import styled from 'styled-components';

import rightImg from '@/assets/img/download.png';
import btnImg from '@/assets/img/banner_sprite.png';

export const BannerWrapper = styled.div`
  background: url(${props =>props.bgImage}) center/6000px;
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }

`

export const BannerLeft = styled.div`
  .carousel {
    width: 730px;
    /* 修改默认btn的样式 */
    ul li button {
      height: 8px;
      width: 8px;
      border-radius: 50%;
    }
  }
  

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${rightImg})

`
export const BannerControl = styled.div`
position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-31px);
  

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btnImg});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }

`