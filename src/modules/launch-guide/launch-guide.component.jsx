import React from "react";

import launch_guide_invite from '../../img/launch_guide_invite.png';
import launch_guide_encourage from '../../img/launch_guide_encourage.png';
import launch_guide_remind from '../../img/launch_guide_remind.png';
import launch_guide_read from '../../img/launch_guide_read.png';

export function LaunchGuideComponent() {
    return (
        <div className="p-sm-5 container">
            <div className="row justify-content-center pb-5 pt-5">
                <div className="col-4 launch-guide-col">
                    <div className="launch-guide-text-header">
                        Invite Your Team
                    </div>
                    <div className="launch-guide-text-info">
                        Click on the link below and invite the team
                        members who directly report to you.
                    </div>
                    <a href="invite_your_team.html">
                        <button className="btn btn-warning mt-3">
                            Invite Your Team
                        </button>
                    </a>
                </div>
                <div className="col-4">
                    <img className="launch-guide-img" src={launch_guide_invite} alt="invite"/>
                </div>
            </div>
            <div className="row justify-content-center pb-5 pt-5">
                <div className="col-4">
                    <img className="launch-guide-img" src={launch_guide_encourage} alt="encourage"/>
                </div>
                <div className="col-4 launch-guide-col">
                    <div className="launch-guide-text-header">
                        Encourage Your Team to Accept Your Invitation
                    </div>
                    <div className="launch-guide-text-info">
                        When they receive your invitation, team
                        members will be prompted to complete their
                        profiles. If a team member hasn&apos;t created their
                        profile within 24 hours, follow up with them!
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pb-5 pt-5">
                <div className="col-4 launch-guide-col">
                    <div className="launch-guide-text-header">
                        Remind Your Team
                    </div>
                    <div className="launch-guide-text-info">
                        Every Friday, we&apos;ll automatically send your team
                        members an email reminding them to fill out
                        their Weekly Report. But we also encourage <strong className="fst-italic">you</strong>
                        to constantly request their Weekly Reports so
                        they realize the importance of this new habit.
                    </div>
                </div>
                <div className="col-4">
                    <img className="launch-guide-img" src={launch_guide_remind} alt="remind"/>
                </div>
            </div>
            <div className="row justify-content-center pb-5 pt-5">
                <div className="col-4">
                    <img className="launch-guide-img" src={launch_guide_read} alt="read"/>
                </div>
                <div className="col-4 launch-guide-col">
                    <div className="launch-guide-text-header">
                        Read Their Reports
                    </div>
                    <div className="launch-guide-text-info">
                        Set aside some time on Monday to read all the
                        reports. Then reach out to any team members
                        who need to be acknowledged for a success or
                        supported during a difficult time. (And yes, we&apos;ll
                        send you a reminder to read your reports each
                        week too.)
                    </div>
                </div>
            </div>
        </div>
    );
}
