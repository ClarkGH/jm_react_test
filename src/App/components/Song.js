import React from 'react';

const Song = (props) => {
  return(
    <div>
      <h2 className="song-title">{props.songName}</h2>
      <p className="song-length">Length: {props.songLength}s</p>
      <p className="song-date">Year: {props.songYear}</p>
    </div>
  );
}

export default Song;