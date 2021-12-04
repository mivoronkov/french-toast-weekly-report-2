import React, {useState} from "react";
import {InviteYourTeamSuccessMessageComponent} from "./invite-your-team-success-message.component";

export function InviteYourTeamComponent() {
    const [showSuccess, setShowSuccess] = useState(false);
    const onClick = () => setShowSuccess(true);

    return (
        <div>
            {showSuccess ? <InviteYourTeamSuccessMessageComponent /> : null}
            <div className="p-2 container-fluid">
                <div className="form mx-auto">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="pb-2">
                                <strong>Enter the team member you would like to invite.</strong>
                            </div>
                            <div className="pb-2">
                                Don&apos;t Worry! You&apos;ll be able to add more team members later.
                            </div>
                            <div className="form-group pt-2 pb-2">
                                <label>
                                    <strong>First Name</strong>
                                </label>
                                <input className="form-control"/>
                            </div>
                            <div className="form-group pt-2 pb-2">
                                <label>
                                    <strong>Last Name</strong>
                                </label>
                                <input className="form-control"/>
                            </div>
                            <div className="form-group pt-2 pb-2">
                                <label>
                                    <strong>Email</strong>
                                </label>
                                <input className="form-control"/>
                            </div>
                            <a>
                                <button
                                    className="btn btn-warning mt-3"
                                    onClick={onClick}
                                >
                                    Invite
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
