import { Route } from 'react-router-dom';
import Candidates from '../Screens/Candidates';
import Vinnie from '../Screens/Vinnie';
import VinnieInterview from '../Screens/VinnieInterview';
import VinnieReport from '../Screens/VinnieReport';

const CandidatesScreens = (
    <>
        <Route
            path="/hr/candidates"
            element={<Candidates />}
        />

        <Route
            path="/hr/candidate/Vinnie Tiang"
            element={<Vinnie />}
        />
        <Route
            path="/hr/candidate/interview"
            element={<VinnieInterview />}
        />
        <Route
            path="/hr/candidate/report"
            element={<VinnieReport />}
        />
    </>
);

export default CandidatesScreens;
