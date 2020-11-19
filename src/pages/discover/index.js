import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';


import { discoverMenu } from '@/common/local-data';
import { NavLink } from 'react-router-dom';

import {
  DiscoverWrapper,
  TopMenu
} from './style';


export default memo(function YADiscover(props) {
// 提取discover对应路由route；
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) =>{
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
        {renderRoutes(route.routes)}
      </div>
    </DiscoverWrapper>
  )
})
