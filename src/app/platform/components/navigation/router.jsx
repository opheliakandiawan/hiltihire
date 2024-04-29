import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CandidateLayout from '../Layouts/CandidateLayout';
import HrLayout from '../Layouts/HrLayout';
import Landing from '../../../modules/landing/Landing';
import CareersScreens from '../../../modules/candidate/Careers/Navigation/CareersScreens';
import FeedbackScreens from '../../../modules/candidate/Feedback/Navigation/FeedbackScreens';
import OnboardingScreens from '../../../modules/candidate/Onboarding/Navigation/OnboardingScreens';
import StatusScreens from '../../../modules/candidate/Status/Navigation/StatusScreens';
import CandidatesScreens from '../../../modules/hr/Candidates/Navigation/CandidatesScreens';
import AnalyticsScreens from '../../../modules/hr/Analytics/Navigation/AnalyticsScreens';

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
            <Route element={<HrLayout />}>
                {CandidatesScreens}
                {AnalyticsScreens}
            </Route>
        </>,
    ),
);

export default router;
