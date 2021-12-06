import React from 'react';

import { ContentBlockComponent } from '../../modules/edit-member-information/content-block.component';

export default {
    title: 'Elements/Edit member/Content block',
    component: ContentBlockComponent,
};

const Template = (args) => <ContentBlockComponent {...args} />;
export const BasicProfileInformation = Template.bind({});
BasicProfileInformation.args = {
    title: 'Basic profile information',
    children: (
        <div>
            <div className='form-group mt-2 mb-2'>
                <label htmlFor='first-name' className='fw-bold'>
                    First Name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='first-name'
                    value='Anatoliy'
                />
            </div>
            <div className='form-group mt-2 mb-2'>
                <label htmlFor='last-name' className='fw-bold'>
                    Last Name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='last-name'
                    value='Kolodkin'
                />
            </div>
            <div className='form-group mt-2 mb-2'>
                <label htmlFor='title' className='fw-bold'>
                    Title
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='title'
                    value='CEO'
                />
            </div>
            <button className='btn btn-warning mt-2' type='submit'>
                Save
            </button>
        </div>
    ),
};

export const InviteLink = Template.bind({});
InviteLink.args = {
    title: "Anatoliy's invite link",
    children: (
        <div>
            <p>
                Share the following link to invite team members on
                Anatoliy&apos;s behalf.
            </p>
            <label className='d-none' htmlFor='link-for-invite'>
                Link to invite team members
            </label>
            <textarea
                id='link-for-invite'
                className='form-control copy-link-textarea mx-auto'
                readOnly>
                https://github.com/codemakeracademy/weekly-team-report-html/pull/75/commits/7826b47b6fabe366fbb895b60c49c7e4a670b296
            </textarea>
            <button className='btn btn-warning m-3 mx-auto' type='button'>
                Copy Link
            </button>
        </div>
    ),
};
