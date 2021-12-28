import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AvatarComponent } from '../common/components/avatar/avatar.component';
import { ExtensibleSmile } from '../common/components/pictures/smile.component';
import { CollapsingCard } from '../my-reports/collapsing-card.component';

export function TeamReportsLineItem({
    firstName,
    lastName,
    avatarPath,
    weeklyInformation,
    weeklyNotations,
    externalControl,
}) {
    const [toggledState, setToggledState] = useState(false);

    let onClickHandler = () => {
        setToggledState((prevState) => !prevState);
    };
    useEffect(() => {
        setToggledState(externalControl);
    }, [externalControl]);

    let classList = [
        'row',
        'flex-nowrap',
        'align-items-center',
        'justify-content-around',
        'p-0',
        'm-0',
        'col-lg-5',
    ];

    let smileImages =
        toggledState || !weeklyInformation ? (
            <div className='col-9'></div>
        ) : (
            weeklyInformation.map((el) => {
                return (
                    <div
                        className='col d-flex justify-content-center'
                        key={el.stateName}>
                        <ExtensibleSmile
                            smileNumber={el.stateLevel}
                            additionalClasses={'big-smile'}
                        />
                    </div>
                );
            })
        );
    const collapsedButtonClasses = ['btn', 'dropdown-toggle', 'col'];
    const cardControlClasses = [
        'row',
        'flex-nowrap',
        'justify-content-between',
        'align-items-center',
        'my-1',
        'w-100',
    ];
    if (toggledState) {
        collapsedButtonClasses.push('btn-dark');
        //cardControlClasses.push('bg-dark');
    } else {
        collapsedButtonClasses.push('btn-white');
        //cardControlClasses.push('bg-white');
    }

    return (
        <div className='row flex-nowrap d-flex flex-column bg-white align-items-center mb-2 mx-0 shadow'>
            <div className={cardControlClasses.join(' ')}>
                <div className='col-sm-3 row flex-nowrap justify-content-around'>
                    <div className='col px-1'>
                        <AvatarComponent
                            lastName={lastName}
                            firstName={firstName}
                            avatarPath={avatarPath}
                        />
                    </div>
                    {weeklyInformation ? (
                        <div className='d-flex justify-content-start align-items-center col-md-8 py-2 px-1'>
                            <div className='row font-weight-500'>
                                {firstName ? firstName + ' ' : ''}
                                {lastName}
                            </div>
                        </div>
                    ) : (
                        <div className='align-items-end col-md-8 py-2 px-1'>
                            <div className='row font-weight-500'>
                                {firstName ? firstName + ' ' : ''}
                                {lastName}
                            </div>
                            <div className='row text-black-50 font-weight-500'>
                                is missing a report
                            </div>
                        </div>
                    )}
                </div>
                {weeklyInformation && weeklyNotations ? (
                    <div className={classList.join(' ')}>
                        {smileImages}
                        <button
                            type='button'
                            className={collapsedButtonClasses.join(' ')}
                            onClick={onClickHandler}>
                            {toggledState ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                ) : null}
            </div>
            {weeklyInformation && weeklyNotations ? (
                <div
                    style={
                        toggledState
                            ? { display: 'block' }
                            : { display: 'none' }
                    }>
                    <CollapsingCard
                        weeklyNotations={weeklyNotations}
                        weeklyInformation={weeklyInformation}
                        isCollapsed={toggledState}
                    />
                </div>
            ) : null}
        </div>
    );
}

TeamReportsLineItem.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
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
    avatarPath: PropTypes.string,
    externalControl: PropTypes.bool,
};
