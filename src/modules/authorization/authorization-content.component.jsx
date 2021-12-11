import React from 'react';
import { AuthorizationInput } from './authorization-input.component';

export function AuthorizationContent() {
    const inputs = ['first-name', 'last-name', 'company'].map((el, index) => (
        <AuthorizationInput inputText={el} key={index} />
    ));
    return (
        <div>
            <div className='p-2 container-fluid'>
                <div className='form mx-auto'>
                    <div className='card shadow-sm'>
                        <div className='card-body d-flex flex-column'>
                            <div className='pb-2'>
                                <strong>
                                    Please enter your name and company.
                                </strong>
                            </div>
                            {inputs}
                            <div>
                                <button className='btn btn-warning mt-3'>
                                    Sign up
                                </button>
                                <button className='btn btn-warning mt-3 mx-3'>
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
