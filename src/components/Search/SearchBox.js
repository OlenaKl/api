import React from 'react';
import { AutoComplete, Button } from 'antd';
import PropTypes from 'prop-types';
import './styles.css';

const SearchBox = (props) => (

    <div>
        <AutoComplete
        onChange={props.onChange}
        dataSource={props.dataSource} 
        placeholder="Type here"
            />
        <Button onClick={props.onClick} 
        type="primary">Search</Button>
    </div>
)

SearchBox.propTypes = {
    info: PropTypes.object,
    item: PropTypes.object,
    data: PropTypes.object
}
export default SearchBox;