import React from "react";
import logo from '../../../../img/logo.png';

export function HeaderComponent({title}) {
    return (
        <header className="bg-dark p-3 text-center text-light">
            <img src={logo} alt="logo"/>
                <h1>{title}</h1>
        </header>
    );
}