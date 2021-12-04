import React from 'react';

export function LineItem(){
    return(
        <div className="row flex-nowrap bg-white w-90 align-items-center mb-2">
            <div className="py-3 col-lg-7"></div>
            <div className="col-lg-5 row flex-nowrap justify-content-around p-0 m-0">
                <p className="col text-center py-1 m-0">Morale</p>
                <p className="col text-center py-1 m-0">Stress</p>
                <p className="col text-center py-1 m-0">Workload</p>
                <p className="col"></p>
            </div>
        </div>
    );
}