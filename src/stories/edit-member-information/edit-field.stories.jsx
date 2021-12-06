import React from 'react';
import { EditFieldComponent } from '../../modules/edit-member-information/edit-field.component';

export default {
    title: 'Edit field',
    component: EditFieldComponent,
};

const Template = (args) => <EditFieldComponent {...args} />;
export const DefaultEditField = Template.bind({});
DefaultEditField.args = {
    label: 'Change company name.',
};

export const EditFieldWithValue = Template.bind({});
EditFieldWithValue.args = {
    label: 'First Name',
    value: 'Alexander',
};

export const EditFieldWithoutLabel = Template.bind({});
EditFieldWithoutLabel.args = {};
