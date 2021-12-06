import React from 'react';
import PropTypes from 'prop-types';
import { makeAvatarText } from '../common/components/avatar/avatar.component';

export function TeamReportsLineItem({ firstName, lastName, reportInfo }) {
    return (
        <div className='row flex-nowrap bg-white w-85 align-items-center mb-2 shadow'>
            <div className='col-sm-3 row flex-nowrap justify-content-around'>
                <div className='col px-4'>
                    <div className='user-avatar-circle justify-content-center align-items-center'>
                        <h5 className='text-dark m-0'>
                            {makeAvatarText(firstName, lastName)}
                        </h5>
                    </div>
                </div>
                <div className='col-md-8 align-items-end py-2 px-2'>
                    <div className='row font-weight-500'>
                        {firstName ? firstName + ' ' : ''}
                        {lastName}
                    </div>
                    <div className='row text-black-50 font-weight-500'>
                        {reportInfo ? reportInfo : 'is missing a report'}
                    </div>
                </div>
            </div>
        </div>
    );
}

TeamReportsLineItem.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    reportInfo: PropTypes.string,
};
