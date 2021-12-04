import React from "react";
import PropTypes from "prop-types";

export function ReportCalendar ({previousPeriod, currentPeriod}) {
    return (
        <ul className="pagination pagination-sm my-3">
            <li className="page-item"><a href="#" className="page-link bg-dark">Previous period:{previousPeriod}</a></li>
            <li className="page-item"><a href="#" className="page-link bg-dark">Current period:{currentPeriod}</a></li>
            <li className="page-item"><a href="#" className="page-link bg-dark">Older Reports</a></li>
        </ul>
    );
}

ReportCalendar.propTypes = {
    previousPeriod: PropTypes.string,
    currentPeriod: PropTypes.string
}
