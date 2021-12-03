import React from "react";

export function InviteYourTeamSuccessMessageComponent() {
    return (
        <div className="px-2 pt-3 container-fluid" id="success-info-div">
            <div className="form mx-auto">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="pb-2">
                            <strong>
                                Success! Your team member has been invited to the Weekly Report Tool.
                            </strong>
                        </div>
                        <div className="pb-2">
                            Once they accept your invitation, they'll be able to create their reports.
                        </div>
                    </div>
                </div>
            </div>
            <div className="form mx-auto pt-3">
                <p className="font-weight-500"><i className="bi bi-caret-right-fill"></i> The team member didn't receive
                    your invite?</p>
            </div>
        </div>
    );
}
