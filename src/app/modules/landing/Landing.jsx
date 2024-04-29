import { Button } from '@mui/material';
import PlatformReusableStyles from '../../platform/Style/PlatformReusableStyles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const ButtonsDiv = styled.div`
    display: flex;
    gap: 2rem;
    padding: 1rem;
`;

export default function Landing() {
    return (
        <div>
            <StyledDiv>
                <p>Log In as</p>
                <ButtonsDiv>
                    <Link to="/careers">
                        <Button style={PlatformReusableStyles.PrimaryButtonStyles}>Candidate</Button>
                    </Link>

                    {/* TODO: Link to HR page */}
                    <Button style={PlatformReusableStyles.SecondaryButtonStyles}>HR</Button>
                </ButtonsDiv>
            </StyledDiv>
        </div>
    );
}
