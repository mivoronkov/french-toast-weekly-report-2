import React from 'react';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';
import { Helmet } from 'react-helmet';
import { EditFieldComponent } from '../../common/components/edit-field/edit-field.component';
import PropTypes from 'prop-types';

export function AcceptInviteComponent({ inviterName, company }) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Accept invite</title>
            </Helmet>
            <TextHeaderComponent title={'Accept Invite'} />
            <div className='p-5 mx-5 d-flex flex-column justify-content-center'>
                <p className='mx-auto'>
                    {inviterName} invited you to {company}.
                </p>
                <div className='mx-auto'>
                    <EditFieldComponent label='First name' width='600px' />
                    <EditFieldComponent label='Last name' width='600px' />
                </div>
                <button className='btn btn-warning m-3 mx-auto'>
                    Accept invite
                </button>
            </div>
        </main>
    );
}

AcceptInviteComponent.propTypes = {
    inviterName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
};
