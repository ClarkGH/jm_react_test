import React from 'react';
import PropTypes from 'prop-types';

const Song = (props) => {
  return(
    <div>
      <h2 className="song-title">{props.songName}</h2>
      <p className="song-length">Length: {props.songLength}s</p>
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