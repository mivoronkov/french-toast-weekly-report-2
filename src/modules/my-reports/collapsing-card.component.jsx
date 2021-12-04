import React from 'react';
import PropTypes from "prop-types";

import {WeeklyReportInformation} from "./weekly-report-information.component";
import {WeeklyCardNotation} from "./weekly-card-notation.component";

export function CollapsingCard({weeklyInformation, weeklyNotations, idCollpase}){
    let informationReport = weeklyInformation.map(el =>{
        return (<WeeklyReportInformation comments={el.comments} stateLevel={el.stateLevel} stateName={el.stateName} key={el.stateName} />)
    });
    let notations = weeklyNotations.map( el => {
        return (<WeeklyCardNotation notationText={el.text} notationTitle={el.title} key ={el.title}/>)
    });
    let classList =["collapse", "bg-white", "p-3", "mb-2", "w-100"];

    return(
        <div id={idCollpase} className={classList.join(' ')}>
            {informationReport}
            {notations}
        </div>
    );
}

CollapsingCard.propTypes = {
    weeklyInformation: PropTypes.arrayOf(PropTypes.shape({
        stateName: PropTypes.string,
        stateLevel: PropTypes.number,
        comments: PropTypes.string
    })),
    weeklyNotations: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        title: PropTypes.string,
    })),
    idCollpase: PropTypes.string
};