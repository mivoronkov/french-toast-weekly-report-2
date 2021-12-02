import React from "react";

function WeeklyLabels() {
    return (
        <div className="row flex-nowrap w-85">
            <div className="col-lg-5 py-3 m-2 "></div>
            <div className="col-lg-7 row flex-nowrap justify-content-around align-items-center">
                <p className="p-1 mb-0 text-center small col">9w ago</p>
                <p className="p-1 mb-0 text-center small col">8w ago</p>
                <p className="p-1 mb-0 text-center small col">7w ago</p>
                <p className="p-1 mb-0 text-center small col">6w ago</p>
                <p className="p-1 mb-0 text-center small col">5w ago</p>
                <p className="p-1 mb-0 text-center small col">4w ago</p>
                <p className="p-1 mb-0 text-center small col">3w ago</p>
                <p className="p-1 mb-0 text-center small col">2w ago</p>
                <p className="p-1 mb-0 text-center small col">1w ago</p>
                <p className="p-1 mb-0 text-center small col">Current</p>
            </div>
        </div>
    );
};

export default WeeklyLabels;