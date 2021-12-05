import React from 'react';
import PropTypes from "prop-types";

import {WeeklyReportInformation} from './weekly-report-information.component';
import {WeeklyCardNotation} from './weekly-card-notation.component';

export function ExpandReportCard({duration, weeklyInformation, weeklyNotations}){
    let informationReport = weeklyInformation.map(el =>{
        return (<WeeklyReportInformation comments={el.comments} stateLevel={el.stateLevel} stateName={el.stateName} key={el.stateName} />)
    });
    let notations = weeklyNotations.map( el => {
        return (<WeeklyCardNotation notationText={el.text} notationTitle={el.title} key ={el.title}/>)
    });
    return(
        <div className="w-90">
            <div className="row flex-nowrap bg-white align-items-center justify-content-between mb-0">
                <p className="py-3 my-2 col-lg-7 collapsed-card-label">{duration}</p>
                <button type="button" className="btn dropdown-toggle col-lg-1 btn-dark me-4" data-bs-toggle="collapse"
                        data-bs-target="#collapseCard">Collapse
                </button>
            </div>
            <div id="collapseCard" className="collapse bg-white p-3 mb-2">
                {informationReport}
                {notations}
            </div>
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