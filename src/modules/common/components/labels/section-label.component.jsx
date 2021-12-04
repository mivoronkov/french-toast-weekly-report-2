import React from "react";
import PropTypes from "prop-types";

export function SectionLabel({labelText}) {
    return (
        <div className="d-flex flex-column align-items-center">
            <p className="text-uppercase fw-bold mb-0 mt-2">{labelText}</p>
            <span className = "yellow-line mb-4"> </span>
        </div>
    );
}

SectionLabel.propTypes = {
    labelText: PropTypes.string
}
