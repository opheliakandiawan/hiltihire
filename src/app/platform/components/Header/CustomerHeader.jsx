import styled from 'styled-components';
import { Link /* useNavigate */ } from 'react-router-dom';
import Logo from '../Icons/logo.svg';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../Style/PlatformReusableStyles';

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
`;

const AuthContainer = styled.div`
    display: flex;
    flex: row;
    gap: 1rem;
    align-items: center;
`;

export default function CustomerHeader() {
    // const navigate = useNavigate();

    return (
        <RootContainer>
            <Link to="/">
                <img
                    src={Logo}
                    width={360}
                />
            </Link>
            <AuthContainer>
                <Button style={{ ...PlatformReusableStyles.SecondaryButtonStyles }}>Log In</Button>
                <Button style={{ ...PlatformReusableStyles.PrimaryButtonStyles }}>Sign Up</Button>
            </AuthContainer>
        </RootContainer>
    );
}
