import { Route } from 'react-router-dom';
import Feedback from '../Screens/Feedback';

const FeedbackScreens = (
    <>
        <Route
            path="/feedback"
            element={<Feedback />}
        />
    </>
);

export default FeedbackScreens;
