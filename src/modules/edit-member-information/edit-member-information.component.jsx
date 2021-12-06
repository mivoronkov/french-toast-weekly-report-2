import React from 'react';
import { ProfileHeaderComponent } from '../common/components/profile-header/profile-header.component';
import { ContentBlockComponent } from './content-block.component';
import { TagRowComponent } from './tag-row.component';
import { TitleBlockComponent } from './title-block.component';
import { EditFieldComponent } from './edit-field.component';
import PropTypes from 'prop-types';

export function EditMemberInformation({
    firstName,
    lastName,
    title,
    email,
    avatar = '',
    leadersToReport = [],
    reportingMembers = [],
    inviteLink,
}) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <ProfileHeaderComponent
                first_name={firstName}
                last_name={lastName}
                email={email}
                avatar_path={avatar}
            />
            <div className='p-5 mx-5 d-flex flex-column'>
                <TitleBlockComponent title={`Edit ${firstName}'s information`}>
                    You may assign leaders or team members to this person, as
                    well as deactivate their account if they no longer work for
                    your organization.
                </TitleBlockComponent>
                <ContentBlockComponent title='Basic profile information'>
                    <EditFieldComponent
                        label='First Name'
                        width='280px'
                        value={firstName}
                    />
                    <EditFieldComponent
                        label='Last Name'
                        width='340px'
                        value={lastName}
                    />
                    <EditFieldComponent
                        label='Title'
                        width='400px'
                        value={title}
                    />
                    <button className='btn btn-warning mt-2' type='submit'>
                        Save
                    </button>
                </ContentBlockComponent>
                <ContentBlockComponent
                    title={`${firstName} reports to the following leaders:`}>
                    <TagRowComponent tag_names={leadersToReport} />
                    <a href='#'>
                        <button
                            className='btn btn-outline-dark mt-3'
                            type='button'>
                            Edit Leader(s)
                        </button>
                    </a>
                </ContentBlockComponent>
                <ContentBlockComponent title='The following team members report to Anatoliy:'>
                    <TagRowComponent tag_names={reportingMembers} />
                    <button className='btn btn-outline-dark mt-3' type='button'>
                        Edit Member(s)
                    </button>
                </ContentBlockComponent>
                <ContentBlockComponent
                    title={`${firstName}'s invite link`}
                    className='d-flex flex-column justify-content-center'>
                    <p>
                        Share the following link to invite team members on{' '}
                        {firstName}&apos;s behalf.
                    </p>
                    <label className='d-none' htmlFor='link-for-invite'>
                        Link to invite team members
                    </label>
                    <textarea
                        id='link-for-invite'
                        className='form-control copy-link-textarea mx-auto'
                        readOnly>
                        {inviteLink}
                    </textarea>
                    <button
                        className='btn btn-warning m-3 mx-auto'
                        type='button'>
                        Copy Link
                    </button>
                </ContentBlockComponent>
            </div>
        </main>
    );
}

EditMemberInformation.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    inviteLink: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    leadersToReport: PropTypes.arrayOf(PropTypes.string),
    reportingMembers: PropTypes.arrayOf(PropTypes.string),
};
