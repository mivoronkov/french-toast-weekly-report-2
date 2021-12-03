import React from "react";

import logo from '../../../../img/logo.png';

export function SidebarComponent() {
    return (
        <aside className="p-3 d-flex flex-column justify-content-between text">
            <div>
                <img src={logo} alt="logo"/>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item p-2">
                            <a className="nav-link" href="#">Launch Guide</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="invite_your_team.html">Invite Your Team</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="team_reports.html">Team Reports</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="my_reports.html">My Reports</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link text-warning" href="fill-out-report.html">Fill out a Report</a>
                        </li>
                    </ul>
            </div>
            <div>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item p-2 pb-3">
                        <a className="nav-link" href="#">Back to Elite</a>
                    </li>
                    <li className="nav-item p-2 pt-3 pb-3">
                        <a className="nav-link" href="my_company.html">My Company</a>
                    </li>
                    <li className="nav-item p-2 pt-3 pb-3">
                        <a className="nav-link" href="edit-profile.html"><i className="bi bi-gear-fill"></i> My Profile</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link" href="#"><i className="bi bi-arrow-left-square-fill"></i> Sign Out</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
