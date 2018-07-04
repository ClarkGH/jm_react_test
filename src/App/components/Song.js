import React from 'react';
import PropTypes from 'prop-types';

const Song = (props) => {
  return(
    <div className="song-container">
      <h2 className="song-title">{props.songName}</h2>
      <p className="song-length">Length: {props.songLength}</p>
      <p className="song-date">Year: {props.songYear}</p>
    </div>
  );
}

Song.propTypes = {
  songName: PropTypes.string.isRequired,
  songYear: PropTypes.number.isRequired,
  songLength: PropTypes.number.isRequired,
};

export default Song;