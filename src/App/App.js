import React from 'react';
import _ from 'lodash';

import Song from './components/Song';

import normalizedStyles from './css/normalize.css';
import mainStyles from './css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedSongs: _.sortBy(this.props.songs, [(song) => { return song.name }]),
      selectedSortOption: 'name',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      selectedSortOption: event.target.value,
      renderedSongs: _.sortBy(
        this.props.songs, 
        [(song) => { 
          return song[event.target.value] }
        ]),
    })
  }
  
  render() {
    return (
      <div>
        <header><h1 className="title">Songs by the Beatles</h1></header>
        <form>
          Sort by: <select className="dropdown" value={this.state.selectedSortOption} onChange={ this.handleChange }>
            <option value="name">Song Name</option>
            <option value="length">Song Length</option>
            <option selected value="year">Song Year</option>
          </select>
        </form>
        <div className="flex-container">
          {this.state.renderedSongs.map(
            (song) => {
              const minutes = Math.floor(song.length / 60);
              let seconds = song.length % 60; 
              if (seconds < 10) {
                seconds = '0' + seconds;
              }
              
              return (
                <Song 
                  songName={ song.name }
                  songLength={ minutes + ':' + seconds }
                  songYear={ song.year } 
                />
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default App;