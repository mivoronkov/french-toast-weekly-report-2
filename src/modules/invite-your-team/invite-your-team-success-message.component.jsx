import React, { useState } from 'react';
import { inviteSuccessMessageLinkStore } from '../store/invite-success-message-link-store';
import { useStore } from 'effector-react';

export function InviteYourTeamSuccessMessageComponent() {
    const inviteLink = useStore(inviteSuccessMessageLinkStore);
    const [showInviteLink, setShowInviteLink] = useState(false);

    return (
        <>
            <div className='form mx-auto card shadow-sm card-body'>
                <div className='pb-2 fw-bold'>
                    Success! Your team member has been invited to the Weekly
                    Report Tool.
                </div>
                <div className='pb-2'>
                    Once they accept your invitation, they&apos;ll be able to
                    create their reports.
                </div>
            </div>
            <p className='form mx-auto pt-3'>
                <div
                    onClick={() => {
                        setShowInviteLink(!showInviteLink);
                    }}>
                    {inviteLink && showInviteLink ? (
                        <i className='bi bi-caret-down-fill' />
                    ) : (
                        <i className='bi bi-caret-right-fill' />
                    )}{' '}
                    The team member didn&apos;t receive your invite?
                </div>
                {inviteLink && showInviteLink ? (
                    <div className='py-2'>
                        You can send him this link directly:
                        <br />
                        <textarea
                            id='link-for-invite'
                            className='form-control copy-link-textarea mx-auto'
                            readOnly>
                            {inviteLink}
                        </textarea>
                    </div>
                ) : null}
            </p>
        </>
    );
}
