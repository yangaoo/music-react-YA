import React from 'react';
import { Redirect } from 'react-router-dom';

import YADiscover from '@/pages/discover';
import YARecommend from '../pages/discover/c-pages/recommend';
import YARank from '../pages/discover/c-pages/rank';
import YASongs from '../pages/discover/c-pages/songs';
import YADjRadio from '../pages/discover/c-pages/dj-radio';
import YAArtist from '../pages/discover/c-pages/artist';
import YANewDiscs from '../pages/discover/c-pages/new-discs';

import YAMine from '@/pages/mine';
import YAFriend from '@/pages/friend';






const routes = [
  {
    path:"/",
    exact: true,
    render:() => (
      <Redirect to = "/discover"/>
    )  
  },
  {
    path:"/discover",
    component: YADiscover,
    routes:[
      {
        path: "/discover",
        exact: true,
        render: () =>(
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: YARecommend
      },
      {
        path: "/discover/ranking",
        component: YARank
      },
      {
        path: "/discover/songs",
        component: YASongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: YADjRadio
      },
      {
        path: "/discover/artist",
        component: YAArtist
      },
      {
        path: "/discover/album",
        component: YANewDiscs
      },
      

    ]
    
  },
  
  {
    path:"/mine",
    component: YAMine
  },
  {
    path:"/friend",
    component: YAFriend
  }
]

export default routes;