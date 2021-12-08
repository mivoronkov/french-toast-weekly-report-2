import React, { useState } from 'react';
import { InviteYourTeamSuccessMessageComponent } from './invite-your-team-success-message.component';
import { EditFieldComponent } from '../common/components/edit-field/edit-field.component';

export function InviteYourTeamContent() {
    const [showSuccess, setShowSuccess] = useState(false);
    const onClick = () => setShowSuccess(true);

    return (
        <div>
            {showSuccess ? <InviteYourTeamSuccessMessageComponent /> : null}
            <div className='p-2 container-fluid'>
                <div className='form mx-auto'>
                    <div className='card shadow-sm'>
                        <div className='card-body'>
                            <div className='pb-2'>
                                <strong>
                                    Enter the team member you would like to
                                    invite.
                                </strong>
                            </div>
                            <div className='pb-2'>
                                Don&apos;t Worry! You&apos;ll be able to add
                                more team members later.
                            </div>
                            <EditFieldComponent label={'First Name'} />
                            <EditFieldComponent label={'Last Name'} />
                            <EditFieldComponent label={'Email'} />
                            <a>
                                <button
                                    className='btn btn-warning mt-3'
                                    onClick={onClick}>
                                    Invite
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
