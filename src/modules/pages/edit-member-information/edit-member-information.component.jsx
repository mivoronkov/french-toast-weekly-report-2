import React, { useEffect, useState } from 'react';
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
import { Form, Formik } from 'formik';
import { useStore } from 'effector-react';
import { getUserFromDB, userInDBStore } from '../../store/user-in-d-b-store';
import { apiInvoker } from '../../api/api-axios';
import { getAllTeammates, teammatesStore } from '../../store/teammates-store';
import { inviteLinks } from '../../../utils';
import { companyStore, getCompany } from '../../store/company-store';
import { useLocation } from 'react-router-dom';
import { Loading } from '../../common/components/loading/loading.component';

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
    const userInDB = useStore(userInDBStore);
    const company = useStore(companyStore);
    const allTeammates = useStore(teammatesStore);
    const query = useQuery();

    const [initFormValues, setInitFormValues] = useState({
        firstName: '',
        lastName: '',
        title: '',
    });

    const onSubmit = async (values, { setSubmitting }) => {
        console.log('submit');
        await apiInvoker.teamMember.updateMember(
            userInDB.companyId,
            teamMemberToEdit.id,
            values.firstName,
            values.lastName,
            values.title
        );
        await getUserFromDB();
        setSubmitting(false);
        await updateUser();
    };

    const [teamMemberToEdit, setTeamMemberToEdit] = useState(undefined);
    const [_inviteLink, _setInviteLink] = useState(inviteLink);

    const [EditLeadersModal, openEditLeaders, closeEditLeaders] = useModal(
        'root',
        {
            preventScroll: true,
            closeOnOverlayClick: false,
        }
    );
    useEffect(() => {
        getAllTeammates(userInDB.companyId);
    }, [userInDB.companyId]);

    const updateUser = async () => {
        const memberId = query.get('id') ?? userInDB.id;
        if (memberId === undefined) return;
        let tm = await apiInvoker.teamMember.get(userInDB.companyId, memberId);
        tm = tm.data;
        if (tm === undefined) return;
        setInitFormValues({
            firstName: tm.firstName,
            lastName: tm.lastName,
            title: tm.title,
        });
        tm.leaders = await apiInvoker.links.getLeaders(tm.id);
        tm.teammates = await apiInvoker.links.getFollowers(tm.id);
        tm.leadersTagNames = tm.leaders.map(
            (member) => `${member.firstName} ${member.lastName}`
        );
        tm.membersTagNames = tm.teammates.map(
            (member) => `${member.firstName} ${member.lastName}`
        );
        getCompany(tm.companyId);

        _setInviteLink(inviteLinks.generateLink(tm, company.name));
        setTeamMemberToEdit(tm);
    };

    useEffect(updateUser, []);

    async function onLeadersSave(leaders) {
        const leadersId = leaders.map((el) => el.id);
        await apiInvoker.links.updateLeaders(teamMemberToEdit.id, leadersId);
        await getUserFromDB();
        closeEditLeaders();
        await updateUser();
    }
    const [
        EditReportingMembersModal,
        openEditReportingMembers,
        closeEditReportingMembers,
    ] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false,
    });
    async function onReportingMembersSave(followers) {
        const followersId = followers.map((el) => el.id);
        await apiInvoker.links.updateFollowers(
            teamMemberToEdit.id,
            followersId
        );
        getUserFromDB();
        closeEditReportingMembers();
        await updateUser();
    }

    if (teamMemberToEdit === null || teamMemberToEdit === undefined) {
        return <Loading />;
    } else {
        return (
            <main className='flex-grow-1 overflow-auto'>
                <Helmet>
                    <title>Edit member information</title>
                </Helmet>
                <ProfileHeaderComponent
                    first_name={teamMemberToEdit.firstName}
                    last_name={teamMemberToEdit.lastName}
                    email={teamMemberToEdit.email}
                />
                <div className='p-5 mx-5 d-flex flex-column'>
                    <TitleBlockComponent
                        title={`Edit ${teamMemberToEdit.firstName}'s information`}>
                        You may assign leaders or team members to this person,
                        as well as deactivate their account if they no longer
                        work for your organization.
                    </TitleBlockComponent>
                    <ContentBlockComponent title='Basic profile information'>
                        <Formik
                            initialValues={initFormValues}
                            onSubmit={onSubmit}
                            enableReinitialize={true}>
                            <Form>
                                <EditFieldComponent
                                    label='First Name'
                                    width='280px'
                                />
                                <EditFieldComponent
                                    label='Last Name'
                                    width='340px'
                                />
                                <EditFieldComponent
                                    label='Title'
                                    width='400px'
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
                        title={`${teamMemberToEdit.firstName} reports to the following leaders:`}>
                        <TagRowComponent
                            tag_names={teamMemberToEdit.leadersTagNames}
                        />
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
                        title={`The following team members report to ${teamMemberToEdit.firstName}:`}>
                        <TagRowComponent
                            tag_names={teamMemberToEdit.membersTagNames}
                        />
                        <button
                            className='btn btn-outline-dark mt-3'
                            type='button'
                            onClick={openEditReportingMembers}>
                            Edit Member(s)
                        </button>
                    </ContentBlockComponent>
                    <ContentBlockComponent
                        title={`${teamMemberToEdit.firstName}'s invite link`}
                        className='d-flex flex-column justify-content-center'>
                        <p>
                            Share the following link to invite team members on{' '}
                            {teamMemberToEdit.firstName}&apos;s behalf.
                        </p>
                        <label className='d-none' htmlFor='link-for-invite'>
                            Link to invite team members
                        </label>
                        <textarea
                            id='link-for-invite'
                            className='form-control copy-link-textarea mx-auto'
                            readOnly>
                            {_inviteLink}
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
                        membersToEdit={teamMemberToEdit.leaders}
                        onSave={onLeadersSave}
                        memberType={'Leader'}
                        onClose={closeEditLeaders}
                        availableMembers={allTeammates}
                    />
                </EditLeadersModal>
                <EditReportingMembersModal>
                    <EditMembersPopupComponent
                        membersToEdit={teamMemberToEdit.teammates}
                        onSave={onReportingMembersSave}
                        memberType={'Member'}
                        onClose={closeEditReportingMembers}
                        availableMembers={allTeammates}
                    />
                </EditReportingMembersModal>
            </main>
        );
    }
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

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
