import React from "react";

function ReportEmotionalCard ({memberName, ...props}) {
return (
    <div className="row flex-nowrap bg-white w-85 align-items-center mb-2">
        <p className="py-3 m-2 col-lg-5">{memberName}</p>
        <div className="col-lg-7 row flex-nowrap justify-content-around">
            <img src="happy.svg" alt="smile" className="smile col m-auto"/>
            <img src="sad.svg" alt="smile" className="smile col m-auto"/>
            <img src="neutral.svg" alt="smile" className="smile col m-auto"/>
            <img src="neutral.svg" alt="smile" className="smile col m-auto"/>
            <img src="sad.svg" alt="smile" className="smile col m-auto"/>
            <img src="neutral.svg" alt="smile" className="smile col m-auto"/>
            <img src="unmarked.svg" alt="smile" className="smile col m-auto"/>
            <img src="unmarked.svg" alt="smile" className="smile col m-auto"/>
            <img src="unmarked.svg" alt="smile" className="smile col m-auto"/>
        </div>
    </div>
);
}

export default ReportEmotionalCard;