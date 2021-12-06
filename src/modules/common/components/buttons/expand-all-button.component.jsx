import React, { useState } from 'react';
import PropTypes, { element } from 'prop-types';
import { ReportCalendar } from '../topbar/report-calendar.component';

export function ExpandAll({ extraClasses }) {
    const [toggledState, setToggledState] = useState(false);
    const onToggleHandler = () => {
        const idCollapsedElement = document.querySelectorAll('.collapse');
        const toggleAction = toggledState ? 'remove' : 'add';
        idCollapsedElement.forEach((element) => {
            element.classList[toggleAction]('show');
        });
        setToggledState((prevState) => !prevState);
    };
    return (
        <div
            className={`d-flex flex-nowrap w-90 justify-content-end align-items-center my-2${
                extraClasses ? ' ' + extraClasses : ''
            }`}>
            <button
                type='button'
                className='btn btn-dark px-4'
                onClick={onToggleHandler}>
                {toggledState ? 'Collapse All' : 'Expand All'}
            </button>
        </div>
    );
}

ExpandAll.propTypes = {
    extraClasses: PropTypes.string,
};
