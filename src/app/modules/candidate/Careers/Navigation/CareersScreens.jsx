import { Route } from 'react-router-dom';
import Careers from '../Screens/Careers';

const CareersScreens = (
    <>
        <Route
            path="/careers"
            element={<Careers />}
        />
    </>
);

export default CareersScreens;
