import React, {useState} from 'react';
import {element} from "prop-types";

export function ExpandAll(){
    const [toggledState, setToggledState] = useState(false)
    const onToggleHandler =()=>{
        const idCollapsedElement = document.querySelectorAll('.collapse');
        const toggleAction = toggledState ? 'remove' : 'add';
        idCollapsedElement.forEach(element =>{
            element.classList[toggleAction]('show');
        });
        setToggledState(prevState => !prevState);
    };
    return(
        <div className="d-flex flex-nowrap w-90 justify-content-end align-items-center my-2">
            <button
                type="button"
                className="btn btn-dark px-4"
                onClick={onToggleHandler}
            >
                {toggledState ? 'Collapse All' : 'Expand All'}
            </button>
        </div>
    );
}
