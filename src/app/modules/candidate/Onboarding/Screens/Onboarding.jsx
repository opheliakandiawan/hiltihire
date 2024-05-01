import styled from 'styled-components';
import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import FONTSIZE from '../../../../platform/Style/FontSize';

const StyledTitle = styled.h1`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE.large};
`;

export default function Onboarding() {
    return (
        <div>
            <StyledTitle>Welcome, Vinnie!</StyledTitle>
        </div>
    );
}
