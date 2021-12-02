import React from "react";

function SectionLabel({labelText, ...props}) {
    return (
        <div class="d-flex flex-column align-items-center">
            <p className="text-uppercase fw-bold mb-0 mt-2">{labelText}</p>
            <span className = "yellow-line mb-4"> </span>
        </div>
    );
};

export default SectionLabel;