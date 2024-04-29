import { Route } from 'react-router-dom';
import Candidates from '../Screens/Candidates';

const CandidatesScreens = (
    <>
        <Route
            path="/candidates"
            element={<Candidates />}
        />
    </>
);

export default CandidatesScreens;
