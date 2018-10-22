import React, { Component } from 'react';
import { List } from 'antd';
import { Album } from './Album';
import { Tracks } from '../Tracks';
import PropTypes from 'prop-types';
import DataService from '../../services/DataService';
import { isEmptyObject } from '../../services/UtilsLinks'
import './styles.css';

class AlbumContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            albumItem: {},
            albumInfo: {}
        }
    }

    onClick = async (item) => {
        const album = await DataService.chooseAlbum(item.tracklist);
        this.setState({albumInfo: item, albumItem: album.data});
        console.log(this.state.albumItem, this.state.albumInfo)
    }
   render(){
    return(
    <div>
    <List
        className="album-list"
        grid={{ gutter: 16, column: 5}}
        dataSource={this.props.artistsData}
        renderItem={item => (
        <List.Item>
            <Album onClick={() => this.onClick(item.album)} item={item.album}
            />
        </List.Item>
       )}
   />
    { isEmptyObject(this.state.albumItem) && <Tracks info={this.state.albumInfo} data={this.state.albumItem} />} 
     </div>);
   }
}

AlbumContainer.propTypes = {
    artistData: PropTypes.array
};
export default AlbumContainer;