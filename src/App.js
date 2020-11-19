import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import store from '@/store';

import routes from '@/router';

import YAAppHeader from '@/components/app-header';
import YAAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YAAppHeader />
        {renderRoutes(routes)}
        <YAAppFooter />
      </HashRouter>
    </Provider>

  )
})
