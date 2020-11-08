import YADiscover from '@/pages/discover';
import YAMine from '@/pages/mine';
import YAFriend from '@/pages/friend';


const routes = [
  {
    path:"/",
    exact: true,
    component: YADiscover
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