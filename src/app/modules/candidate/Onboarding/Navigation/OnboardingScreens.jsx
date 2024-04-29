import { Route } from 'react-router-dom';
import Onboarding from '../Screens/Onboarding';

const OnboardingScreens = (
    <>
        <Route
            path="/onboarding"
            element={<Onboarding />}
        />
    </>
);

export default OnboardingScreens;
