import React, { Component } from 'react';
import DataService from '../services/DataService';
import { isEmptyObject } from '../services/UtilsLinks';
import { SearchBox } from './Search';
import { AlbumContainer } from './Albums';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      results: {},
      artistAlbums: {},
      inputVaule: '',
      artist: {},
      noSuchArtist: false
    };
  }

  componentDidMount() {
    this.timer = null;
  }

  onChange = async (value) => {
    clearTimeout(this.timer);
    this.setState({ inputVaule: value, noSuchArtist: false });
    this.timer = setTimeout(async () => {
      const results = await DataService.basicSearch(value, 3);
      const artists = [];
      if (results !== null) {
        results.data.forEach((item) => {
          if (artists.indexOf(item.artist.name) === -1) {
            artists.push(item.artist.name);
          }
        });
      }
      this.setState({ dataSource: artists, results });
    }, 0);
  }

  onPress = async () => {
    this.setState({ noSuchArtist: false });
    if (this.state.inputVaule.length > 0
      && Object.keys(this.state.results).length > 0) {
      const itemArtist = this.state.results.data.find(item => item.artist.name === this.state.inputVaule);
      if (itemArtist === undefined) {
        this.setState({ noSuchArtist: true });
      } else {
        const artist = await DataService.basicSearch(itemArtist.artist.name, 5);
        this.setState({ artist: artist.data });
      }
    } else {
      this.setState({ noSuchArtist: true });
    }
  }

  render() {
    return (
        <section className="App">
        <div className="searchBox">
          <SearchBox
            inputVaule={this.state.inputVaule}
            dataSource={this.state.dataSource}
            onChange={this.onChange}
            onClick={this.onPress}
            />
        </div>
        {this.state.noSuchArtist && <div className="no-artist">
          <p>There is no such artist! Please, search again and choose artists from the list!</p>
        </div>}
        { isEmptyObject(this.state.artist) && <AlbumContainer artistsData={this.state.artist} /> }
        </section>
    );
  }
}


export default App;
