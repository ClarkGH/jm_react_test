import React from 'react';

import Song from './components/Song'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="song-list">
        {this.props.songs.map(
          (song) => {
            return (<Song songName={song.name} songLength={song.length} songYear={song.year} />);
          }
        )}
      </div>
    );
  }
}

export default App;