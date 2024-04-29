import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CandidateLayout from '../Layouts/CandidateLayout';
import CareersScreens from '../../../modules/candidate/Careers/Navigation/CareersScreens';
import FeedbackScreens from '../../../modules/candidate/Feedback/Navigation/FeedbackScreens';
import OnboardingScreens from '../../../modules/candidate/Onboarding/Navigation/OnboardingScreens';
import StatusScreens from '../../../modules/candidate/Status/Navigation/StatusScreens';
import Landing from '../../../modules/landing/Landing';
// import Careers from '../../../modules/candidate/Careers/Screens/Careers';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<Landing />}
            />
            <Route element={<CandidateLayout />}>
                {CareersScreens}
                {FeedbackScreens}
                {OnboardingScreens}
                {StatusScreens}
            </Route>
            ,
        </>,
    ),
);

export default router;
