import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Landing from '../../../modules/candidate/Landing';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Landing />}
        />,
    ),
);

export default router;
