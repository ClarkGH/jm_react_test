import React from 'react';

const Song = (props) => {
  return(
    <div className="song">
      <h2 className="song-title">{props.songName}</h2>
      <p className="song-length">Length: {props.songLength}</p>
      <p className="song-date">Year: {props.songYear}</p>
    </div>
  );
}

export default Song;