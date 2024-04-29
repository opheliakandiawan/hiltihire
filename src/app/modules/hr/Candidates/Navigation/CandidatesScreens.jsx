import { Route } from 'react-router-dom';
import Candidates from '../Screens/Candidates';

const CandidatesScreens = (
    <>
        <Route
            path="/hr/candidates"
            element={<Candidates />}
        />
    </>
);

export default CandidatesScreens;
