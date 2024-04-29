import { Route } from 'react-router-dom';
import Analytics from '../Screens/Analytics';

const AnalyticsScreens = (
    <>
        <Route
            path="/hr/analytics"
            element={<Analytics />}
        />
    </>
);

export default AnalyticsScreens;
