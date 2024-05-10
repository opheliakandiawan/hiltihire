import styled from 'styled-components';
import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import FONTSIZE from '../../../../platform/Style/FontSize';
import { assets } from '../../../../platform/assets/assets';
import COLORS from '../../../../platform/Style/Colors';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';

const TimelineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly; /* Spread out timeline elements evenly */
    margin-top: 10px; /* Reduce top margin */
    margin-right: -100px; /* Reduce right margin */
`;

const Circle = styled.div`
    width: 30px; /* Reduce circle size */
    height: 30px; /* Reduce circle size */
    border-radius: 50%;
    background-color: ${({ active }) => (active ? COLORS.red : '#f0f0f0')};
    color: ${({ active }) => (active ? '#fff' : '#000')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12px; /* Adjust font size */
`;

const Line = styled.div`
    width: 50px; /* Adjust line length */
    height: 2px;
    background-color: #ccc;
    margin-top: -5px; /* Reduce space between circle and line */
    margin-left: -180px; /* Reduce space between circle and line */
    margin-right: -180px; /* Reduce space between circle and line */
`;

const LabelContainer = styled.div`
    display: flex;
`;

const AppliedLabel = styled.div`
    text-align: center;
    margin-top: 20px; /* Move the text down */
    margin-left: 235px; /* Adjust left margin */
`;

const InterviewedLabel = styled.div`
    text-align: center;
    margin-top: 20px; /* Move the text down */
    margin-left: 150px; /* Adjust left margin */
`;

const AcceptedLabel = styled.div`
    text-align: center;
    margin-top: 20px; /* Move the text down */
    margin-left: 143px; /* Adjust left margin */
`;

const OfferLabel = styled.div`
    text-align: center;
    margin-top: 20px; /* Move the text down */
    margin-left: 120px; /* Adjust left margin */
`;

const Timeline = () => {
    return (
        <>
            <TimelineContainer>
                <div>
                    <Circle active>01</Circle>
                </div>
                <Line height={40} />
                <div>
                    <Circle active>02</Circle>
                </div>
                <Line height={40} />
                <div>
                    <Circle active>03</Circle>
                </div>
                <Line height={40} />
                <div>
                    <Circle>04</Circle>
                </div>
            </TimelineContainer>
            <LabelContainer>
                <AppliedLabel>Applied</AppliedLabel>
                <InterviewedLabel>Interviewed</InterviewedLabel>
                <AcceptedLabel>Accepted</AcceptedLabel>
                <OfferLabel>
                    Offer Letter <br /> Accepted / Rejected
                </OfferLabel>
            </LabelContainer>
        </>
    );
};

const Box2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center the box horizontally */
    align-items: center; /* Center the box vertically */
    margin-top: 40px;
    padding: 40px; /* Increase padding for larger box */
    background-color: #f0f0f0; /* Background color for the "school board" */
    border-radius: 20px; /* Increase border radius for larger box */
    width: 480px; /* Increase width for larger box */
    margin: 40px auto; /* Center the box horizontally */
    margin-left: 275px; /* Increase margin for larger box */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Add shadow for 3D effect */
    margin-bottom: 80px;
    height: 220px; /* Adjust height as needed */
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; /* Center content horizontally */
    width: 100%; /* Ensure content fills the box */
    margin-left: 220px;
`;

const StyledTitle = styled.h1`
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 15px;
    margin-right: auto; /* Push title to the left */
`;

const StyledSubTitle = styled.p`
    font-size: ${FONTSIZE.large}; /* Increase text size */
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    margin-bottom: 20px;
    margin-left: 100px;
`;

const StyledImage = styled.img`
    max-width: 250px; /* Increase image size */
    height: 220px;
    margin-left: -250px; /* Add spacing between image and personal info */
`;

const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StyledText = styled.p`
    font-size: ${FONTSIZE.small}; /* Increase text size */
    font-weight: ${FONTWEIGHT.REGULAR};
    display: flex;
    align-items: center;
    margin-left: 100px;
    line-height: 60px;
`;

const StyledImage2 = styled.img`
    max-width: 40px; /* Increase image size */
    height: 22px;
    margin-right: 10px; /* Add spacing between image and text */
`;

const ViewOfferButton = styled(Button)`
    && {
        background-color: ${PlatformReusableStyles.PrimaryButtonStyles.backgroundColor};
        color: ${PlatformReusableStyles.PrimaryButtonStyles.color};
        border: ${PlatformReusableStyles.PrimaryButtonStyles.border};
        width: 180px; /* Adjust width as needed */
        font-weight: ${PlatformReusableStyles.PrimaryButtonStyles.fontWeight}; /* Make text bold */
        &:hover {
            background-color: ${PlatformReusableStyles.PrimaryButtonStyles
                .backgroundColor}; /* Prevent color change on hover */
        }
        display: flex;
        margin-top: 50px;
        margin-left: 820px; /* Push the button to the right */
    }
`;

export default function Status() {
    return (
        <>
            <StyledTitle>Application Stages</StyledTitle>
            <Box2>
                <ContentContainer>
                    <StyledImage
                        src={assets.vinnie_photo}
                        alt="Personal Image"
                    />
                    <PersonalInfo>
                        <StyledSubTitle>UI Designer</StyledSubTitle>
                        <StyledText>
                            <StyledImage2
                                src={assets.Internship}
                                alt="Internship Image"
                            />
                            Internship
                        </StyledText>
                        <StyledText>
                            <StyledImage2
                                src={assets.Location}
                                alt="Location Image"
                            />
                            PJ, Selangor
                        </StyledText>
                    </PersonalInfo>
                </ContentContainer>
            </Box2>
            <Timeline /> {/* Add the Timeline component */}
            <ViewOfferButton>View Offer Letter</ViewOfferButton>
        </>
    );
}
