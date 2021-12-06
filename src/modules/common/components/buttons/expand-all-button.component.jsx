import React, {useState} from 'react';
import {ExpandReportCard} from '../../../my-reports/expand-report-card.component'
import PropTypes from "prop-types";

export function ExpandAllButton(props){
    const [toggledState, setToggledState] = useState(false)
    const onToggleHandler =()=>{
        setToggledState(prevState => !prevState);
    };
    // eslint-disable-next-line react/prop-types
    let expandCards = props.data.map((el,index)=><ExpandReportCard
        weeklyNotations={el.weeklyNotations}
        duration={el.duration}
        weeklyInformation={el.weeklyInformation}
        key={index}
        externalControl={toggledState}/>);
    return(
        <div  className="flex-column">
            <div className="d-flex flex-nowrap w-90 justify-content-end align-items-center my-2">
                <button
                    type="button"
                    className="btn btn-dark px-4"
                    onClick={onToggleHandler}
                >
                    {toggledState ? 'Collapse All' : 'Expand All'}
                </button>
            </div>
            {props.children}
            {expandCards}
        </div>
    );
}

ExpandAllButton.propTypes = {
    children: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.shape({
        duration: PropTypes.string,
        weeklyInformation: PropTypes.arrayOf(PropTypes.shape({
            stateName: PropTypes.string,
            stateLevel: PropTypes.number,
            comments: PropTypes.string
        })),
        weeklyNotations: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            title: PropTypes.string,
        })),
        externalControl: PropTypes.bool
    }))
};