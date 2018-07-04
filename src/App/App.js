import React from 'react';

import Song from './components/Song'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderedSongs: '',
    }
  }
  
  render() {
    return (<Song songName={this.props.data[0].name} songLength={this.props.data[0].length} songYear={this.props.data[0].year} />);
  }
}

export default App;