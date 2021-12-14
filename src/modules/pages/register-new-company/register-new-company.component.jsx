import React from 'react';
import PropTypes from 'prop-types';
import { TitleBlockComponent } from '../../containers/title-block/title-block.component';
import { ContentBlockComponent } from '../../containers/content-block/content-block.component';
import { EditFieldComponent } from '../../common/components/edit-field/edit-field.component';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';
import { Helmet } from 'react-helmet';

export function NewCompanyRegistration() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Register a new company</title>
            </Helmet>
            <TextHeaderComponent title={'Register a new company'} />
            <form action=''>
                <div className='p-5 mx-5 d-flex flex-column'>
                    <TitleBlockComponent title={`Edit information`}>
                        You can register a new company.
                    </TitleBlockComponent>
                    <ContentBlockComponent title={`Company name`}>
                        <EditFieldComponent
                            label='Enter company name.'
                            width='450px'
                        />
                        <button
                            className='btn btn-outline-dark mt-2'
                            type='submit'>
                            Create a company
                        </button>
                    </ContentBlockComponent>
                </div>
            </form>
        </main>
    );
}
