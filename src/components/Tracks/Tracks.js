import React, { Component } from 'react';
import { List } from 'antd';
import { secondsToHms } from '../../services/UtilsLinks'
import PropTypes from 'prop-types';
import './styles.css';

class Tracks extends Component {
    
    renderItem = (item) => {
        return (
            <ul className="tracks">
                <li>{item.track_position}</li>
                <li>{item.title}</li>
                <li>{item.artist.name}</li>
                <li>{secondsToHms(item.duration)}</li>
                <li>{item.release_date ? item.release_date : 'no info'}</li>
            </ul>
        );
    }
    renderHeader = () => {
        return (
            <ul className="tracks">
                <li>#</li>
                <li>Title</li>
                <li>Artist</li>
                <li>Time</li>
                <li>Release date</li>
            </ul>
        );
    }
    render(){
        return(
            <div>
                <div className="tracksContainer">
                    <div className="tracksCover" style={{ backgroundImage: "url(" + this.props.info.cover + ")"}}></div>
                    <div className="trackListAlbum">
                        <p>{this.props.info.title}</p>
                        <List
                        header={this.renderHeader()}
                        bordered
                        dataSource={this.props.data}
                        renderItem={item => (<List.Item>{this.renderItem(item)}</List.Item>)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

Tracks.propTypes = {
    info: PropTypes.object,
    item: PropTypes.object,
    data: PropTypes.array
  }
export default Tracks;