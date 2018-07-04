import React from 'react';

import Song from './components/Song'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedSongs: this.props.songs,
    };
  }
  
  render() {
    return (
      <div className="song-list">
        {this.state.renderedSongs.map(
          (song) => {
            return (<Song songName={song.name} songLength={Math.floor(song.length/60) + 'm ' + song.length%60 + 's'} songYear={song.year} />);
          }
        )}
      </div>
    );
  }
}

export default App;