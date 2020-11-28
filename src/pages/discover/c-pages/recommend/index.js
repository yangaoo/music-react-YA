import React, { memo } from 'react';


import YABanner from './c-cpn/banner';
import YAHotRecommend from './c-cpn/hot-recommend';
import YANewAlbum from './c-cpn/new-album';
import YARecommendRank from './c-cpn/recommend-rank';

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
} from './style'

function YARecommend(props) {
 
  return (
    <RecommendWrapper>
      <YABanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <YAHotRecommend></YAHotRecommend>
          <YANewAlbum/>
          <YARecommendRank></YARecommendRank>
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}
export default memo(YARecommend);
// useEffect(() =>{
//   getBanners()
// },[getBanners])
// const mapStateToProps = state =>({
//   topBanners: state.recommend.topBanners
// });
// const mapDispatchToProps = dispatch =>({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps) (memo(YARecommend))