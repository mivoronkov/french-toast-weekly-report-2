import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ExpandAllContext = React.createContext(false);
export function ExpandAllButton(props) {
    const [toggledState, setToggledState] = useState(false);
    const onToggleHandler = () => {
        setToggledState((prevState) => !prevState);
    };

    return (
        <div className='flex-column align-items-center w-85'>
            <div className='d-flex flex-nowrap  justify-content-end align-items-center my-2'>
                <button
                    type='button'
                    className='btn btn-dark px-4'
                    onClick={onToggleHandler}>
                    {toggledState ? 'Collapse All' : 'Expand All'}
                </button>
            </div>
            <ExpandAllContext.Provider value={toggledState}>
                {props.children}
            </ExpandAllContext.Provider>
        </div>
    );
}

ExpandAllButton.propTypes = {
    children: PropTypes.any,
};
