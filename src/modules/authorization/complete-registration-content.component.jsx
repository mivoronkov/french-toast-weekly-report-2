import React from 'react';
import { EditFieldComponent } from '../common/components/edit-field/edit-field.component';
import { Form, Formik } from 'formik';
import { formikSubmitPlaceholder } from '../../utils';

export function CompleteRegistrationContent() {
    const initFormValues = {
        firstName: '',
        lastName: '',
        companyName: '',
    };
    const onSubmit = (values, { setSubmitting }) => {
        //TODO: add corresponding API call
        formikSubmitPlaceholder(values, { setSubmitting });
    };
    return (
        <div>
            <div className='p-2 container-fluid'>
                <div className='form mx-auto'>
                    <div className='card shadow-sm'>
                        <div className='card-body d-flex flex-column'>
                            <p>
                                To continue using the service you must complete
                                registration.
                            </p>
                            <Formik
                                initialValues={initFormValues}
                                onSubmit={onSubmit}>
                                <Form>
                                    <EditFieldComponent label='First name' />
                                    <EditFieldComponent label='Last name' />
                                    <EditFieldComponent
                                        label='New company name'
                                        name='companyName'
                                    />
                                    <button
                                        type='submit'
                                        className='btn btn-warning mt-3'>
                                        Complete registration
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
