import React, { useEffect } from 'react';
import { TitleBlockComponent } from '../../containers/title-block/title-block.component';
import { ContentBlockComponent } from '../../containers/content-block/content-block.component';
import { EditFieldComponent } from '../../common/components/edit-field/edit-field.component';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';
import { Helmet } from 'react-helmet';
import { useStore } from 'effector-react';
import {
    companyStore,
    getCompanies,
    createCompany,
} from '../../app/company-store';
import { Form, Formik } from 'formik';

export function NewCompanyRegistration() {
    const companies = useStore(companyStore);
    useEffect(() => {
        getCompanies();
    }, []);
    const formInitValues = { companyName: '' };
    const onSubmit = (values) => {
        createCompany(values.companyName);
    };
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Register a new company</title>
            </Helmet>
            <TextHeaderComponent title={'Register a new company'} />
            <Formik initialValues={formInitValues} onSubmit={onSubmit}>
                <Form>
                    <div className='p-5 mx-5 d-flex flex-column'>
                        <TitleBlockComponent title={`Edit information`}>
                            You can register a new company.
                        </TitleBlockComponent>
                        <ContentBlockComponent title={`Company name`}>
                            <EditFieldComponent
                                label='Enter company name.'
                                name='companyName'
                                width='450px'
                            />
                            <button
                                className='btn btn-outline-dark mt-2'
                                type='submit'>
                                Create a company
                            </button>
                        </ContentBlockComponent>
                    </div>
                </Form>
            </Formik>
            <ul className='p-5 mx-5 d-flex flex-column'>
                {companies.map((el) => {
                    return (
                        <li key={el.id}>
                            <p>{el.id}</p>
                            <p>{el.name}</p>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
