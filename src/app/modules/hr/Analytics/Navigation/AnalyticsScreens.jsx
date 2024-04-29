import { Route } from 'react-router-dom';
import Analytics from '../Screens/Analytics';

const AnalyticsScreens = (
    <>
        <Route
            path="/analytics"
            element={<Analytics />}
        />
    </>
);

export default AnalyticsScreens;
