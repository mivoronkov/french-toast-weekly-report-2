import React, { useState } from 'react';
import { TitleBlockComponent } from '../../containers/title-block/title-block.component';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';

export function EditMembersPopupComponent({
    membersToEdit,
    availableMembers,
    memberType,
    onClose,
    onSave,
}) {
    const KeyCodes = {
        comma: 188,
        enter: 13,
    };

    const [tags, setTags] = useState(
        membersToEdit.map((member) => {
            return {
                id: member.id.toString(),
                text: `${member.firstName} ${member.lastName}`,
            };
        })
    );
    //noinspection JSUnusedLocalSymbols
    let tagParams = {
        suggestions: availableMembers.map((member) => {
            return {
                id: member.id.toString(),
                text: `${member.firstName} ${member.lastName}`,
            };
        }),
        delimiters: [KeyCodes.comma, KeyCodes.enter],
        handleDelete: (i) => {
            setTags(tags.filter((tag, index) => index !== i));
        },

        handleDrag: (tag, currPos, newPos) => {
            const newTags = tags.slice();

            newTags.splice(currPos, 1);
            newTags.splice(newPos, 0, tag);

            // re-render
            setTags(newTags);
        },
        handleTagClick: (index) => {},
    };
    tagParams.handleAddition = (tag) => {
        if (
            tags.filter(function (item) {
                return item.text === tag.text;
            }).length === 0 &&
            tagParams.suggestions.filter(function (item) {
                return item.text === tag.text;
            }).length !== 0
        ) {
            setTags([...tags, tag]);
        }
    };

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
                <ReactTags
                    tags={tags}
                    suggestions={tagParams.suggestions}
                    delimiters={tagParams.delimiters}
                    handleDelete={tagParams.handleDelete}
                    handleAddition={tagParams.handleAddition}
                    handleDrag={tagParams.handleDrag}
                    handleTagClick={tagParams.handleTagClick}
                    allowUnique={true}
                    inputFieldPosition='bottom'
                    autocomplete
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
    membersToEdit: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
        })
    ),
    availableMembers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
        })
    ),
    memberType: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};
