import React, { memo } from 'react';

import { HeaderWrapper } from './style'

export default memo(function YAHeadRCM(props) {

  const { title, headerList } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="head-list">
          {
            headerList.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">{index === headerList.length - 1?"":"|"}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})