import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useModal } from 'react-hooks-use-modal';
import { ProfileHeaderComponent } from '../../headers/profile-header/profile-header.component';
import { ContentBlockComponent } from '../../containers/content-block/content-block.component';
import { TagRowComponent } from '../../containers/tag-row/tag-row.component';
import { TitleBlockComponent } from '../../containers/title-block/title-block.component';
import { EditFieldComponent } from '../../common/components/edit-field/edit-field.component';
import { EditMembersPopupComponent } from '../../popups/edit-members/edit-members-popup.component';
import './edit-member-information.styles.scss';
import { Helmet } from 'react-helmet';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Formik } from 'formik';
import { useStore } from 'effector-react';
import { getUser, userStore } from '../../store/user-store';
import { apiInvoker } from '../../api/api-axios';

export function EditMemberInformation({
    firstName,
    lastName,
    title,
    email,
    avatar = '',
    leadersToReport = [],
    reportingMembers = [],
    inviteLink,
    allMembers = [],
}) {
    const userInDB = useStore(userStore);

    const [EditLeadersModal, openEditLeaders, closeEditLeaders] = useModal(
        'root',
        {
            preventScroll: true,
            closeOnOverlayClick: false,
        }
    );
    function onLeadersSave() {
        closeEditLeaders();
    }

    const [
        EditReportingMembersModal,
        openEditReportingMembers,
        closeEditReportingMembers,
    ] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false,
    });
    function onReportingMembersSave() {
        closeEditReportingMembers();
    }

    const leadersTagNames = leadersToReport.map(
        (member) => `${member.firstName} ${member.lastName}`
    );
    const membersTagNames = reportingMembers.map(
        (member) => `${member.firstName} ${member.lastName}`
    );

    let { user } = useAuth0();

    // Fix for storybook:
    if (!user) {
        user = {
            given_name: firstName,
            family_name: lastName,
            email: email,
            picture: avatar,
        };
    }

    const formInitValues = {
        firstName: userInDB.firstName,
        lastName: userInDB.lastName,
        title: userInDB.title,
    };
    const onSubmit = async (values, { setSubmitting }) => {
        await apiInvoker.teamMember.updateMember(
            userInDB.companyId,
            userInDB.id,
            values.firstName,
            values.lastName,
            values.title
        );
        await getUser();
        setSubmitting(false);
    };

    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Edit member information</title>
            </Helmet>
            <ProfileHeaderComponent
                first_name={userInDB.firstName}
                last_name={userInDB.lastName}
                email={userInDB.email}
            />
            <div className='p-5 mx-5 d-flex flex-column'>
                <TitleBlockComponent
                    title={`Edit ${userInDB.firstName}'s information`}>
                    You may assign leaders or team members to this person, as
                    well as deactivate their account if they no longer work for
                    your organization.
                </TitleBlockComponent>
                <ContentBlockComponent title='Basic profile information'>
                    <Formik initialValues={formInitValues} onSubmit={onSubmit}>
                        <Form>
                            <EditFieldComponent
                                label='First Name'
                                width='280px'
                                value={userInDB.firstName}
                            />
                            <EditFieldComponent
                                label='Last Name'
                                width='340px'
                                value={userInDB.lastName}
                            />
                            <EditFieldComponent
                                label='Title'
                                width='400px'
                                value={userInDB.title}
                            />
                            <button
                                className='btn btn-warning mt-2'
                                type='submit'>
                                Save
                            </button>
                        </Form>
                    </Formik>
                </ContentBlockComponent>
                <ContentBlockComponent
                    title={`${userInDB.firstName} reports to the following leaders:`}>
                    <TagRowComponent tag_names={leadersTagNames} />
                    <a href='#'>
                        <button
                            className='btn btn-outline-dark mt-3'
                            type='button'
                            onClick={openEditLeaders}>
                            Edit Leader(s)
                        </button>
                    </a>
                </ContentBlockComponent>
                <ContentBlockComponent
                    title={`The following team members report to ${userInDB.firstName}:`}>
                    <TagRowComponent tag_names={membersTagNames} />
                    <button
                        className='btn btn-outline-dark mt-3'
                        type='button'
                        onClick={openEditReportingMembers}>
                        Edit Member(s)
                    </button>
                </ContentBlockComponent>
                <ContentBlockComponent
                    title={`${userInDB.firstName}'s invite link`}
                    className='d-flex flex-column justify-content-center'>
                    <p>
                        Share the following link to invite team members on{' '}
                        {userInDB.firstName}&apos;s behalf.
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
            <EditLeadersModal>
                <EditMembersPopupComponent
                    membersToEdit={leadersToReport}
                    onSave={onLeadersSave}
                    memberType={'Leader'}
                    onClose={closeEditLeaders}
                    availableMembers={allMembers}
                />
            </EditLeadersModal>
            <EditReportingMembersModal>
                <EditMembersPopupComponent
                    membersToEdit={reportingMembers}
                    onSave={onReportingMembersSave}
                    memberType={'Member'}
                    onClose={closeEditReportingMembers}
                    availableMembers={allMembers}
                />
            </EditReportingMembersModal>
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
    leadersToReport: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
        }).isRequired
    ),
    reportingMembers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
        }).isRequired
    ),
    allMembers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
        }).isRequired
    ),
};
