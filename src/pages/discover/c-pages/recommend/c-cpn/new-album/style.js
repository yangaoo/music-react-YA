import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    margin: 20px 0 37px;
  }
    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;

    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 640px;
      height: 150px;
      
     
    }

      .page {
        display: flex !important;
        align-items: center;
        justify-content: space-between;
      }


`