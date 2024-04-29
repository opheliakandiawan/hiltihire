import { Route } from 'react-router-dom';
import Careers from '../Screens/Careers';

const CareersScreens = (
    <>
        <Route
            path="/candidate/careers"
            element={<Careers />}
        />
    </>
);

export default CareersScreens;
