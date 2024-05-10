import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';

const ButtonsDiv = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const StyledButton = styled(Button)`
    flex-grow: 1;
`;

export default function Careers() {
    return (
        <div>
            <p>Testing Careers</p>
            <ButtonsDiv>
                <Link to="/candidate/careers/interview">
                    <StyledButton style={PlatformReusableStyles.PrimaryButtonStyles}>To interview Page</StyledButton>
                </Link>
            </ButtonsDiv>
        </div>
    );
}
