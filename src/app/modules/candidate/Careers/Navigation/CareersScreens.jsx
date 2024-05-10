import { Route } from 'react-router-dom';
import Careers from '../Screens/Careers';
import Interview from '../../Interview/Screens/Interview';

const CareersScreens = (
    <>
        <Route
            path="/candidate/careers"
            element={<Careers />}
        />

        <Route
            path="/candidate/careers/interview"
            element={<Interview />}
        />
    </>
);

export default CareersScreens;
