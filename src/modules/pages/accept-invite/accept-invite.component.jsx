import React from 'react';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';
import { Helmet } from 'react-helmet';
import { EditFieldComponent } from '../../common/components/edit-field/edit-field.component';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { formikSubmitPlaceholder } from '../../../utils';

export function AcceptInviteComponent({ inviterName, company }) {
    const formInitValues = { firstName: '', lastName: '' };
    const onSubmit = (values, { setSubmitting }) => {
        //TODO: replace with API call
        formikSubmitPlaceholder(values, { setSubmitting });
    };
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
                <Formik initialValues={formInitValues} onSubmit={onSubmit}>
                    {({ isSubmitting }) => (
                        <Form className='mx-auto'>
                            <EditFieldComponent
                                label='First name'
                                width='600px'
                            />
                            <EditFieldComponent
                                label='Last name'
                                width='600px'
                            />
                            <div className='text-center'>
                                <button
                                    type='submit'
                                    className='btn btn-warning m-3'
                                    disabled={isSubmitting}>
                                    Accept invite
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </main>
    );
}

AcceptInviteComponent.propTypes = {
    inviterName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
};
