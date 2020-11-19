import styled from 'styled-components';


export const HeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 4px 20px;
  border-bottom:2px solid #C10D0C;
  background-position: -233px -159px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .left {
    display: flex;
    align-items: center;
    
    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin: 0 20px 5px 5px;
      
    }

    .head-list {
      display: flex;
      .item {
        .divider {
          margin: 0 15px;
          color: #CCCCD6;
        }
      }
    }

  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position:0 -240px;
    }
  }

`
