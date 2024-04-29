import { Route } from 'react-router-dom';
import Status from '../Screens/Status';

const StatusScreens = (
    <>
        <Route
            path="/status"
            element={<Status />}
        />
    </>
);

export default StatusScreens;
