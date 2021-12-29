import React from 'react';
import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';

export function AnchorDarkLink({ anchor, activeParam, ...props }) {
    let [searchParams] = useSearchParams();
    const param = searchParams.get(activeParam.param);
    const isActive =
        activeParam.value !== '' ? param === activeParam.value : param !== null;
    return (
        <li className='page-item'>
            <Link
                to={anchor}
                className={`page-link bg-dark ${
                    isActive ? 'text-warning' : ''
                }`}>
                {props.children}
            </Link>
        </li>
    );
}
AnchorDarkLink.propTypes = {
    children: PropTypes.any,
    anchor: PropTypes.string,
    activeParam: PropTypes.shape({
        param: PropTypes.string,
        value: PropTypes.string,
    }),
};
