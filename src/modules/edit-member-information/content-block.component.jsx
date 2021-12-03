import React from "react";

function ContentBlock({title, content}) {
    return (
        <div>
            <div className="fw-bold text-uppercase">{title}</div>
            <hr className="mt-1"/>
            {content}
        </div>
    );
}

export default ContentBlock;
