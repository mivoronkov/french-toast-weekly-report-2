import React from 'react';
import PropTypes from 'prop-types';
import { TextWithDateHeaderComponent } from '../../headers/text-with-date-header/text-with-date-header.component';
import { TitleBlockComponent } from '../../containers/title-block/title-block.component';
import { ContentBlockComponent } from '../../containers/content-block/content-block.component';
import { EditFieldComponent } from '../../common/components/edit-field/edit-field.component';
import { Helmet } from 'react-helmet';

export function MyCompanyComponent({ companyName, joinedDate }) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>My company</title>
            </Helmet>
            <TextWithDateHeaderComponent
                joinedDate={formatDate(joinedDate)}
                companyName={companyName}
            />
            <div className='p-5 mx-5 d-flex flex-column'>
                <TitleBlockComponent
                    title={`Edit ${companyName}'s information`}>
                    You may edit the company name, as well as
                    deactivate/activate the Weekly Report tool functionality. If
                    you need to edit a team member&apos;s information, you can
                    access that information by seeing the list of team members.
                </TitleBlockComponent>
                <ContentBlockComponent title={`Rename ${companyName}`}>
                    <EditFieldComponent
                        label='Change company name.'
                        width='450px'
                    />
                    <button className='btn btn-outline-dark mt-2' type='submit'>
                        Save name change
                    </button>
                </ContentBlockComponent>
                <ContentBlockComponent
                    title={`See list of ${companyName}'s members`}>
                    <p className='mt-4'>
                        If you need to edit a particular team member, you can
                        see a complete list of team members and visit their
                        profile to make edits.{' '}
                        <b>
                            You will not be able to see a team member&apos;s
                            weekly report.
                        </b>
                    </p>
                    <button className='btn btn-outline-dark mt-2'>
                        See All Team Members
                    </button>
                </ContentBlockComponent>
            </div>
        </main>
    );
}

function formatDate(joinedDate) {
    let dateStringParts = new Intl.DateTimeFormat('en', {
        month: 'long',
        year: 'numeric',
    }).formatToParts(joinedDate);
    return dateStringParts.map((part) => part.value).join(' ');
}

MyCompanyComponent.propTypes = {
    companyName: PropTypes.string.isRequired,
    joinedDate: PropTypes.instanceOf(Date),
};
