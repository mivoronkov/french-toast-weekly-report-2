import React from 'react';
import PropTypes from 'prop-types';

export function SelectCompany({ companyList }) {
    let companies = companyList.map((el) => {
        return (
            <option value={el.companyId} key={el.companyId}>
                {el.companyName}
            </option>
        );
    });
    return (
        <div>
            <label htmlFor='member-company' className='fw-bold'>
                Your company
            </label>
            <select
                size='1'
                name='member-company'
                id='member-company'
                className='form-select'
                style={{ maxWidth: '30%' }}
                required>
                {companies}
            </select>
        </div>
    );
}

SelectCompany.propTypes = {
    companyList: PropTypes.arrayOf(
        PropTypes.shape({
            companyId: PropTypes.number,
            companyName: PropTypes.string,
        })
    ),
};
