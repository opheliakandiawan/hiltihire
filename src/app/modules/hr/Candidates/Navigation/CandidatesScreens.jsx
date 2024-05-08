import { Route } from 'react-router-dom';
import Candidates from '../Screens/Candidates';
// import Vinnie from '../Screens/Vinnie';

const CandidatesScreens = (
    <>
        <Route
            path="/hr/candidates"
            element={<Candidates />}
            // element={<Vinnie />}
        />
    </>
);

export default CandidatesScreens;
