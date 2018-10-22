import React from 'react';
import PropTypes from 'prop-types';

const Album = (props) => {
    return(
        <div className="album" onClick={props.onClick}>
            <p>{props.item.title}</p>
            <div className="albumCover"
                style={{ backgroundImage: "url(" + props.item.cover + ")"}}
            ></div>
        </div>
    )
}

Album.propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.object
};
export default Album;