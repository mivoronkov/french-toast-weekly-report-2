import React from 'react';
import PropTypes from 'prop-types';
import { ProfileHeaderComponent } from '../../headers/profile-header/profile-header.component';
import { MyReportsContent } from '../../my-reports/my-reports-contetnt.component';
import { Helmet } from 'react-helmet';

export function MyReports({ first_name, last_name, email, avatar_path, data }) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>My reports</title>
            </Helmet>
            <ProfileHeaderComponent
                first_name={first_name}
                email={email}
                last_name={last_name}
                avatar_path={avatar_path}
            />
            <MyReportsContent data={data} />
        </main>
    );
}

MyReports.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar_path: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            duration: PropTypes.string,
            weeklyInformation: PropTypes.arrayOf(
                PropTypes.shape({
                    stateName: PropTypes.string,
                    stateLevel: PropTypes.number,
                    comments: PropTypes.string,
                })
            ),
            weeklyNotations: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string,
                    title: PropTypes.string,
                })
            ),
        })
    ),
};
