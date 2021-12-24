import React from 'react';

export function InviteYourTeamSuccessMessageComponent() {
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
                <i className='bi bi-caret-right-fill' /> The team member
                didn&apos;t receive your invite?
            </p>
        </>
    );
}
