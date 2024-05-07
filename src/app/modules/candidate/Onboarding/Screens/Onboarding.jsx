import styled from 'styled-components';
import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import FONTSIZE from '../../../../platform/Style/FontSize';

const StyledTitle = styled.h1`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE['x-large']};
    margin-bottom: 20px; /* Adjust margin as needed */
    margin-left: 180px; /* Add margin to the left to position near the center */
`;

const CenteredContent = styled.div`
    text-align: center; /* Center the text and image */
`;

const StyledText = styled.p`
    font-weight: ${FONTWEIGHT.MEDIUM};
    font-size: ${FONTSIZE.medium};
    text-align: center; /* Center the text */
    margin-bottom: 50px; /* Add margin at the bottom */
`;

const StyledImage = styled.img`
    max-width: 45%;
    height: auto;
    margin: 0 auto 20px; /* Center the image horizontally and add 20px margin at the bottom */
    display: block; /* Ensure the margin auto works */
`;

const StyledText2 = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE.small};
    margin-left: 180px;
`;

export default function Onboarding() {
    return (
        <div>
            <StyledTitle>Welcome, Vinnie!</StyledTitle>
            <CenteredContent>
                <StyledImage
                    src="/Onboardingdecopic.jpg"
                    alt="Onboarding Picture"
                />
                <StyledText>Welcome to UI Designer Team! We’re so happy you’re here with us.</StyledText>
            </CenteredContent>
            <StyledText2>Meet your team members !</StyledText2>
        </div>
    );
}
