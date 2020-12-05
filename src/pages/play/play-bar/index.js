import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';

import { getSongDetailAction } from '../store/actionCreators';
import { Slider } from 'antd';
import {
  PlayBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';
export default memo(function YAPlayBar() {

  // redux-hooks
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["play", "currentSong"])
  }))


  const dispatch = useDispatch();
  // other hooks
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  // 对数据进行处理展示
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  // 歌曲名字
  const songName = currentSong && currentSong.name;
  // 歌手名字
  const singerName = (currentSong?.ar?.[0].name) || "未知歌手";
  // 歌曲时间
  const songTime = currentSong && currentSong.dt;
  const showSongTime = formatDate(songTime, "mm:ss");
  // 播放进度
  const nowTime = formatDate(currentTime, "mm:ss");
  // Slider的播放条进度
  const progress = currentTime/songTime * 100

  //歌曲播放处理函数
  const playMusic = () => {
    // 给audio元素设置相关属性
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play();
  }
  const updateTime = (e) => {
    setCurrentTime(e.target.currentTime * 1000)
  }

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={true}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"
            onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <a href="/#" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} value={progress}/>
              <div className="time">
                <span className="now-time">{nowTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showSongTime}</span>
              </div>

            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={updateTime} />
    </PlayBarWrapper>
  )
})
