import React from 'react';
import PropTypes from 'prop-types';
import './tag-row.styles.scss';

export function TagRowComponent({ tag_names }) {
    let tags = tag_names.map((name, index) => (
        <div className='btn btn-dark' key={index}>
            {name}
        </div>
    ));
    return <div className='d-flex flex-row tag-row flex-wrap'>{tags}</div>;
}

TagRowComponent.propTypes = {
    tag_names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
