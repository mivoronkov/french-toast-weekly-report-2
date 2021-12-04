import React from 'react';
import PropTypes from "prop-types";

export function ExpandAll({idItems}){
    const controls = idItems.join(" ");
    return(
        <div className="d-flex flex-nowrap w-90 justify-content-end align-items-center my-2">
            <button
                type="button"
                className="btn btn-dark px-4"
                data-bs-toggle="collapse"
                data-bs-target=".collapse"
                aria-expanded="false"
                aria-controls={controls}
            >
                Expand All
            </button>
        </div>
    );
}

ExpandAll.propTypes = {
    idItems: PropTypes.arrayOf(PropTypes.string)
}