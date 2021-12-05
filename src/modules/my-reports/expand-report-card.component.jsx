import React, {useState} from 'react';
import PropTypes from "prop-types";

import {CollapsingCard} from './collapsing-card.component';
import {ExtensibleSmile} from '../common/components/pictures/smile.component';

export function ExpandReportCard({duration, weeklyInformation, weeklyNotations}){
    const [toggledState, setToggledState] = useState(false);
    const [randomId] = useState('w'+(Math.random()+1).toString(36).substring(2));

    let onClickHandler =() =>{
        setToggledState(prevState => !prevState);
    };

    let classList = ["row", "flex-nowrap", "align-items-center", "justify-content-around", "p-0", "m-0", "col-lg-5"];

    let smileImages = toggledState ? <div  className="col-9" ></div>: weeklyInformation.map(el=>{
        return(
            <div className="col d-flex justify-content-center" key={el.stateName}>
                <ExtensibleSmile smileNumber={el.stateLevel} additionalClasses={'big-smile'}/>
            </div>
        );
    });
    const collapsedButtonClasses =['btn', 'dropdown-toggle'];
    toggledState ? collapsedButtonClasses.push('btn-white') : collapsedButtonClasses.push('btn-dark');

    return(
        <div className="w-90 d-flex flex-column align-items-center main-background">
            <div className="row flex-nowrap bg-white justify-content-between align-items-center mb-2 w-100">
                <p className="py-3 my-2 col-lg-7 fw-bold">{duration}</p>
                <div className={classList.join(" ")}>
                    {smileImages}
                    <button
                        type="button"
                        className="btn dropdown-toggle col"
                        data-bs-toggle="collapse"
                        data-bs-target={'#' + randomId}
                        aria-expanded="false"
                        aria-controls="multiCollapseExample2"
                        onClick={onClickHandler}
                    >
                        {toggledState ? 'Collapse' : 'Expand'}
                    </button>
                </div>
            </div>
            <CollapsingCard idCollpase={randomId} weeklyNotations={weeklyNotations} weeklyInformation={weeklyInformation}/>
        </div>
    );
}

ExpandReportCard.propTypes = {
    duration: PropTypes.string,
    weeklyInformation: PropTypes.arrayOf(PropTypes.shape({
        stateName: PropTypes.string,
        stateLevel: PropTypes.number,
        comments: PropTypes.string
    })),
    weeklyNotations: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        title: PropTypes.string,
    }))
};