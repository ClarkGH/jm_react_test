import React from 'react';
import _ from 'lodash';

import Song from './components/Song'

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
      <div className="container">
        <form>
          Sort by <select value={this.state.selectedSortOption} onChange={ this.handleChange }>
            <option value="name">Song Name</option>
            <option value="length">Song Length</option>
            <option selected value="year">Song Year</option>
          </select>
        </form>
        
        {this.state.renderedSongs.map(
          (song) => {
            return (
              <Song 
                songName={ song.name }
                songLength={ Math.floor(song.length/60) + 'm' + song.length%60 + 's' }
                songYear={ song.year } 
              />
            );
          }
        )}
      </div>
    );
  }
}

export default App;