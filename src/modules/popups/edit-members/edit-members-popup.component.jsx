import React from 'react';
import { TitleBlockComponent } from '../../containers/title-block/title-block.component';
import PropTypes from 'prop-types';

export function EditMembersPopupComponent({
    members,
    memberType,
    onClose,
    onSave,
}) {
    const memberTags = members.map((member, index) => {
        return (
            <button type='button' className='btn btn-dark p-1' key={index}>
                {`${member.firstName} ${member.lastName} `}
                <span className='badge'>
                    <span className='text-black-50'>|</span> X
                </span>
            </button>
        );
    });
    return (
        <div className='modal-content top-border-color p-4'>
            <div className='modal-header border-0'>
                <button type='button' className='btn-close' onClick={onClose} />
            </div>
            <div className='modal-body'>
                <TitleBlockComponent title={`Edit ${memberType}(s)`}>
                    <p>
                        By default, the person who sent you the invite will
                        receive you weekly report. You may also select the
                        person you report to directly as an additional leader.
                    </p>
                    <p className='my-lg-4'>
                        Pro Tip: You can change who sees your report in your
                        profile settings.{' '}
                    </p>
                </TitleBlockComponent>
                <div className='d-inline'>{memberTags}</div>
                <input
                    className='form-control form-control-lg mt-4'
                    type='text'
                    aria-label='.form-control-lg example'
                />
            </div>
            <div className='modal-footer modal-bottom-button border-0 mt-3'>
                <button
                    type='button'
                    className='btn save-button'
                    onClick={onSave}>
                    Save changes
                </button>
            </div>
        </div>
    );
}

EditMembersPopupComponent.propTypes = {
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
        })
    ),
    memberType: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};
