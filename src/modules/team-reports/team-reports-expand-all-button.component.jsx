import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TeamReportsLineItem } from './team-reports-line-item.component';

export function TeamReportsExpandAllButton(props) {
    const [toggledState, setToggledState] = useState(false);
    const onToggleHandler = () => {
        setToggledState((prevState) => !prevState);
    };
    let membersReportsInfo = props.data.map((el, index) => (
        <TeamReportsLineItem
            firstName={el.firstName}
            lastName={el.lastName}
            weeklyNotations={el.weeklyNotations}
            weeklyInformation={el.weeklyInformation}
            key={index}
            externalControl={toggledState}
        />
    ));
    return (
        <>
            <div className='d-flex flex-nowrap w-85 justify-content-end align-items-center my-2'>
                <button
                    type='button'
                    className='btn btn-dark px-4'
                    onClick={onToggleHandler}>
                    {toggledState ? 'Collapse All' : 'Expand All'}
                </button>
            </div>
            {props.children}
            {membersReportsInfo}
        </>
    );
}

TeamReportsExpandAllButton.propTypes = {
    children: PropTypes.any,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
            avatarPath: PropTypes.string,
            weeklyInformation: PropTypes.arrayOf(
                PropTypes.shape({
                    stateName: PropTypes.string,
                    stateLevel: PropTypes.number,
                    comments: PropTypes.string,
                })
            ),
            weeklyNotations: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string,
                    title: PropTypes.string,
                })
            ),
            externalControl: PropTypes.bool,
        })
    ),
};
