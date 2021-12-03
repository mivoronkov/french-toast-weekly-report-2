import React from "react";

export function TeamSelector ({...props}) {
    return (
        <ul className="pagination pagination-sm my-3">
            <li className="page-item"><a href="team_reports.html" className="page-link bg-dark">Immediate Team</a></li>
            <li className="page-item"><a href="#" className="page-link bg-dark">Extended Team</a></li>
        </ul>
    );
}