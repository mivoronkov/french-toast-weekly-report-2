import React from 'react';
import PropTypes from 'prop-types';
import { ProfileHeaderComponent } from '../../headers/profile-header/profile-header.component';
import { MyReportsContent } from '../../my-reports/my-reports-content.component';
import { Helmet } from 'react-helmet';
import { userInDBStore } from '../../store/user-in-d-b-store';
import { useStore } from 'effector-react';

export function MyReports({ first_name, last_name, email, avatar_path, data }) {
    const userInDB = useStore(userInDBStore);
    if (userInDB) {
        first_name = userInDB.firstName;
        last_name = userInDB.lastName;
        email = userInDB.email;
    }
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
