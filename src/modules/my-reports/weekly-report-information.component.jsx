import React from 'react';
import PropTypes from 'prop-types';
import unmarked from '../../img/unmarked.svg';
import verySad from '../../img/very-sad.svg';
import sad from '../../img/sad.svg';
import neutral from '../../img/neutral.svg';
import happy from '../../img/happy.svg';
import veryHappy from '../../img/very-happy.svg';

export function WeeklyReportInformation({ stateName, stateLevel, comments }) {
    const classState = [
        'd-flex',
        'justify-content-center',
        'align-items-center',
        'bg-very-happy',
        'p-2',
        'text-light',
        'col-3',
    ];
    let smile;
    switch (stateLevel) {
        case 0:
            smile = unmarked;
            classState.push('bg-unmarked');
            break;
        case 1:
            smile = verySad;
            classState.push('bg-very-sad');
            break;
        case 2:
            smile = sad;
            classState.push('bg-very-sad');
            break;
        case 3:
            smile = neutral;
            classState.push('bg-neutral');
            break;
        case 4:
            smile = happy;
            classState.push('bg-very-happy');
            break;
        case 5:
            smile = veryHappy;
            classState.push('bg-very-happy');
            break;
        default:
            smile = unmarked;
    }
    return (
        <div className='row flex-nowrap m-4'>
            <div className={classState.join(' ')}>
                <div className='col d-flex justify-content-center'>
                    <img src={smile} alt='smile' className='smile big-smile' />
                </div>
                <p className='col text-uppercase mb-0 me-5 pl-0 fw-bold'>
                    {stateName}
                </p>
            </div>
            <p className='text-muted col-9'>
                <i>{comments}</i>
            </p>
        </div>
    );
}

WeeklyReportInformation.propTypes = {
    stateName: PropTypes.string,
    stateLevel: PropTypes.number,
    comments: PropTypes.string,
};

WeeklyReportInformation.defaultProps = {
    stateName: 'Unknown',
    stateLevel: 0,
    comments: 'There were now comments added about morale.',
};
